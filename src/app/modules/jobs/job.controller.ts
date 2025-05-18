import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import * as JobService from "./job.service";

export const createJob = catchAsync(async (req, res) => {
  const result = await JobService.createJob(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Job created",
    data: result,
  });
});

export const getAllJobs = catchAsync(async (req, res) => {
  const result = await JobService.getAllJobs();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "All jobs fetched",
    data: result,
  });
});

export const getSingleJob = catchAsync(async (req, res) => {
  const result = await JobService.getSingleJob(req.params.slug);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Single job fetched",
    data: result,
  });
});

export const deleteJob = catchAsync(async (req, res) => {
  const result = await JobService.deleteJob(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Job deleted",
    data: result,
  });
});


export const updateJob = catchAsync(async (req ,res) => {
  const result = await JobService.updateJob(req.params.id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Job updated successfully",
    data: result,
  });
});