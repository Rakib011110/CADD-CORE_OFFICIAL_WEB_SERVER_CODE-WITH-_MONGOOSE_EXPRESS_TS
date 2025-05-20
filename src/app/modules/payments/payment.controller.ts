// payment.controller.ts
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import config from '../../../config';
import { initiateSSLCommerzPayment } from '../Sslcommerz-payment-integratigrations/sslcommerz.utils';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { Payment } from './payment.model';
import { PaymentService } from './payement.services';

export const PaymentController = {
  createSSLSession: catchAsync(async (req: Request, res: Response) => {
    const { amount, user, courseId } = req.body;
    const transactionId = uuidv4();

   const sslRes = await initiateSSLCommerzPayment({
  amount,
  transactionId,
  successUrl: `${process.env.SSL_PAYMENT_SUCCESS_URL}/${transactionId}`,
  failUrl: `${process.env.SSL_PAYMENT_FAIL_URL}/${transactionId}`,
  cancelUrl: `${process.env.SSL_PAYMENT_CANCEL_URL}/${transactionId}`,
  customer: {
    name: user.name,
    email: user.email,
    phone: user.mobileNumber,
    address: user.address?.street || 'N/A',
  },
});


    await Payment.create({
      course: courseId,
      user: user._id,
      transactionId,
      amount,
      status: 'pending',
    });

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Payment session initialized',
      data: { gatewayUrl: sslRes.GatewayPageURL },
    });
  }),

  handleSuccess: catchAsync(async (req: Request, res: Response) => { 

    
    const { transactionId } = req.params; 

  console.log('✅ Payment success for:', transactionId); // 👈 Add this line for debugging

  console.log('❌ Payment failed for:', transactionId); // 👈 Add this line for debugging

await Payment.updateOne(
  { transactionId },
  { status: 'completed' }
);

res.redirect(`${process.env.SSL_PAYMENT_SUCCESS_URL}?tx=${transactionId}`);

  }),

  handleFailure: catchAsync(async (req: Request, res: Response) => {
    const { transactionId } = req.params;
    await Payment.updateOne(
      { transactionId },
      { status: 'failed' }
    );
    res.redirect(`${process.env.SSL_PAYMENT_FAIL_URL}?tx=${transactionId}`);
  }), 

//  for getting all payments 

 getAllPayments: catchAsync(async (req: Request, res: Response) => {
    const result = await PaymentService.getAllPayments();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'All payments fetched successfully',
      data: result,
    });
  }),



getSinglePayment: catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await PaymentService.getSinglePayment(id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Single payment fetched successfully',
      data: result,
    });
  }),


getMyPayments: catchAsync(async (req: Request, res: Response) => {
const { userId } = req.params;

const payments = await Payment.find({ user: userId })
.populate('user')
.populate('course');

sendResponse(res, {
statusCode: 200,
success: true,
message: 'User payments fetched successfully',
data: payments,
});
}),

};

