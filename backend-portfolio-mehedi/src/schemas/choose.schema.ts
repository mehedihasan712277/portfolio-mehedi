import { z } from "zod";

export const createChooseSchema = z.object({
    body: z.object({
        feature: z.string().min(1, {
            message: "Choose feature is required",
        }),
    }),
});

export const updateChooseSchema = z.object({
    body: z.object({
        feature: z.string().min(1).optional(),
    }),
});
