import httpStatus from 'http-status';
import { InstructorHire } from './instructorHire.model';
import { IInstructorHire } from './instructorHire';
import { ApiError } from 'next/dist/server/api-utils';

const createInstructorHire = async (payload: IInstructorHire): Promise<IInstructorHire> => {
  return await InstructorHire.create(payload);
};

const getAllInstructorHires = async (): Promise<IInstructorHire[]> => {
  return await InstructorHire.find();
};

const getSingleInstructorHire = async (id: string): Promise<IInstructorHire | null> => {
  const result = await InstructorHire.findById(id);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'InstructorHire not found');
  }
  return result;
};

const updateInstructorHire = async (
  id: string,
  payload: Partial<IInstructorHire>
): Promise<IInstructorHire | null> => {
  const result = await InstructorHire.findByIdAndUpdate(id, payload, { new: true });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'InstructorHire not found');
  }
  return result;
};

const deleteInstructorHire = async (id: string): Promise<IInstructorHire | null> => {
  const result = await InstructorHire.findByIdAndDelete(id);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'InstructorHire not found');
  }
  return result;
};

const reviewInstructorHire = async (
  id: string,
  status: 'approved' | 'rejected',
  reviewedBy: string,
  reviewNotes?: string
): Promise<IInstructorHire | null> => {
  const result = await InstructorHire.findByIdAndUpdate(
    id,
    { status, reviewedBy, reviewNotes },
    { new: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'InstructorHire not found');
  }
  return result;
};

export const InstructorHireService = {
  createInstructorHire,
  getAllInstructorHires,
  getSingleInstructorHire,
  updateInstructorHire,
  deleteInstructorHire,
  reviewInstructorHire
};