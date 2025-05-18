import express from "express";
import { IndustrialCoursesControllers } from "./IndrustrialCourses.controller";


const router = express.Router();

router.post("/create-course", IndustrialCoursesControllers.createCourse);
router.get("/", IndustrialCoursesControllers.getAllCourses);
router.get("/:slug", IndustrialCoursesControllers.getACourse); 
router.get("/:id", IndustrialCoursesControllers.getACourseByID); 

router.delete("/:id", IndustrialCoursesControllers.deleteCourse);
router.put("/:id", IndustrialCoursesControllers.updateCourse);

export const IndustrialCoursesRoutes = router;
