import { Request, Response } from "express";
import httpStatus from "http-status";
import { IndustrialBannerService } from "./industrialBanner.services";
import { catchAsync } from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";

export const IndustrialBannerController = {
  createBanner: catchAsync(async (req: Request, res: Response) => {
    const result = await IndustrialBannerService.createBanner(req.body);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Banner created successfully",
      data: result,
    });
  }),

  getAllBanners: catchAsync(async (_req: Request, res: Response) => {
    const result = await IndustrialBannerService.getAllBanners();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Banners retrieved successfully",
      data: result,
    });
  }),

  deleteBanner: catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await IndustrialBannerService.deleteBannerById(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Banner deleted successfully",
      data: result,
    });
  }),
};
