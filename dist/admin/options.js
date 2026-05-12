import componentLoader, { Components } from './component-loader.js';
import { getModelByName } from '@adminjs/prisma';
import initializeDB from '../db/index.js';
import argon2 from "argon2";
const hash = async (value) => {
    try {
        const hash = await argon2.hash(value);
        return hash;
    }
    catch (err) {
        console.log(`Argon2 Hash Error:${err}`);
        throw new Error("can not hash password");
    }
};
const { prisma } = await initializeDB();
const postResource = {
    resource: { model: getModelByName('Post'), client: prisma },
    options: {
        navigation: { name: 'Social', icon: 'Globe' },
        listProperties: ['id', 'type', 'author', 'created_at'],
        sort: { sortBy: 'created_at', direction: 'desc' },
        properties: {
            author_id: {
                reference: 'User',
            },
        },
        actions: {
            show: {
                component: Components.PostShow,
                handler: async (request, response, context) => {
                    const id = context.record?.id();
                    if (!id)
                        return { record: context.record?.toJSON() };
                    const post = await prisma.post.findUnique({
                        where: { id: Number(id) },
                        include: {
                            author: true,
                            comments: { include: { author: true } },
                            likes: { include: { user: true } },
                            postMedias: true,
                        },
                    });
                    if (context.record && post) {
                        context.record.params.full = post;
                    }
                    return { record: context.record?.toJSON() };
                },
            },
        },
    },
};
const commentResource = {
    resource: { model: getModelByName('Comment'), client: prisma },
    options: {
        navigation: { name: 'Social', icon: 'Chat' },
        listProperties: ['content', 'post', 'author', 'created_at'],
        properties: {
            post_id: { reference: 'Post' },
            author_id: { reference: 'User' },
        },
        actions: {
            edit: {
                isAccessible: false,
            },
            new: {
                isAccessible: false,
            },
            show: {
                handler: async (request, response, context) => {
                    const id = context.record?.id();
                    const comment = await prisma.comment.findUnique({
                        where: { id: Number(id) },
                        include: { author: true, post: true },
                    });
                    if (context.record && comment) {
                        context.record.params.full = comment;
                    }
                    return { record: context.record?.toJSON() };
                },
            },
        },
    },
};
const likeResource = {
    resource: { model: getModelByName('Like'), client: prisma },
    options: {
        navigation: false,
        listProperties: ['user_id', 'post_id', 'created_at'],
        properties: {
            user_id: { reference: 'User' },
            post_id: { reference: 'Post' },
        },
    },
};
const postMediaResource = {
    resource: { model: getModelByName('PostMedia'), client: prisma },
    options: {
        navigation: false,
        listProperties: ['post_id', 'type', 'url', 'created_at'],
        properties: {
            post_id: { reference: 'Post' },
        },
    },
};
const adminProfileResource = {
    resource: { model: getModelByName('AdminProfile'), client: prisma },
    options: {
        navigation: {
            name: 'User Management',
            icon: 'User',
        },
        listProperties: ['id', 'user', 'created_at'],
        properties: {
            user_id: {
                reference: 'User',
                isRequired: true,
                isVisible: { list: true, show: true, edit: false, create: false },
            },
            id: {
                isVisible: { list: false, show: true, edit: false },
            },
            created_at: {
                isVisible: { list: false, show: true, edit: false },
            },
        },
    },
};
const studentProfileResource = {
    resource: { model: getModelByName('StudentProfile'), client: prisma },
    options: {
        navigation: {
            name: 'User Management',
            icon: 'UserCheck',
        },
        listProperties: [
            'id',
            'user',
            'university',
            'faculty',
            'field',
            'level',
        ],
        properties: {
            user_id: {
                reference: 'User',
                isRequired: true,
            },
            university_id: {
                reference: 'University',
            },
            faculty_id: {
                reference: 'Faculty',
            },
            field_id: {
                reference: 'Field',
            },
            level_id: {
                reference: 'Level',
            },
        },
    },
};
const teacherProfileResource = {
    resource: { model: getModelByName('TeacherProfile'), client: prisma },
    options: {
        navigation: {
            name: 'User Management',
            icon: 'User',
        },
        listProperties: [
            'id',
            'user',
            'specialization',
            'academic_title',
            'university',
        ],
        properties: {
            user_id: {
                reference: 'User',
                isRequired: true,
            },
            university_id: {
                reference: 'University',
            },
            specialization: {},
            academic_title: {},
        },
    },
};
const moduleResource = {
    resource: { model: getModelByName('Module'), client: prisma },
    options: {
        navigation: {
            name: 'Academic Structure',
            icon: 'Layers',
        },
        listProperties: ['name', 'code', 'created_at'],
        showProperties: [
            'name',
            'code',
            'created_at',
            'updated_at',
            'fields',
            'levels',
            'courses',
        ],
        filterProperties: ['name', 'code'],
        properties: {
            id: {
                isVisible: { list: false, show: true, edit: false },
            },
            name: {
                isTitle: true,
                isRequired: true,
            },
            code: {
                isRequired: true,
            },
            created_at: {
                isVisible: { list: false, show: true, edit: false },
            },
            updated_at: {
                isVisible: { list: false, show: true, edit: false },
            },
            fields: {
                reference: 'Field',
                isVisible: { list: false, show: true, edit: false },
            },
            levels: {
                reference: 'Level',
                isVisible: { list: false, show: true, edit: false },
            },
            courses: {
                reference: 'Course',
                isVisible: { list: false, show: true, edit: false },
            },
        },
    },
};
const courseResource = {
    resource: { model: getModelByName('Course'), client: prisma },
    options: {
        navigation: {
            name: 'Learning System',
            icon: 'Book',
        },
        listProperties: [
            'name',
            'code',
            'status',
            'module',
            'faculty',
            'field',
        ],
        filterProperties: ['name', 'module', 'status'],
        properties: {
            description: { type: 'textarea' },
            module_id: {
                reference: 'Module',
                isVisible: { list: true, show: true, edit: false },
            },
            faculty_id: {
                reference: 'Faculty',
                isVisible: { list: true, show: true, edit: false },
            },
            field_id: {
                reference: 'Field',
                isVisible: { list: true, show: true, edit: false },
            },
            publisher: { isVisible: { list: false, show: true, edit: false }, reference: 'TeacherProfile' },
            publisher_id: {
                reference: 'TeacherProfile',
                isVisible: { list: true, show: true, edit: false },
            },
            studentProfile: { isVisible: { list: false, show: false, edit: false } },
            created_at: { isVisible: { list: false, show: true, edit: false } },
            updated_at: { isVisible: { list: false, show: true, edit: false } },
        },
        actions: {
            new: {
                isAccessible: false,
                isVisible: false,
            },
            list: {
                handler: async (req, res, ctx) => {
                    const page = Number(req.query?.page || 1);
                    const perPage = Number(req.query?.perPage || 20);
                    const skip = (page - 1) * perPage;
                    const filters = req.query || {};
                    console.log(filters);
                    const where = {};
                    if (filters['filters.module']) {
                        where.module_id = Number(filters['filters.module']);
                    }
                    if (filters['filters.status']) {
                        where.status = filters['filters.status'];
                    }
                    if (filters['filters.name']) {
                        where.name = { contains: filters['filters.name'] };
                    }
                    const [items, total] = await Promise.all([
                        prisma.course.findMany({
                            where,
                            skip,
                            take: perPage,
                            include: {
                                module: true,
                                faculty: true,
                                field: true,
                            },
                            orderBy: { created_at: 'desc' },
                        }),
                        prisma.course.count(),
                    ]);
                    const records = items.map((c) => {
                        const record = ctx.resource.build({
                            ...c,
                            module: c.module?.name,
                            faculty: c.faculty?.name,
                            field: c.field?.name,
                        });
                        return record.toJSON(ctx.currentAdmin);
                    });
                    return {
                        records,
                        meta: {
                            total,
                            page,
                            perPage,
                        },
                    };
                },
            },
            show: {
                component: Components.CourseShow,
                handler: async (req, res, ctx) => {
                    const id = ctx.record?.id();
                    if (!id)
                        return { record: ctx.record?.toJSON() };
                    const course = await prisma.course.findUnique({
                        where: { id },
                        include: {
                            module: true,
                            faculty: true,
                            field: true,
                            publisher: {
                                include: {
                                    user: { select: { id: true, first_name: true, last_name: true, email: true, avatar_url: true } },
                                    university: { select: { id: true, name: true } },
                                }
                            },
                            courseSections: {
                                include: {
                                    materials: true,
                                },
                                orderBy: { order: 'asc' },
                            },
                            courseEnrollments: {
                                include: { student: { include: { user: { select: { avatar_url: true, first_name: true, last_name: true, email: true, id: true } } } } },
                            },
                        },
                    });
                    if (ctx.record && course) {
                        ctx.record.params.full = course;
                    }
                    return { record: ctx.record?.toJSON() };
                },
            },
        },
    },
};
const universityResource = {
    resource: { model: getModelByName('University'), client: prisma },
    options: {
        navigation: { name: 'Academic Structure', icon: 'Layers' },
        listProperties: ['name', 'short_name', 'city', 'created_at'],
        filterProperties: ['name', 'city'],
        sort: { sortBy: 'created_at', direction: 'desc' },
        properties: {
            id: { isVisible: { list: false, show: true, edit: false } },
            name: { isRequired: true },
            email: { type: 'email' },
            short_name: { isRequired: true },
            city: {},
            address: {},
            website: {},
            phone: {},
            created_at: { isVisible: { list: false, show: true } },
            updated_at: { isVisible: { list: false, show: true } },
        },
        actions: {
            show: {
                component: Components.UniversityShowChildren,
                handler: async (request, response, context) => {
                    const id = context.record?.id();
                    if (!id)
                        return { record: context.record?.toJSON() };
                    const uni = await prisma.university.findUnique({ where: { id }, include: { _count: { select: { fculties: true } } } });
                    if (context.record && uni)
                        context.record.params._counts = uni._count;
                    return { record: context.record?.toJSON() };
                },
            },
            bulkDelete: {
                actionType: 'bulk',
                icon: 'TrashAlt',
                label: 'Delete selected inactive',
                guard: 'Delete selected universities? This will remove them permanently.',
                handler: async (request, response, context) => {
                    const ids = (context.records || []).map((r) => r.id()).filter(Boolean);
                    if (!ids.length)
                        return { records: context.records?.map((r) => r.toJSON()) || [], notice: { message: 'No records selected', type: 'info' } };
                    const result = await prisma.university.deleteMany({ where: { id: { in: ids } } });
                    return { records: [], notice: { message: `Deleted ${result.count} universities`, type: 'success' } };
                }
            },
        }
    }
};
const facultyResource = {
    resource: { model: getModelByName('Faculty'), client: prisma },
    options: {
        navigation: { name: 'Academic Structure', icon: 'Layers' },
        listProperties: ['name', 'code', 'university'],
        filterProperties: ['name', 'university', "code",],
        sort: { sortBy: 'created_at', direction: 'desc' },
        properties: {
            created_at: { isVisible: { list: false, show: true, edit: false, create: false } },
            updated_at: { isVisible: { list: false, show: true, edit: false, create: false } },
        },
        actions: {
            show: {
                component: Components.FacultyShowChildren,
                handler: async (request, response, context) => {
                    const id = context.record?.id();
                    if (!id)
                        return { record: context.record?.toJSON() };
                    const faculty = await prisma.faculty.findUnique({ where: { id }, include: { university: { select: { id: true, name: true } }, _count: { select: { departments: true } } } });
                    if (context.record && faculty) {
                        context.record.params.university = faculty.university;
                        context.record.params._counts = faculty._count;
                    }
                    return { record: context.record?.toJSON() };
                }
            },
        }
    }
};
const departmentResource = {
    resource: { model: getModelByName('Department'), client: prisma },
    options: {
        navigation: { name: 'Academic Structure', icon: 'Layers' },
        listProperties: ['name', 'code', 'facultyName', 'fieldCount'],
        filterProperties: ['name', 'faculty',],
        sort: { sortBy: 'created_at', direction: 'desc' },
        properties: {
            id: { isVisible: { list: false, show: true, edit: false, create: false } },
            name: { isRequired: true },
            code: {},
            faculty_id: { isVisible: { list: false, show: false, edit: false }, isRequired: true },
            facultyName: { isVisible: { list: true, show: true, edit: false }, label: 'Faculty' },
            fieldCount: { isVisible: { list: true, show: true, edit: false }, label: 'Fields' },
            university_id: { isVisible: { list: false, show: false, edit: false } },
            created_at: { isVisible: { list: false, show: true, edit: false, create: false } },
            updated_at: { isVisible: { list: false, show: true, edit: false, create: false } },
        },
        actions: {
            list: {
                handler: async (request, response, context) => {
                    const page = Number(request.query?.page || 1);
                    const perPage = Number(request.query?.perPage || 20);
                    const offset = (page - 1) * perPage;
                    const where = {};
                    const filters = request.query || {};
                    if (filters["filters.faculty"]) {
                        console.log(filters["filters.faculty"]);
                        where.faculty_id = Number(filters["filters.faculty"]);
                    }
                    if (filters["filters.name"]) {
                        where.name = { contains: filters["filters.name"] };
                    }
                    const [items, total] = await Promise.all([
                        prisma.department.findMany({
                            where,
                            skip: offset,
                            take: perPage,
                            include: {
                                faculty: {
                                    select: {
                                        id: true,
                                        name: true,
                                    },
                                },
                                _count: {
                                    select: {
                                        fields: true,
                                    },
                                },
                            },
                            orderBy: {
                                created_at: 'desc',
                            },
                        }),
                        prisma.department.count({ where }),
                    ]);
                    const records = items.map((i) => {
                        const record = context.resource.build({
                            id: i.id,
                            name: i.name,
                            code: i.code,
                            faculty_id: i.faculty_id,
                            created_at: i.created_at,
                            facultyName: i.faculty?.name,
                            fieldCount: i._count?.fields ?? 0,
                        });
                        return record.toJSON(context.currentAdmin);
                    });
                    return {
                        records,
                        meta: {
                            total,
                            perPage,
                            page,
                            totalPages: Math.ceil(total / perPage),
                        },
                    };
                },
            },
            show: {
                component: Components.DepartmentShowChildren,
                handler: async (request, response, context) => {
                    const id = context.record?.id();
                    if (!id)
                        return { record: context.record?.toJSON() };
                    const dept = await prisma.department.findUnique({ where: { id }, include: { faculty: { select: { id: true, name: true } }, university: { select: { id: true, name: true } }, _count: { select: { fields: true } } } });
                    if (context.record && dept) {
                        context.record.params.faculty = dept.faculty;
                        context.record.params.university = dept.university;
                        context.record.params._counts = dept._count;
                    }
                    return { record: context.record?.toJSON() };
                }
            },
            edit: {
                handler: async (request, response, context) => {
                    if (request.method === 'get')
                        return { record: context.record?.toJSON() };
                    const payload = request.payload || {};
                    const id = context.record?.id();
                    if (id) {
                        const faculty = await prisma.faculty.findUnique({ where: { id: payload.faculty_id } });
                        if (!faculty)
                            return { record: context.record?.toJSON(), notice: { message: 'Selected faculty not found', type: 'error' } };
                        const duplicate = await prisma.department.findFirst({ where: { name: payload.name, faculty_id: payload.faculty_id, id: { not: id } } });
                        if (duplicate)
                            return { record: context.record?.toJSON(), notice: { message: 'Duplicate department name in this faculty', type: 'error' } };
                        await prisma.department.update({ where: { id }, data: { name: payload.name, code: payload.code || undefined, faculty_id: payload.faculty_id, university_id: faculty.university_id } });
                    }
                    const updated = await prisma.department.findUnique({ where: { id }, include: { faculty: { select: { id: true, name: true } } } });
                    if (context.record && updated)
                        context.record.params.facultyName = updated.faculty?.name;
                    return { record: context.record?.toJSON(), notice: { message: 'Department updated', type: 'success' } };
                }
            },
        }
    }
};
const fieldResource = {
    resource: { model: getModelByName('Field'), client: prisma },
    options: {
        navigation: { name: 'Academic Structure', icon: 'Layers' },
        listProperties: ['name', 'academic_system', 'department', 'levelCount'],
        filterProperties: ['name', 'department', 'academic_system'],
        sort: { sortBy: 'created_at', direction: 'desc' },
        properties: {
            id: { isVisible: { list: false, show: true, edit: false } },
            name: { isRequired: true },
            code: {},
            academic_system: {},
            department_id: { isVisible: { list: false, show: false, edit: false }, isRequired: true },
            departmentName: { isVisible: { list: true, show: true, edit: false }, label: 'Department' },
            levelCount: { isVisible: { list: true, show: true, edit: false }, label: 'Levels' },
        },
        actions: {
            list: {
                after: async (response, request, context) => {
                    const ids = response.records.map(r => r.id);
                    const counts = await prisma.field.findMany({
                        where: { id: { in: ids } },
                        select: {
                            id: true,
                            _count: { select: { levels: true } },
                        },
                    });
                    const map = Object.fromEntries(counts.map(c => [c.id, c._count.levels]));
                    response.records = response.records.map(record => {
                        record.params.levelCount = map[record.id] ?? 0;
                        return record;
                    });
                    return response;
                },
            },
            show: {
                component: Components.FieldShowChildren,
                handler: async (request, response, context) => {
                    const id = context.record?.id();
                    if (!id)
                        return { record: context.record?.toJSON() };
                    const fld = await prisma.field.findUnique({
                        where: { id }, include: {
                            department: { select: { id: true, name: true } }, modules: {
                                select: {
                                    id: true, name: true, code: true,
                                    fields: { distinct: 'name' },
                                    levels: { distinct: "name" },
                                    _count: {
                                        select: { courses: true }
                                    }
                                }
                            }, _count: { select: { levels: true, modules: true } }
                        }
                    });
                    if (context.record && fld) {
                        context.record.params.department = fld.department;
                        context.record.params._counts = fld._count;
                        ;
                        context.record.params.modules = fld.modules;
                    }
                    return { record: context.record?.toJSON() };
                }
            },
        }
    }
};
const levelResource = {
    resource: { model: getModelByName('Level'), client: prisma },
    options: {
        navigation: { name: 'Academic Structure', icon: 'Layers' },
        listProperties: ['name', 'cycle', 'is_final', 'field', 'created_at'],
        filterProperties: ['name', 'field', 'cycle', 'is_final'],
        sort: { sortBy: 'created_at', direction: 'desc' },
        properties: {
            id: { isVisible: { list: false, show: true, edit: false } },
            name: { isRequired: true },
            cycle: {},
            is_final: { type: 'boolean' },
            field_id: { isVisible: { list: false, show: false, edit: false }, isRequired: true },
        },
    }
};
const normalizeNumber = (value) => {
    if (value === undefined || value === null || value === '')
        return undefined;
    const parsed = Number(value);
    return Number.isNaN(parsed) ? undefined : parsed;
};
const getUserReferenceData = async () => {
    const [universities, faculties, departments, fields, levels] = await Promise.all([
        prisma.university.findMany({ select: { id: true, name: true } }),
        prisma.faculty.findMany({ select: { id: true, name: true, university_id: true } }),
        prisma.department.findMany({ select: { id: true, name: true, faculty_id: true } }),
        prisma.field.findMany({ select: { id: true, name: true, department_id: true } }),
        prisma.level.findMany({ select: { id: true, name: true, field_id: true } }),
    ]);
    return {
        universities,
        faculties,
        departments,
        fields,
        levels,
    };
};
const buildUserRecord = async (resource, userId) => {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        include: {
            student_profile: {
                include: {
                    university: true,
                    faculty: true,
                    department: true,
                    field: true,
                    level: true,
                },
            },
            teacher_profile: {
                include: {
                    university: true,
                },
            },
            admin_profile: {
                include: {
                    permissions: true,
                },
            },
        },
    });
    if (!user)
        return null;
    const record = resource.build(user);
    record.params.studentProfile = user.student_profile
        ? {
            id: user.student_profile.id,
            universityId: user.student_profile.univeristy_id,
            universityName: user.student_profile.university?.name,
            facultyId: user.student_profile.faculty_id,
            facultyName: user.student_profile.faculty?.name,
            departmentId: user.student_profile.department_id,
            departmentName: user.student_profile.department?.name,
            fieldId: user.student_profile.field_id,
            fieldName: user.student_profile.field?.name,
            levelId: user.student_profile.level_id,
            levelName: user.student_profile.level?.name,
        }
        : null;
    record.params.teacherProfile = user.teacher_profile
        ? {
            id: user.teacher_profile.id,
            universityId: user.teacher_profile.univeristy_id,
            universityName: user.teacher_profile.university?.name,
            specialization: user.teacher_profile.specialization,
            academic_title: user.teacher_profile.academic_title,
        }
        : null;
    record.params.adminProfile = user.admin_profile
        ? {
            id: user.admin_profile.id,
            admin_type: user.admin_profile.admin_type,
            permissions: user.admin_profile.permissions.map((permission) => {
                const rights = [
                    permission.can_read ? 'R' : '-',
                    permission.can_write ? 'W' : '-',
                    permission.can_delete ? 'D' : '-',
                ].join('');
                return `${permission.model_name}: ${rights}`;
            }),
        }
        : null;
    return record;
};
const options = {
    rootPath: '/admin',
    componentLoader,
    branding: {
        companyName: 'UniSphere Admin',
        withMadeWithLove: false,
        logo: '/public/unisphere-logo.png',
        theme: {
            colors: {
                primary100: '#4F46E5',
                primary80: '#6366F1',
                accent: '#22C55E',
                hoverBg: '#EEF2FF',
            },
        },
    },
    dashboard: {
        handler: async () => {
            const now = new Date();
            const startOfToday = new Date(now);
            startOfToday.setHours(0, 0, 0, 0);
            const growthDays = 30;
            const startOfWindow = new Date(now);
            startOfWindow.setDate(startOfWindow.getDate() - (growthDays - 1));
            startOfWindow.setHours(0, 0, 0, 0);
            const [totalUsers, students, teachers, admins, pendingUsers, bannedUsers, totalCourses, draftCourses, pendingCourses, acceptedCourses, rejectedCourses, totalPosts, postsToday, totalUniversities, totalFaculties, totalDepartments, totalFields, totalLevels, totalStudentProfiles, totalTeacherProfiles, totalAdminProfiles, totalEnrollments,] = await Promise.all([
                prisma.user.count(),
                prisma.user.count({ where: { role: 'STUDENT' } }),
                prisma.user.count({ where: { role: 'TEACHER' } }),
                prisma.user.count({ where: { role: 'ADMIN' } }),
                prisma.user.count({ where: { status: 'PENDING' } }),
                prisma.user.count({ where: { status: 'BANED' } }),
                prisma.course.count(),
                prisma.course.count({ where: { status: 'DRAFT' } }),
                prisma.course.count({ where: { status: 'PENDING' } }),
                prisma.course.count({ where: { status: 'ACCEPTED' } }),
                prisma.course.count({ where: { status: 'REJECTED' } }),
                prisma.post.count(),
                prisma.post.count({
                    where: {
                        created_at: {
                            gte: startOfToday,
                        },
                    },
                }),
                prisma.university.count(),
                prisma.faculty.count(),
                prisma.department.count(),
                prisma.field.count(),
                prisma.level.count(),
                prisma.studentProfile.count(),
                prisma.teacherProfile.count(),
                prisma.adminProfile.count(),
                prisma.courseEnrollment.count(),
            ]);
            const [enrollmentsByCourse, likesByPost, commentsByPost, coursesByTeacher, coursesByFaculty, studentsByFaculty, userGrowthRows,] = await Promise.all([
                prisma.courseEnrollment.groupBy({
                    by: ['course_id'],
                    _count: { course_id: true },
                    orderBy: { _count: { course_id: 'desc' } },
                    take: 5,
                }),
                prisma.like.groupBy({
                    by: ['post_id'],
                    _count: { post_id: true },
                    orderBy: { _count: { post_id: 'desc' } },
                    take: 5,
                }),
                prisma.comment.groupBy({
                    by: ['post_id'],
                    _count: { post_id: true },
                    orderBy: { _count: { post_id: 'desc' } },
                    take: 5,
                }),
                prisma.course.groupBy({
                    by: ['publisher_id'],
                    _count: { publisher_id: true },
                    orderBy: { _count: { publisher_id: 'desc' } },
                    take: 5,
                }),
                prisma.course.groupBy({
                    by: ['faculty_id'],
                    _count: { faculty_id: true },
                    orderBy: { _count: { faculty_id: 'desc' } },
                    take: 5,
                }),
                prisma.studentProfile.groupBy({
                    by: ['faculty_id'],
                    _count: { faculty_id: true },
                    orderBy: { _count: { faculty_id: 'desc' } },
                    take: 5,
                }),
                prisma.$queryRaw `
          SELECT DATE(created_at) as day, COUNT(*) as count
          FROM \`User\`
          WHERE created_at >= ${startOfWindow}
          GROUP BY day
          ORDER BY day ASC
        `,
            ]);
            const courseIds = enrollmentsByCourse.map((item) => item.course_id);
            const postIdsForLikes = likesByPost.map((item) => item.post_id);
            const postIdsForComments = commentsByPost.map((item) => item.post_id);
            const teacherIds = coursesByTeacher.map((item) => item.publisher_id);
            const facultyIdsForCourses = coursesByFaculty.map((item) => item.faculty_id);
            const facultyIdsForStudents = studentsByFaculty.map((item) => item.faculty_id);
            const [courses, postsForLikes, postsForComments, teachers2, faculties] = await Promise.all([
                prisma.course.findMany({
                    where: { id: { in: courseIds } },
                    select: { id: true, name: true },
                }),
                prisma.post.findMany({
                    where: { id: { in: postIdsForLikes } },
                    select: { id: true, content: true },
                }),
                prisma.post.findMany({
                    where: { id: { in: postIdsForComments } },
                    select: { id: true, content: true },
                }),
                prisma.teacherProfile.findMany({
                    where: { id: { in: teacherIds } },
                    include: { user: true },
                }),
                prisma.faculty.findMany({
                    where: { id: { in: [...facultyIdsForCourses, ...facultyIdsForStudents] } },
                    select: { id: true, name: true },
                }),
            ]);
            const courseById = new Map(courses.map((course) => [course.id, course]));
            const postByIdForLikes = new Map(postsForLikes.map((post) => [post.id, post]));
            const postByIdForComments = new Map(postsForComments.map((post) => [post.id, post]));
            const teacherById = new Map(teachers2.map((teacher) => [teacher.id, teacher]));
            const facultyById = new Map(faculties.map((faculty) => [faculty.id, faculty]));
            const mostActiveCourses = enrollmentsByCourse.map((item) => {
                const course = courseById.get(item.course_id);
                return {
                    id: item.course_id,
                    name: course?.name || 'Unknown course',
                    value: item._count.course_id,
                };
            });
            const mostLikedPosts = likesByPost.map((item) => {
                const post = postByIdForLikes.get(item.post_id);
                return {
                    id: item.post_id,
                    content: post?.content || 'Unknown post',
                    value: item._count.post_id,
                };
            });
            const mostCommentedPosts = commentsByPost.map((item) => {
                const post = postByIdForComments.get(item.post_id);
                return {
                    id: item.post_id,
                    content: post?.content || 'Unknown post',
                    value: item._count.post_id,
                };
            });
            const topTeachers = coursesByTeacher.map((item) => {
                const teacher = teacherById.get(item.publisher_id);
                const fullName = teacher?.user
                    ? `${teacher.user.first_name} ${teacher.user.last_name}`
                    : 'Unknown teacher';
                return {
                    id: item.publisher_id,
                    name: fullName,
                    value: item._count.publisher_id,
                };
            });
            const coursesPerFaculty = coursesByFaculty.map((item) => {
                const faculty = facultyById.get(item.faculty_id);
                return {
                    id: item.faculty_id,
                    name: faculty?.name || 'Unknown faculty',
                    value: item._count.faculty_id,
                };
            });
            const studentsPerFaculty = studentsByFaculty.map((item) => {
                const faculty = facultyById.get(item.faculty_id);
                return {
                    id: item.faculty_id,
                    name: faculty?.name || 'Unknown faculty',
                    value: item._count.faculty_id,
                };
            });
            const growthMap = new Map(userGrowthRows.map((row) => [
                new Date(row.day).toISOString().slice(0, 10),
                Number(row.count),
            ]));
            const userGrowth = Array.from({ length: growthDays }).map((_, index) => {
                const date = new Date(startOfWindow);
                date.setDate(startOfWindow.getDate() + index);
                const key = date.toISOString().slice(0, 10);
                return {
                    date: key,
                    value: growthMap.get(key) || 0,
                };
            });
            return {
                kpis: {
                    users: {
                        total: totalUsers,
                        students,
                        teachers,
                        admins,
                        pending: pendingUsers,
                        banned: bannedUsers,
                    },
                    courses: {
                        total: totalCourses,
                        draft: draftCourses,
                        pending: pendingCourses,
                        accepted: acceptedCourses,
                        rejected: rejectedCourses,
                    },
                    posts: {
                        total: totalPosts,
                        today: postsToday,
                    },
                },
                charts: {
                    userDistribution: [
                        { label: 'Students', value: students },
                        { label: 'Teachers', value: teachers },
                        { label: 'Admins', value: admins },
                    ],
                    courseStatus: [
                        { label: 'Draft', value: draftCourses },
                        { label: 'Pending', value: pendingCourses },
                        { label: 'Accepted', value: acceptedCourses },
                        { label: 'Rejected', value: rejectedCourses },
                    ],
                    coursesPerFaculty,
                    userGrowth,
                },
                insights: {
                    mostActiveCourses,
                    mostLikedPosts,
                    mostCommentedPosts,
                    topTeachers,
                    studentsPerFaculty,
                },
                system: {
                    universities: totalUniversities,
                    faculties: totalFaculties,
                    departments: totalDepartments,
                    fields: totalFields,
                    levels: totalLevels,
                    studentProfiles: totalStudentProfiles,
                    teacherProfiles: totalTeacherProfiles,
                    adminProfiles: totalAdminProfiles,
                    enrollments: totalEnrollments,
                },
            };
        },
        component: Components.Dashboard,
    },
    resources: [
        {
            resource: { model: getModelByName('User'), client: prisma },
            options: {
                id: "User",
                navigation: { icon: 'User', name: 'User Management' },
                listProperties: [
                    'avatar_url',
                    'email',
                    'first_name',
                    'last_name',
                    'status',
                    'role',
                ],
                filterProperties: ['email', 'role', 'status'],
                properties: {
                    id: {
                        isVisible: { list: false, show: false, edit: false, filter: false },
                    },
                    password: {
                        isVisible: { list: false, show: false, edit: true, filter: false },
                        type: "password",
                    },
                    created_at: {
                        isVisible: { list: false, show: false, edit: false, filter: false },
                    },
                    updated_at: {
                        isVisible: { list: false, show: false, edit: false, filter: false },
                    },
                    avatar_url: {
                        isVisible: { list: true, show: false, edit: false, filter: false },
                        components: {
                            list: Components.AvatarRenderer,
                        },
                    },
                    email: {
                        components: {
                            list: Components.EmailLinkRenderer,
                        },
                    },
                    status: {
                        components: {
                            list: Components.StatusBadgeRenderer,
                        },
                    },
                    role: {
                        components: {
                            list: Components.RoleBadgeRenderer,
                        },
                    },
                    student_profile: {
                        isVisible: { list: false, show: false, edit: false, filter: false },
                    },
                    teacher_profile: {
                        isVisible: { list: false, show: false, edit: false, filter: false },
                    },
                    admin_profile: {
                        isVisible: { list: false, show: false, edit: false, filter: false },
                    },
                },
                actions: {
                    new: {
                        before: async (request) => {
                            if (request.method === 'post') {
                                const payload = request.payload || {};
                                if (payload.password) {
                                    const pass = await hash(payload.password);
                                    request.payload.password = pass;
                                }
                                return request;
                            }
                        }
                    },
                    confirm: {
                        component: Components.ConfirmUserAction,
                        showInDrawer: true,
                        actionType: 'record',
                        icon: 'Check',
                        label: 'Confirm',
                        guard: 'Confirm this pending user?',
                        isVisible: ({ record }) => record?.params?.status === 'PENDING',
                        handler: async (request, response, context) => {
                            const recordId = context.record?.id();
                            const currentAdmin = context.currentAdmin;
                            if (!recordId)
                                return {};
                            const updatedUser = await prisma.user.update({
                                where: { id: recordId },
                                data: { status: 'CONFIRMED' },
                            });
                            const updatedRecord = await context.resource.findOne(recordId);
                            return {
                                record: context.record.toJSON(currentAdmin),
                                notice: {
                                    message: 'User confirmed successfully',
                                    type: 'success',
                                },
                            };
                        },
                    },
                    confirmBulk: {
                        actionType: 'bulk',
                        icon: 'Check',
                        label: 'Confirm selected',
                        guard: 'Confirm all selected pending users?',
                        isVisible: ({ records }) => Array.isArray(records) &&
                            records.some((record) => record?.params?.status === 'PENDING'),
                        handler: async (request, response, context) => {
                            const recordIds = (context.records || [])
                                .map((record) => record?.id())
                                .filter(Boolean);
                            if (!recordIds.length) {
                                return {
                                    records: context.records?.map((record) => record.toJSON()) || [],
                                    notice: { message: 'No users selected.', type: 'info' },
                                };
                            }
                            await prisma.user.updateMany({
                                where: { id: { in: recordIds }, status: 'PENDING' },
                                data: { status: 'CONFIRMED' },
                            });
                            const updatedRecords = (context.records || []).map((record) => {
                                if (record?.params?.status === 'PENDING') {
                                    record.params.status = 'CONFIRMED';
                                }
                                return record.toJSON();
                            });
                            return {
                                records: updatedRecords,
                                notice: { message: 'Selected users confirmed', type: 'success' },
                            };
                        },
                    },
                    show: {
                        component: Components.UserShow,
                        handler: async (request, response, context) => {
                            const recordId = context.record?.id() || context.record?.params?.id;
                            if (!recordId)
                                return { record: context.record?.toJSON() };
                            const record = await buildUserRecord(context.resource, recordId);
                            return { record: record?.toJSON() };
                        },
                    },
                    edit: {
                        component: Components.UserEdit,
                        before: async (request) => {
                            if (request.method === 'post') {
                                const payload = request.payload || {};
                                if (payload.password) {
                                    const pass = await hash(payload.password);
                                    request.payload.password = pass;
                                }
                                return request;
                            }
                        },
                        handler: async (request, response, context) => {
                            const recordId = context.record?.id() || context.record?.params?.id;
                            if (!recordId)
                                return { record: context.record?.toJSON() };
                            const payload = request.payload || {};
                            if (request.method === 'get') {
                                const record = await buildUserRecord(context.resource, recordId);
                                const referenceData = await getUserReferenceData();
                                if (record) {
                                    record.params.referenceData = referenceData;
                                }
                                return { record: record?.toJSON() };
                            }
                            const record = context.record;
                            if (record) {
                                record.params.first_name = payload.first_name;
                                record.params.last_name = payload.last_name;
                                record.params.email = payload.email;
                                record.params.role = payload.role;
                                record.params.status = payload.status;
                            }
                            await prisma.user.update({
                                where: { id: recordId },
                                data: {
                                    first_name: payload.first_name,
                                    last_name: payload.last_name,
                                    email: payload.email,
                                    role: payload.role,
                                    status: payload.status,
                                },
                            });
                            const userWithProfiles = await prisma.user.findUnique({
                                where: { id: recordId },
                                include: { student_profile: true, teacher_profile: true },
                            });
                            if (userWithProfiles?.student_profile) {
                                await prisma.studentProfile.update({
                                    where: { id: userWithProfiles.student_profile.id },
                                    data: {
                                        univeristy_id: payload.studentUniversityId || undefined,
                                        faculty_id: normalizeNumber(payload.studentFacultyId),
                                        department_id: normalizeNumber(payload.studentDepartmentId),
                                        field_id: normalizeNumber(payload.studentFieldId),
                                        level_id: normalizeNumber(payload.studentLevelId),
                                    },
                                });
                            }
                            if (userWithProfiles?.teacher_profile) {
                                await prisma.teacherProfile.update({
                                    where: { id: userWithProfiles.teacher_profile.id },
                                    data: {
                                        univeristy_id: payload.teacherUniversityId || undefined,
                                        specialization: payload.teacherSpecialization || undefined,
                                        academic_title: payload.teacherAcademicTitle || undefined,
                                    },
                                });
                            }
                            const referenceData = await getUserReferenceData();
                            if (record) {
                                record.params.referenceData = referenceData;
                            }
                            return {
                                record: record?.toJSON(),
                                notice: { message: 'User updated', type: 'success' },
                            };
                        },
                    },
                },
            },
        },
        universityResource,
        facultyResource,
        departmentResource,
        fieldResource,
        levelResource,
        courseResource,
        moduleResource,
        studentProfileResource,
        teacherProfileResource,
        adminProfileResource,
        postMediaResource,
        postResource,
        commentResource,
        likeResource,
    ],
};
export default options;
