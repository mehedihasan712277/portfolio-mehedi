import { z } from "zod";

export const createProcessSchema = z.object({
    body: z.object({
        title: z.string().min(1, {
            message: "Process title is required",
        }),

        description: z.string().optional(),
    }),
});

export const updateProcessSchema = z.object({
    body: z.object({
        title: z.string().min(1).optional(),
        description: z.string().optional(),
    }),
});
