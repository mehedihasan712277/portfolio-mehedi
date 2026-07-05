import { Router } from "express";

import validateRequest from "../middlewares/validate.middleware";

import { identifier } from "../middlewares/indentifier.middleware";
import { createService, deleteService, getAllServices, getServiceById, updateService } from "../controllers/service.controller";
import { createServiceSchema, updateServiceSchema } from "../schemas/service.schema";

const router = Router();

router.get("/", getAllServices);
router.get("/:id", getServiceById);
router.post("/", identifier, validateRequest(createServiceSchema), createService);
router.put("/:id", identifier, validateRequest(updateServiceSchema), updateService);
router.delete("/:id", identifier, deleteService);

export default router;
