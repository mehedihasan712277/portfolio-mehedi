import { Router } from "express";

import validateRequest from "../middlewares/validate.middleware";

import { identifier } from "../middlewares/indentifier.middleware";
import { createProject, deleteProject, getAllProjects, getProjectById, updateProject } from "../controllers/project.controller";
import { createProjectSchema, updateProjectSchema } from "../schemas/project.schema";

const router = Router();

router.get("/", getAllProjects);
router.get("/:id", getProjectById);
router.post("/", identifier, validateRequest(createProjectSchema), createProject);
router.put("/:id", identifier, validateRequest(updateProjectSchema), updateProject);
router.delete("/:id", identifier, deleteProject);

export default router;
