import { Request, Response, NextFunction } from 'express';
import { validate as isUuid } from 'uuid';

export const validateTransactionId = (req: Request, res: Response, next: NextFunction) => {
  const { transactionId } = req.params;

  if (!transactionId || !isUuid(transactionId)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid or missing transactionId',
    });
  }

  next();
};
