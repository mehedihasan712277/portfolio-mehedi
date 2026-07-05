import { Router } from "express";

import validateRequest from "../middlewares/validate.middleware";
import { identifier } from "../middlewares/indentifier.middleware";
import { createAbout, deleteAbout, getAbout, updateAbout } from "../controllers/about.controller";
import { createAboutSchema, updateAboutSchema } from "../schemas/about.schema";

const router = Router();

router.get("/", getAbout);
router.post("/", identifier, validateRequest(createAboutSchema), createAbout);
router.put("/:id", identifier, validateRequest(updateAboutSchema), updateAbout);
router.delete("/:id", identifier, deleteAbout);

export default router;
