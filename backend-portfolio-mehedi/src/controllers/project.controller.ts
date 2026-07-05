import { Request, Response } from "express";
import AppError from "../utils/AppError";
import Upload from "../models/upload.model";
import { v2 as cloudinary } from "cloudinary";
import { extractImageSources } from "../utils/imgUrlExtractor";
import Project from "../models/project.model";

// CREATE a new project
export const createProject = async (req: Request, res: Response) => {
    const project = await Project.create(req.body);

    res.status(201).json({
        success: true,
        data: project,
    });
};

// GET all projects
export const getAllProjects = async (req: Request, res: Response) => {
    const projects = await Project.find();

    res.status(200).json({
        success: true,
        count: projects.length,
        data: projects,
    });
};

// GET single project by id
export const getProjectById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const project = await Project.findById(id);

    if (!project) {
        throw new AppError("Project not found", 404);
    }

    res.status(200).json({
        success: true,
        data: project,
    });
};

// UPDATE project
export const updateProject = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updates = req.body;

    const project = await Project.findById(id);
    if (!project) {
        throw new AppError("Project not found", 404);
    }

    // Now update project
    const updatedProject = await Project.findByIdAndUpdate(id, updates, {
        new: true,
        runValidators: true,
    });

    res.status(200).json({
        success: true,
        data: updatedProject,
    });
};

// DELETE project
export const deleteProject = async (req: Request, res: Response) => {
    const { id } = req.params;
    const project = await Project.findById(id);

    if (!project) {
        throw new AppError("Project not found", 404);
    }

    let descriptonImgUrls: string[] = [];
    if (project.description) {
        descriptonImgUrls = extractImageSources(project.description);
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

        await Project.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        console.error("❌ Error during project deletion:", err);
        throw new AppError("Failed to delete project or associated files", 500);
    }
};
