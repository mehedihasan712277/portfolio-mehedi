import { Request, Response } from "express";
import AppError from "../utils/AppError";
import Testimonial from "../models/testimonial.model";

// CREATE testimonial
export const createTestimonial = async (req: Request, res: Response) => {
    const payload = req.body;

    const testimonials = Array.isArray(payload) ? payload : [payload];

    const result = await Testimonial.insertMany(testimonials);

    res.status(201).json({
        success: true,
        count: result.length,
        data: result,
    });
};

// GET all testimonials
export const getAllTestimonials = async (req: Request, res: Response) => {
    const testimonials = await Testimonial.find();

    res.status(200).json({
        success: true,
        count: testimonials.length,
        data: testimonials,
    });
};

// UPDATE testimonial
export const updateTestimonial = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updates = req.body;

    const testimonial = await Testimonial.findById(id);
    if (!testimonial) {
        throw new AppError("Testimonial not found", 404);
    }

    // Now update testimonial
    const updatedTestimonial = await Testimonial.findByIdAndUpdate(id, updates, {
        new: true,
        runValidators: true,
    });

    res.status(200).json({
        success: true,
        data: updatedTestimonial,
    });
};

// DELETE testimonial
export const deleteTestimonial = async (req: Request, res: Response) => {
    const { id } = req.params;
    const testimonial = await Testimonial.findById(id);

    if (!testimonial) {
        throw new AppError("Testimonial not found", 404);
    }

    try {
        await Testimonial.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        console.error("❌ Error during testimonial deletion:", err);
        throw new AppError("Failed to delete testimonial or associated files", 500);
    }
};
