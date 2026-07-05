import { Router } from "express";

import userRoutes from "./user.routes";
import blog_categoryRoutes from "./blog_category.routes";
import uploadRoutes from "./upload.routes";
import blogRoutes from "./blog.routes";
import aboutRoutes from "./about.routes";
import clientRoutes from "./client.routes";
import processRoutes from "./process.routes";
import projectRoutes from "./project.routes";
import serviceRoutes from "./service.routes";
import resultRoutes from "./result.routes";
import testimonialRoutes from "./testimonial.routes";
import chooseRoutes from "./choose.routes";
import appointmentRoutes from "./appointments.routes";

const router = Router();

router.use("/auth", userRoutes);
router.use("/blog-categories", blog_categoryRoutes);
router.use("/blogs", blogRoutes);
router.use("/uploads", uploadRoutes);
router.use("/about", aboutRoutes);
router.use("/clients", clientRoutes);
router.use("/processes", processRoutes);
router.use("/projects", projectRoutes);
router.use("/services", serviceRoutes);
router.use("/results", resultRoutes);
router.use("/testimonials", testimonialRoutes);
router.use("/features", chooseRoutes);
router.use("/appointments", appointmentRoutes);

export default router;
