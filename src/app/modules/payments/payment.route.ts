// payment.routes.ts
import express from 'express';
import { PaymentController } from './payment.controller';
import { validateTransactionId } from '../../utils/validateTransactionId';

const router = express.Router();

// Payment flow routes
router.post('/initiate', PaymentController.createSSLSession);

router.post("/ipn/:transactionId", PaymentController.verifyPaymentUrl);
// router.post("/ipn/fail/:transactionId", PaymentController.verifyFailPayment);

router.post("/ipn/fail/:transactionId", PaymentController.verifyFailPayment);

router.get(
  '/success/:transactionId',
 
  PaymentController.handleSuccess
); 



router.get(
  '/fail/:transactionId',
 validateTransactionId,
  PaymentController.handleFailure
);

// Payment data routes
router.get('/', PaymentController.getAllPayments);
router.get('/:id', PaymentController.getSinglePayment);
router.get('/my-payments/:userId', PaymentController.getMyPayments);

export const PaymentRoutes = router;