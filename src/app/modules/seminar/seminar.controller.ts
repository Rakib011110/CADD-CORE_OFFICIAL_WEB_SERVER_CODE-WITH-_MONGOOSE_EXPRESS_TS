import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { SeminarServices } from "./seminar.service";

const createSeminar = catchAsync(async (req, res) => {
  const seminar = await SeminarServices.createSeminarInDb(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Seminar Created Successfully!",
    data: seminar,
  });
});

const getAllSeminars = catchAsync(async (req, res) => {
  const seminars = await SeminarServices.getAllSeminarsFromDb();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "All Seminars Retrieved Successfully!",
    data: seminars,
  });
});

const getASeminar = catchAsync(async (req, res) => {
  const { id } = req.params;
  const seminar = await SeminarServices.getASeminarFromDb(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Seminar Retrieved Successfully!",
    data: seminar,
  });
});

const updateSeminar = catchAsync(async (req, res) => {
  const { id } = req.params;
  const updatedSeminar = await SeminarServices.updateSeminarInDb(id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Seminar Updated Successfully!",
    data: updatedSeminar,
  });
});

const deleteSeminar = catchAsync(async (req, res) => {
  const { id } = req.params;
  await SeminarServices.deleteSeminarFromDb(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Seminar Deleted Successfully!",
    data: null,
  });
});

export const SeminarControllers = {
  createSeminar,
  getAllSeminars,
  getASeminar,
  updateSeminar,
  deleteSeminar,
};
