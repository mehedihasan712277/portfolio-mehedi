import { Request, Response } from "express";
import AppError from "../utils/AppError";
import Upload from "../models/upload.model";
import { v2 as cloudinary } from "cloudinary";
import { extractImageSources } from "../utils/imgUrlExtractor";
import Service from "../models/service.model";

// CREATE a new service
export const createService = async (req: Request, res: Response) => {
    const service = await Service.create(req.body);

    res.status(201).json({
        success: true,
        data: service,
    });
};

// GET all services
export const getAllServices = async (req: Request, res: Response) => {
    const services = await Service.find();

    res.status(200).json({
        success: true,
        count: services.length,
        data: services,
    });
};

// GET single service by id
export const getServiceById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const service = await Service.findById(id);

    if (!service) {
        throw new AppError("Service not found", 404);
    }

    res.status(200).json({
        success: true,
        data: service,
    });
};

// UPDATE service
export const updateService = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updates = req.body;

    const service = await Service.findById(id);
    if (!service) {
        throw new AppError("Service not found", 404);
    }

    // Now update service
    const updatedService = await Service.findByIdAndUpdate(id, updates, {
        new: true,
        runValidators: true,
    });

    res.status(200).json({
        success: true,
        data: updatedService,
    });
};

// DELETE service
export const deleteService = async (req: Request, res: Response) => {
    const { id } = req.params;
    const service = await Service.findById(id);

    if (!service) {
        throw new AppError("Service not found", 404);
    }

    let descriptonImgUrls: string[] = [];
    if (service.description) {
        descriptonImgUrls = extractImageSources(service.description);
    }

    //collect thumbnail url
    let fileUrls: string[] = [...descriptonImgUrls];

    // Find Upload documents that match the URLs
    const uploadDocs = await Upload.find({ url: { $in: fileUrls } });

    // Extract publicIds for Cloudinary deletion
    const publicIds = uploadDocs.map((doc) => doc.publicId);

    try {
        // Delete files from Cloudinary
        let cloudinaryResult: { deleted: Record<string, string> } = {
            deleted: {},
        };

        if (publicIds.length > 0) {
            cloudinaryResult = await cloudinary.api.delete_resources(publicIds, {
                resource_type: "image",
            });
        }

        // Delete Upload documents from MongoDB
        await Upload.deleteMany({ url: { $in: fileUrls } });

        await Service.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        console.error("❌ Error during service deletion:", err);
        throw new AppError("Failed to delete service or associated files", 500);
    }
};
