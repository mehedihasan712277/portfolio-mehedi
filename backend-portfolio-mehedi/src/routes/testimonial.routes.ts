import { Router } from "express";

import validateRequest from "../middlewares/validate.middleware";

import { identifier } from "../middlewares/indentifier.middleware";
import { createTestimonial, deleteTestimonial, getAllTestimonials, updateTestimonial } from "../controllers/testimonial.controller";
import { createTestimonialSchema, updateTestimonialSchema } from "../schemas/testimonial.schema";

const router = Router();

router.get("/", getAllTestimonials);
router.post("/", identifier, validateRequest(createTestimonialSchema), createTestimonial);
router.put("/:id", identifier, validateRequest(updateTestimonialSchema), updateTestimonial);
router.delete("/:id", identifier, deleteTestimonial);

export default router;
