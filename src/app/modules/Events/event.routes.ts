import express from "express";
import { EventControllers } from "./event.controller";

const router = express.Router();

router.post("/create-events", EventControllers.createEvent);
router.get("/", EventControllers.getEvent);
router.get("/:id", EventControllers.getEnentById);
router.put("/:id", EventControllers.updateEvent);
router.delete("/:id", EventControllers.deleteEvent);

export const EventRoutes=  router;
