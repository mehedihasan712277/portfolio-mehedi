import { Request, Response } from "express";
import AppError from "../utils/AppError";
import Choose from "../models/choose.model";

// CREATE a new choose
export const createChoose = async (req: Request, res: Response) => {
    const choose = await Choose.create(req.body);

    res.status(201).json({
        success: true,
        data: choose,
    });
};

// GET all chooses
export const getAllChooses = async (req: Request, res: Response) => {
    const chooses = await Choose.find();

    res.status(200).json({
        success: true,
        count: chooses.length,
        data: chooses,
    });
};

// UPDATE choose
export const updateChoose = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updates = req.body;

    const choose = await Choose.findById(id);
    if (!choose) {
        throw new AppError("Choose not found", 404);
    }

    // Now update choose
    const updatedChoose = await Choose.findByIdAndUpdate(id, updates, {
        new: true,
        runValidators: true,
    });

    res.status(200).json({
        success: true,
        data: updatedChoose,
    });
};

// DELETE choose
export const deleteChoose = async (req: Request, res: Response) => {
    const { id } = req.params;
    const choose = await Choose.findById(id);

    if (!choose) {
        throw new AppError("Choose not found", 404);
    }

    try {
        await Choose.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        console.error("❌ Error during choose deletion:", err);
        throw new AppError("Failed to delete choose or associated files", 500);
    }
};
