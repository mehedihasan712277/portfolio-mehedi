import { Router } from "express";

import validateRequest from "../middlewares/validate.middleware";

import { identifier } from "../middlewares/indentifier.middleware";
import { createChoose, deleteChoose, getAllChooses, updateChoose } from "../controllers/choose.controller";
import { createChooseSchema, updateChooseSchema } from "../schemas/choose.schema";

const router = Router();

router.get("/", getAllChooses);
router.post("/", identifier, validateRequest(createChooseSchema), createChoose);
router.put("/:id", identifier, validateRequest(updateChooseSchema), updateChoose);
router.delete("/:id", identifier, deleteChoose);

export default router;
