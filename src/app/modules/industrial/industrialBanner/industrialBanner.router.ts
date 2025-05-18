import express from "express";
import { IndustrialBannerController } from "./industrialBanner.controller";

const router = express.Router();

router.post("/", IndustrialBannerController.createBanner);
router.get("/", IndustrialBannerController.getAllBanners);
router.delete("/:id", IndustrialBannerController.deleteBanner);

export const IndustrialBannerRoutes = router;
