import { Request, Response } from "express";
import AppError from "../utils/AppError";
import Process from "../models/process.model";

// CREATE a new process
export const createProcess = async (req: Request, res: Response) => {
    const process = await Process.create(req.body);

    res.status(201).json({
        success: true,
        data: process,
    });
};

// GET all processs
export const getAllProcesss = async (req: Request, res: Response) => {
    const processs = await Process.find();

    res.status(200).json({
        success: true,
        count: processs.length,
        data: processs,
    });
};

// UPDATE process
export const updateProcess = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updates = req.body;

    const process = await Process.findById(id);
    if (!process) {
        throw new AppError("Process not found", 404);
    }

    // Now update process
    const updatedProcess = await Process.findByIdAndUpdate(id, updates, {
        new: true,
        runValidators: true,
    });

    res.status(200).json({
        success: true,
        data: updatedProcess,
    });
};

// DELETE process
export const deleteProcess = async (req: Request, res: Response) => {
    const { id } = req.params;
    const process = await Process.findById(id);

    if (!process) {
        throw new AppError("Process not found", 404);
    }

    try {
        await Process.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        console.error("❌ Error during process deletion:", err);
        throw new AppError("Failed to delete process or associated files", 500);
    }
};
