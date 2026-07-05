import { z } from "zod";

export const createAboutSchema = z.object({
    body: z.object({
        name: z.string().min(1, { message: "Name is required" }).trim(),
        image: z
            .string()
            .min(1, { message: "Image is required" })
            .regex(/^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i, {
                message: "Image must be a valid image URL (jpg, png, webp, gif)",
            }),
        tag: z.array(z.string().min(1, { message: "Tag cannot be empty" })).min(1, { message: "At least one tag is required" }),

        description: z.string().min(1, { message: "Description is required" }).trim(),

        states: z
            .array(
                z.object({
                    value: z.string().min(1, { message: "State value is required" }).trim(),
                    description: z.string().min(1, { message: "State description is required" }).trim(),
                }),
            )
            .optional()
            .default([]),
    }),
});

export const updateAboutSchema = z.object({
    body: createAboutSchema.shape.body.partial(),
});
