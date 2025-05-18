import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { certificateService} from "./certificateApplication.service";




export const createCertificate = catchAsync(async (req: Request, res: Response) => {
    const result = await certificateService.createCertificate(req.body);
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Certificate created successfully",
      data: result,
    });
  });
  
  export const getStudentApplications = catchAsync(async (req, res) => {
    const { studentId } = req.params;
    const result = await certificateService.getApplicationsByStudentId(studentId);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Fetched student's certificate applications",
      data: result,
    });
  });
  
  export const getAllCertificateApplications = catchAsync(async (req, res) => {
    const result = await certificateService.getAllApplications();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "All certificate applications retrieved",
      data: result,
    });
  });
  
  export const approveCertificate = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await certificateService.approveApplication(id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Certificate application approved",
      data: result,
    });
  });
  
  export const applyCertificate = catchAsync(async (req: Request, res: Response) => {
    const { studentId } = req.body;
  
    if (!studentId) {
      throw new Error("Validation Error: studentId is required");
    }
  
    const result = await certificateService.applyForCertificate(studentId);
  
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Applied successfully",
      data: result,
    });
  });
  
  export const getPendingCertificates = catchAsync(async (req, res) => {
    const result = await certificateService.getPendingCertificates();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Pending certificates retrieved",
      data: result,
    });
  });