import { z } from "zod";

// Name validation
const nameSchema = z.string().min(1, { message: "Name is required" }).min(2, { message: "Name must be at least 2 characters" });

// Designation validation
const designationSchema = z.string().min(1, { message: "Designation is required" });

// Testimonial text validation
const textSchema = z
    .string()
    .min(1, { message: "Testimonial text is required" })
    .min(10, { message: "Testimonial must be at least 10 characters long" });

// Single testimonial schema
const testimonialSchema = z.object({
    name: nameSchema,
    designation: designationSchema,
    text: textSchema,
});

// ✅ Create: supports single OR multiple
export const createTestimonialSchema = z.object({
    body: z.union([testimonialSchema, z.array(testimonialSchema).min(1)]),
});

// ✅ Update (only single)
export const updateTestimonialSchema = z.object({
    body: z.object({
        name: nameSchema.optional(),
        designation: designationSchema.optional(),
        text: textSchema.optional(),
    }),
});
