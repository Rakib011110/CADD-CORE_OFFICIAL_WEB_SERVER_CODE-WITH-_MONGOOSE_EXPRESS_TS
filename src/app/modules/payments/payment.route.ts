import express from 'express';
import { PaymentController } from './payment.controller';

const router = express.Router();

router.post('/initiate', PaymentController.createSSLSession);
router.post('/success/:transactionId', PaymentController.handleSuccess);
router.post('/fail/:transactionId', PaymentController.handleFailure);
router.get('/', PaymentController.getAllPayments);
router.get('/:id', PaymentController.getSinglePayment); // 👈 This must come after

router.get('/my-payments/:userId', PaymentController.getMyPayments);

router.get('/my-payments/:id', PaymentController.getSinglePayment);

export const PaymentRoutes = router;