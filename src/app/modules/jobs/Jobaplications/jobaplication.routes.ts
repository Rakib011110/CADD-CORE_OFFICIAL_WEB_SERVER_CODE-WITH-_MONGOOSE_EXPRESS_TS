import express from "express";
import { ApplicationController } from "./Jobaplications.controller";

const router = express.Router();

router.post("/", ApplicationController.applyToJob);
router.get("/:jobId", ApplicationController.getApplications);
router.get("/:id", ApplicationController.getASingleAplications);
router.delete("/:id", ApplicationController.deleteAplications);
router.get("/", ApplicationController.getAllApplications);

export const ApplicationRoutes = router;
