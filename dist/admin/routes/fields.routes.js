import express from 'express';
export const createFieldsRoutes = (prisma) => {
    const router = express.Router();
    router.get("/", async (req, res) => {
        const name = req.query.name;
        const fields = await prisma.field.findMany({
            where: {
                name: name ? { contains: name } : undefined
            },
            include: {
                department: {
                    include: {
                        university: {
                            select: {
                                id: true,
                                name: true
                            }
                        }
                    }
                }
            }
        });
        return res.status(200).json(fields);
    });
    return router;
};
