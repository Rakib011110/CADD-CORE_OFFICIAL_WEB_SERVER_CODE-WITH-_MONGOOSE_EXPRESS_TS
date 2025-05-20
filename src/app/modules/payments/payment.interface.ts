import { Types } from "mongoose";

export interface IPayment {
  transactionId: string;
  user: Types.ObjectId;
  course: Types.ObjectId;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  createdAt?: Date;
  updatedAt?: Date;
}
