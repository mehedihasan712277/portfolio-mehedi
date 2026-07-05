import { Request, Response } from "express";
import AppError from "../utils/AppError";
import Result from "../models/result.model";

// CREATE a new result
export const createResult = async (req: Request, res: Response) => {
    const result = await Result.create(req.body);

    res.status(201).json({
        success: true,
        data: result,
    });
};

// GET all results
export const getAllResults = async (req: Request, res: Response) => {
    const results = await Result.find();

    res.status(200).json({
        success: true,
        count: results.length,
        data: results,
    });
};

// UPDATE result
export const updateResult = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updates = req.body;

    const result = await Result.findById(id);
    if (!result) {
        throw new AppError("Result not found", 404);
    }

    // Now update result
    const updatedResult = await Result.findByIdAndUpdate(id, updates, {
        new: true,
        runValidators: true,
    });

    res.status(200).json({
        success: true,
        data: updatedResult,
    });
};

// DELETE result
export const deleteResult = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await Result.findById(id);

    if (!result) {
        throw new AppError("Result not found", 404);
    }

    try {
        await Result.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        console.error("❌ Error during result deletion:", err);
        throw new AppError("Failed to delete result or associated files", 500);
    }
};
