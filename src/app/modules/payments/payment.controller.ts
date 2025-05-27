// payment.controller.ts
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { SslCommerzPayment } from 'sslcommerz';
import { initiateSSLCommerzPayment } from '../Sslcommerz-payment-integratigrations/sslcommerz.utils';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { Payment } from './payment.model';
import { PaymentService } from './payement.services';
import {
  sendPaymentSuccessEmail,
  sendPaymentFailedEmail,
} from '../../utils/sendPaymentEmail';


export const PaymentController = {
  // 1️⃣ Initialize payment session
  createSSLSession: catchAsync(async (req: Request, res: Response) => {
    const { amount, user, courseId } = req.body;
    if (!amount || isNaN(amount)) {
      return sendResponse(res, {
        statusCode: 400,
        success: false,
        message: 'Invalid payment amount',
          data: undefined
      });
    }

    const transactionId = uuidv4();
    const successUrl = `${process.env.SSL_PAYMENT_IPN_URL}/${transactionId}`;
    const failUrl = `${process.env.SSL_PAYMENT_IPN_URL}/fail/${transactionId}`;
    const cancelUrl = `${process.env.SSL_PAYMENT_CANCEL_URL}/${transactionId}`;

    // init SSL session
    const { GatewayPageURL } = await initiateSSLCommerzPayment({
      amount,
      transactionId,
      successUrl,
      failUrl,
      cancelUrl,
      customer: {
        name: user.name,
        email: user.email,
        phone: user.mobileNumber || '01700000000',
        address: user.address?.street || 'N/A',
      },
    });

    // save pending payment
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
      data: { gatewayUrl: GatewayPageURL },
    });
  }),

  // 2️⃣ IPN validation callback (success)
  verifyPaymentUrl: catchAsync(async (req: Request, res: Response) => {
    const { transactionId } = req.params;
    const val_id = (req.body.val_id as string) || (req.query.val_id as string);
    if (!val_id) {
      throw new Error('val_id is required for IPN validation');
    }

    // setup SSLCommerz instance
    const sslcz = new SslCommerzPayment(
      process.env.SSLCOMMERZ_STORE_ID!,
      process.env.SSLCOMMERZ_STORE_PASSWORD!,
      false
    );

    try {
      // validate with timeout
      const validation = await Promise.race([
        sslcz.validate({ val_id }),
        new Promise((_, rej) =>
          setTimeout(() => rej(new Error('Validation timeout')), 15000)
        ),
      ]) as any;

      if (validation.status !== 'VALID') {
        throw new Error(
          `Validation failed: ${validation.errorDesc || validation.error}`
        );
      }

      // update DB
      const update = await Payment.updateOne(
        { transactionId },
        { status: 'completed', updatedAt: new Date() }
      );
      if (update.modifiedCount === 0) {
        throw new Error('Database update failed');
      }

      // send success email
      const payment = await Payment.findOne({ transactionId })
        .populate('user')
        .populate('course');
      if (payment && payment.user && payment.course) {
        const u = payment.user as any;
        const c = payment.course as any;
        await sendPaymentSuccessEmail(
          u.email,
          u.name,
          c.title,
          payment.amount,
          transactionId
        );
      }

      // redirect to client success page
      return res.redirect(
        `${process.env.SSL_PAYMENT_SUCCESS_URL}/${transactionId}`
      );
    } catch (err: any) {
      console.error('IPN validation error:', err);
      // mark failed and email
      await Payment.updateOne(
        { transactionId },
        { status: 'failed', updatedAt: new Date() }
      );
      const payment = await Payment.findOne({ transactionId }).populate('user');
      if (payment && payment.user) {
        const u = payment.user as any;
        await sendPaymentFailedEmail(
          u.email,
          u.name,
          payment.amount,
          transactionId
        );
      }
      return res.redirect(
        `${process.env.SSL_PAYMENT_FAIL_URL}/${transactionId}`
      );
    }
  }),

  // 3️⃣ IPN failure callback
  verifyFailPayment: catchAsync(async (req: Request, res: Response) => {
    const { transactionId } = req.params;
    // simply redirect to fail
    return res.redirect(
      `${process.env.SSL_PAYMENT_FAIL_URL}/${transactionId}`
    );
  }),

  // 4️⃣ Client success redirect (no logic here)
  handleSuccess: catchAsync(async (req: Request, res: Response) => {
    const { transactionId } = req.params;
    const url = (process.env.CLIENT_URL || '').replace(/\/$/, '');
    return res.redirect(`${url}/payment/success/${transactionId}`);
  }),

  // 5️⃣ Client failure redirect
  handleFailure: catchAsync(async (req: Request, res: Response) => {
    const { transactionId } = req.params;
    const url = (process.env.CLIENT_URL || '').replace(/\/$/, '');
    return res.redirect(`${url}/payment/fail/${transactionId}`);
  }),

  // 💼 Admin: get all payments
  getAllPayments: catchAsync(async (req: Request, res: Response) => {
    const result = await PaymentService.getAllPayments();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'All payments fetched successfully',
      data: result,
    });
  }),

  // 💼 Admin: single payment
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

  // 👤 User: my payments
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
