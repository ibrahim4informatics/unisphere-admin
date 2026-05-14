import express from 'express';
import { PrismaClient } from '@prisma/client';

export const createLevelsRoutes = (prisma: PrismaClient) => {
    const router = express.Router();



    router.get("/", async (req, res) => {
        const queryIDs = req.query.ids as string;
        const levels = await prisma.level.findMany({

            where: {
                field_id: {
                    in: queryIDs ? JSON.parse(queryIDs) : undefined
                },

            },
            include: {
                field: {
                    select: {
                        id: true,
                        name: true,
                        department: {
                            select: {
                                university: {
                                    select: { name: true }
                                }
                            }
                        }
                    }
                }
            }

        });

        const grouped = levels.reduce((acc, level) => {
            const fieldId = level.field_id

            if (!acc[fieldId]) {
                acc[fieldId] = {
                    field: level.field,
                    levels: [],
                }
            }

            acc[fieldId].levels.push(level)

            return acc
        }, {})


        return res.status(200).json(grouped);
    })
    return router;
};
