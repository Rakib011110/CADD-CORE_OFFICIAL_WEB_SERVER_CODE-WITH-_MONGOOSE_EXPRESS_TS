import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { clientReviewService } from "./clientReview.service";
import sendResponse from "../../utils/sendResponse";

export const createReview = catchAsync(async (req: Request, res: Response) => {
  const result = await clientReviewService.createClientReview(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Client review created successfully",
    data: result,
  });
});

export const getReviews = catchAsync(async (req: Request, res: Response) => {
  const result = await clientReviewService.getAllClientReviews();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "All client reviews fetched",
    data: result,
  });
});

export const getReview = catchAsync(async (req: Request, res: Response) => {
  const result = await clientReviewService.getSingleClientReview(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Client review fetched",
    data: result,
  });
});

export const updateReview = catchAsync(async (req: Request, res: Response) => {
  const result = await clientReviewService.updateClientReview(req.params.id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Client review updated",
    data: result,
  });
});

export const deleteReview = catchAsync(async (req: Request, res: Response) => {
  const result = await clientReviewService.deleteClientReview(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Client review deleted",
    data: result,
  });
});
