import { Router } from "express";

import validateRequest from "../middlewares/validate.middleware";

import { identifier } from "../middlewares/indentifier.middleware";
import { createProcess, deleteProcess, getAllProcesss, updateProcess } from "../controllers/process.controller";
import { createProcessSchema, updateProcessSchema } from "../schemas/process.schema";

const router = Router();

router.get("/", getAllProcesss);
router.post("/", identifier, validateRequest(createProcessSchema), createProcess);
router.put("/:id", identifier, validateRequest(updateProcessSchema), updateProcess);
router.delete("/:id", identifier, deleteProcess);

export default router;
