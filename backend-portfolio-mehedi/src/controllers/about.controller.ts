import { Request, Response } from "express";
import AppError from "../utils/AppError";
import Upload from "../models/upload.model";
import { v2 as cloudinary } from "cloudinary";
import { extractImageSources } from "../utils/imgUrlExtractor";
import About from "../models/about.model";

// CREATE a new about
export const createAbout = async (req: Request, res: Response) => {
    const abouts = await About.find().sort({ createdAt: -1 });

    if (abouts.length >= 1) {
        throw new AppError("Only one about document is allowed", 400);
    }

    const about = await About.create(req.body);

    res.status(201).json({
        success: true,
        data: about,
    });
};

// GET about
export const getAbout = async (req: Request, res: Response) => {
    const abouts = await About.find();

    res.status(200).json({
        success: true,
        data: abouts[0],
    });
};

// UPDATE about
export const updateAbout = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updates = req.body;

    const about = await About.findById(id);
    if (!about) {
        throw new AppError("About not found", 404);
    }

    const currentThumbnailUrl = about.image;
    const newThumbnailUrl = updates.image;

    // If image changed
    if (newThumbnailUrl && currentThumbnailUrl !== newThumbnailUrl) {
        // Find old file instance
        const fileInstance = await Upload.findOne({ url: currentThumbnailUrl });
        if (fileInstance) {
            try {
                await cloudinary.uploader.destroy(fileInstance.publicId);
                await fileInstance.deleteOne();
            } catch (err) {
                throw new AppError("Failed to remove old image", 500);
            }
        }
    }

    // Now update about
    const updatedAbout = await About.findByIdAndUpdate(id, updates, {
        new: true,
        runValidators: true,
    });

    res.status(200).json({
        success: true,
        data: updatedAbout,
    });
};

export const deleteAbout = async (req: Request, res: Response) => {
    const { id } = req.params;
    const about = await About.findById(id);

    if (!about) {
        throw new AppError("About not found", 404);
    }

    let descriptonImgUrls: string[] = [];
    if (about.description) {
        descriptonImgUrls = extractImageSources(about.description);
    }

    //collect thumbnail url
    let fileUrls: string[] = [...descriptonImgUrls, about.image];

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

        await About.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        console.error("❌ Error during about deletion:", err);
        throw new AppError("Failed to delete about or associated files", 500);
    }
};
