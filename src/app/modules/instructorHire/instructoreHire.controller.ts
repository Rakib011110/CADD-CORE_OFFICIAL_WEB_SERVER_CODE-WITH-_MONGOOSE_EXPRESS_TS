import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import { InstructorHireService } from './instructorHire.services';
import { IInstructorHire } from './instructorHire';
import sendResponse from '../../utils/sendResponse';

const createInstructor = catchAsync(async (req: Request, res: Response) => {
  const result = await InstructorHireService.createInstructorHire(req.body);
  sendResponse<IInstructorHire>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Instructor application submitted successfully',
    data: result
  });
});

const getAllInstructors = catchAsync(async (req: Request, res: Response) => {
  const result = await InstructorHireService.getAllInstructorHires();
  sendResponse<IInstructorHire[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Instructors retrieved successfully',
    data: result
  });
});

const getSingleInstructor = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await InstructorHireService.getSingleInstructorHire(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Instructor retrieved successfully',
    data: result
  });
});

const updateInstructor = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await InstructorHireService.updateInstructorHire(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Instructor updated successfully',
    data: result
  });
});

const deleteInstructor = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await InstructorHireService.deleteInstructorHire(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Instructor deleted successfully',
    data: result
  });
});

const reviewInstructor = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status, reviewNotes } = req.body;
  const reviewedBy = req.user?._id; // Assuming you have authentication middleware
  
  const result = await InstructorHireService.reviewInstructorHire(
    id,
    status,
    reviewedBy,
    reviewNotes
  );
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Instructor review completed',
    data: result
  });
});

export const InstructorController = {
  createInstructor,
  getAllInstructors,
  getSingleInstructor,
  updateInstructor,
  deleteInstructor,
  reviewInstructor
};