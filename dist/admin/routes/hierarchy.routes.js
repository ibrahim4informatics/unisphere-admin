import express from 'express';
export const createHierarchyRoutes = (prisma) => {
    const router = express.Router();
    router.get('/universities', async (req, res) => {
        const rows = await prisma.university.findMany({ select: { id: true, name: true }, orderBy: { name: 'asc' } });
        res.json(rows);
    });
    router.get('/faculties', async (req, res) => {
        const universityId = req.query.universityId;
        if (!universityId)
            return res.status(400).json({ error: 'universityId required' });
        const rows = await prisma.faculty.findMany({ where: { university_id: universityId }, select: { id: true, name: true }, orderBy: { name: 'asc' } });
        res.json(rows);
    });
    router.get('/departments', async (req, res) => {
        const facultyId = req.query.facultyId;
        if (!facultyId)
            return res.status(400).json({ error: 'facultyId required' });
        const rows = await prisma.department.findMany({ where: { faculty_id: parseInt(facultyId) }, select: { id: true, name: true }, orderBy: { name: 'asc' } });
        res.json(rows);
    });
    router.get('/fields', async (req, res) => {
        const departmentId = req.query.departmentId;
        if (!departmentId)
            return res.status(400).json({ error: 'departmentId required' });
        const rows = await prisma.field.findMany({ where: { department_id: parseInt(departmentId) }, select: { id: true, name: true }, orderBy: { name: 'asc' } });
        res.json(rows);
    });
    router.get('/levels', async (req, res) => {
        const fieldId = req.query.fieldId;
        if (!fieldId)
            return res.status(400).json({ error: 'fieldId required' });
        const rows = await prisma.level.findMany({ where: { field_id: parseInt(fieldId) }, select: { id: true, name: true }, orderBy: { name: 'asc' } });
        res.json(rows);
    });
    router.get('/university/:universityId/faculties', async (req, res) => {
        const { universityId } = req.params;
        const rows = await prisma.faculty.findMany({ where: { university_id: universityId }, include: { _count: { select: { departments: true } } }, orderBy: { created_at: 'desc' } });
        res.json(rows);
    });
    router.get('/faculty/:facultyId/departments', async (req, res) => {
        const { facultyId } = req.params;
        const rows = await prisma.department.findMany({ where: { faculty_id: parseInt(facultyId) }, include: { _count: { select: { fields: true } } }, orderBy: { created_at: 'desc' } });
        res.json(rows);
    });
    router.get('/department/:departmentId/fields', async (req, res) => {
        const { departmentId } = req.params;
        const rows = await prisma.field.findMany({ where: { department_id: parseInt(departmentId) }, include: { _count: { select: { levels: true } } }, orderBy: { created_at: 'desc' } });
        res.json(rows);
    });
    router.get('/field/:fieldId/levels', async (req, res) => {
        const { fieldId } = req.params;
        const rows = await prisma.level.findMany({ where: { field_id: parseInt(fieldId) }, orderBy: { created_at: 'asc' } });
        res.json(rows);
    });
    router.get('/structure/:universityId', async (req, res) => {
        const { universityId } = req.params;
        const uni = await prisma.university.findUnique({ where: { id: universityId }, include: { fculties: { include: { departments: { include: { fields: { include: { levels: true } } } } } } } });
        if (!uni)
            return res.status(404).json({ error: 'Not found' });
        const structure = {
            id: uni.id,
            name: uni.name,
            type: 'university',
            count: uni.fculties?.length || 0,
            children: (uni.fculties || []).map((f) => ({ id: f.id, name: f.name, type: 'faculty', count: f.departments?.length || 0, children: (f.departments || []).map((d) => ({ id: d.id, name: d.name, type: 'department', count: d.fields?.length || 0, children: (d.fields || []).map((fd) => ({ id: fd.id, name: fd.name, type: 'field', count: fd.levels?.length || 0, children: (fd.levels || []).map((lv) => ({ id: lv.id, name: lv.name, type: 'level', count: 0, children: [] })) })) })) }))
        };
        res.json(structure);
    });
    return router;
};
