import { Request, Response } from 'express';
import { CertificateService } from './certificate.service';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from "http-status";

export const createCertificate = catchAsync(async (req: Request, res: Response) => {
  const result = await CertificateService.createCertificate(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Certificate created successfully',
    data: result,
  }); 


});

export const getCertificates = catchAsync(async (_req: Request, res: Response) => {
  const result = await CertificateService.getCertificates();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Certificates retrieved successfully',
    data: result,
  });
});

export const updateCertificate = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CertificateService.updateCertificate(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Certificate updated successfully',
    data: result,
  });
});
 

export const getCertificateById = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await CertificateService.getCertificateById(id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Certificate fetched successfully',
      data: result,
    });
  });
  
  export const getCertificatesByStudentId = catchAsync(async (req: Request, res: Response) => {
    const { studentId } = req.params;
    const result = await CertificateService.getCertificatesByStudentId(studentId);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Certificates for student retrieved successfully',
      data: result,
    });
  }); 



  export const deleteCertificates = catchAsync(async (req ,res) => {
    const id = req.params.id; 
    const event = await CertificateService.deleteCertificates(id); 
    
    sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Certificate deleted successfully",
    data: event,
    
    });
  });   




  export const getStudentApplications = catchAsync(async (req, res) => {
    const { studentId } = req.params;
    const result = await CertificateService.getApplicationsByStudentId(studentId);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Fetched student's certificate applications",
      data: result,
    });
  });
  
  export const getAllCertificateApplications = catchAsync(async (req, res) => {
    const result = await CertificateService.getCertificates();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Certificates retrieved successfully',
      data: result,
    });
  });
  
  export const approveCertificate = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await CertificateService.approveApplication(id);
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
  
    const result = await CertificateService.applyForCertificate(studentId);
  
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Applied successfully",
      data: result,
    });
  });
  
  export const getPendingCertificates = catchAsync(async (req, res) => {
    const result = await CertificateService.getPendingCertificates();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Pending certificates retrieved",
      data: result,
    });
  });

