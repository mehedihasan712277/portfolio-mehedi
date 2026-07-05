import { z } from "zod";

export const createResultSchema = z.object({
    body: z.object({
        title: z.string().min(1, {
            message: "Result title is required",
        }),

        description: z.string().optional(),
    }),
});

export const updateResultSchema = z.object({
    body: z.object({
        title: z.string().min(1).optional(),
        description: z.string().optional(),
    }),
});
