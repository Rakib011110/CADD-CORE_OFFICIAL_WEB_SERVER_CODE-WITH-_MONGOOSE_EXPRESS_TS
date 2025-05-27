import { Types } from "mongoose";
import { TUser } from "../User/user.interface";
import { TCourse } from "../courses/courses.interfaces";

export interface IPayment {
  transactionId: string;
  
  user: Types.ObjectId | TUser;
  course: Types.ObjectId | TCourse;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  createdAt?: Date;
  updatedAt?: Date;
}
