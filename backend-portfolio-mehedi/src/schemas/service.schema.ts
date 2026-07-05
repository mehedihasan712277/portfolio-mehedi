import { z } from "zod";

export const createServiceSchema = z.object({
    body: z.object({
        title: z.string().min(1, {
            message: "Service title is required",
        }),
        subtitle: z.string().min(1, {
            message: "Service subtitle is required",
        }),

        shortDescription: z.string().min(1, {
            message: "Short description is required",
        }),
        description: z.string().min(1, {
            message: "Description is required",
        }),
    }),
});

export const updateServiceSchema = z.object({
    body: createServiceSchema.shape.body.partial(),
});
