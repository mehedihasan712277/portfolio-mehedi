import { z } from "zod";

export const createProjectSchema = z.object({
    body: z.object({
        title: z.string().min(1, {
            message: "Project title is required",
        }),

        date: z.string().min(1, {
            message: "Project date is required",
        }),

        status: z.enum(["Completed", "Ongoing", "Upcoming"], {
            message: "Status must be one of: Completed, Ongoing, Upcoming",
        }),

        shortDescription: z.string().min(1, {
            message: "Short description is required",
        }),

        description: z.string().min(1, {
            message: "Description is required",
        }),
    }),
});

export const updateProjectSchema = z.object({
    body: createProjectSchema.shape.body.partial(),
});
