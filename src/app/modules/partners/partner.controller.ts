import { Request, Response } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import { PartnerService } from './partner.service';
import sendResponse from '../../utils/sendResponse';

export const PartnerController = {
  create: catchAsync(async (req: Request, res: Response) => {
    const result = await PartnerService.create(req.body);
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: 'Partner created successfully',
      data: result,
    });
  }),

  getAll: catchAsync(async (req: Request, res: Response) => {
    const result = await PartnerService.getAll();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Partners retrieved successfully',
      data: result,
    });
  }),

  getById: catchAsync(async (req: Request, res: Response) => {
    const result = await PartnerService.getById(req.params.id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Partner retrieved successfully',
      data: result,
    });
  }),

  update: catchAsync(async (req: Request, res: Response) => {
    const result = await PartnerService.update(req.params.id, req.body);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Partner updated successfully',
      data: result,
    });
  }),

  delete: catchAsync(async (req: Request, res: Response) => {
    const result = await PartnerService.delete(req.params.id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Partner deleted successfully',
      data: result,
    });
  }),
};
