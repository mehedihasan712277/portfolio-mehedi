import { Router } from "express";

import validateRequest from "../middlewares/validate.middleware";

import { identifier } from "../middlewares/indentifier.middleware";
import { createResult, deleteResult, getAllResults, updateResult } from "../controllers/result.controller";
import { createResultSchema, updateResultSchema } from "../schemas/result.schema";

const router = Router();

router.get("/", getAllResults);
router.post("/", identifier, validateRequest(createResultSchema), createResult);
router.put("/:id", identifier, validateRequest(updateResultSchema), updateResult);
router.delete("/:id", identifier, deleteResult);

export default router;
