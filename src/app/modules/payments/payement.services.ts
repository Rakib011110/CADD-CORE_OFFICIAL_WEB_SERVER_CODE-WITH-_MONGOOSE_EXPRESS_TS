import mongoose from "mongoose";
import { Payment } from "./payment.model";

export const PaymentService = {
  getAllPayments: async () => {
    return Payment.find().populate('user').populate('course');
  },

  getSinglePayment: async (id: string) => {
    return Payment.findById(id).populate('user').populate('course');
  } ,




getPaymentsByUser: async (userId: string) => {
   
   console.log(userId)
    const payments = await Payment.find({ user: new mongoose.Types.ObjectId(userId) })
      .populate('course');

    const totalPaid = payments.reduce((sum, p) => sum + p.amount, 0);

    return {
      payments,
      totalPaid,
      totalTransactions: payments.length,
    };
  },
};