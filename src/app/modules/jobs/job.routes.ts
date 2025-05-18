import express from "express";
import * as JobController from "./job.controller";

const router = express.Router();

router.post("/", JobController.createJob);
router.get("/", JobController.getAllJobs);
router.get("/:slug", JobController.getSingleJob);
router.delete("/:id", JobController.deleteJob);
router.patch("/:id", JobController.updateJob);

export const JobsRoutes = router;
