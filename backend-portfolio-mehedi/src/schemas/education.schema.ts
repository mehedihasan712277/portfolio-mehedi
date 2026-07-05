import { z } from "zod";

export const createEducationSchema = z.object({
    body: z.object({
        institution: z.string().min(1, { message: "Institution name is required" }).trim(),

        logo: z
            .string()
            .min(1, { message: "Thumbnail is required" })
            .regex(/^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i, {
                message: "Thumbnail must be a valid image URL (jpg, png, webp, gif)",
            }),

        timeSpan: z.string().min(1, { message: "Time span is required" }).trim(),

        degree: z.string().min(1, { message: "Degree name is required" }).trim(),

        result: z.string().min(1, { message: "Degree name is required" }),

        completedCourse: z.string().trim().optional(),

        description: z.string().trim().optional(),
    }),
});

export const updateEducationSchema = z.object({
    body: createEducationSchema.shape.body.partial(),
});
