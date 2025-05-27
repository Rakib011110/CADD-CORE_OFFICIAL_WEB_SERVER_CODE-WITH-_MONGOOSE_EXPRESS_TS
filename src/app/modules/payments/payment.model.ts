
// payment.model.ts
import { Schema, model } from 'mongoose';
import { IPayment } from './payment.interface';

const paymentSchema = new Schema<IPayment>(
  {
    transactionId: { type: String, required: true, unique: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    course: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    amount: { type: Number, required: true },
    status: {
      type: String,
      enum: ['pending', 'completed', 'failed'],
      default: 'pending',
    },
  },
  { timestamps: true }
);
 


// Add pre-save hook for status changes
paymentSchema.pre('save', function(next) {
  if (this.isModified('status')) {
    this.updatedAt = new Date();
    
    // You can add additional logic here when status changes
    if (this.status === 'completed') {
      // Trigger any post-payment completion logic
    }
  }
  next();
});


export const Payment = model<IPayment>('Payment', paymentSchema);