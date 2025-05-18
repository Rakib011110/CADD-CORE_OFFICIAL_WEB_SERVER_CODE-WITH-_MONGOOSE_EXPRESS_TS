import express from "express";
import { createReview, deleteReview, getReview, getReviews, updateReview } from "./clientReview.controller";

const router = express.Router();

router.post("/", createReview);
router.get("/", getReviews);
router.get("/:id", getReview);
router.patch("/:id", updateReview);
router.delete("/:id", deleteReview);

export const Reviews= router;
