import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { catchAsync } from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { CourseScheduleService } from './CourseSchedule.services';

export const createSchedule = catchAsync(async (req: Request, res: Response) => {
  const result = await CourseScheduleService.createSchedule(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Schedule created successfully',
    data: result,
  });
});

export const getSchedule = catchAsync(async (req: Request, res: Response) => {
  const result = await CourseScheduleService.getScheduleById(req.params.id);
  if (!result) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'Schedule not found',
      data: null,
    });
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Schedule fetched successfully',
    data: result,
  });
});

export const getAllSchedules = catchAsync(async (_req: Request, res: Response) => {
  const result = await CourseScheduleService.getAllSchedules();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All schedules fetched successfully',
    data: result,
  });
});

export const updateSchedule = catchAsync(async (req: Request, res: Response) => {
  const result = await CourseScheduleService.updateSchedule(req.params.id, req.body);
  if (!result) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'Schedule not found',
      data: null,
    });
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Schedule updated successfully',
    data: result,
  });
});

export const deleteSchedule = catchAsync(async (req: Request, res: Response) => {
  const result = await CourseScheduleService.deleteSchedule(req.params.id);
  if (!result) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'Schedule not found',
      data: null,
    });
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Schedule deleted successfully',
    data: result,
  });
});

export const CourseScheduleController = {
  createSchedule,
  getSchedule,
  getAllSchedules,
  updateSchedule,
  deleteSchedule,
};
