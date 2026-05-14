import express from 'express';
import { PrismaClient } from '@prisma/client';

export const createFieldsRoutes = (prisma: PrismaClient) => {
    const router = express.Router();
    router.get("/", async (req, res) => {
        const name = req.query.name as string;
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
    })
    return router;
};
