/* eslint-disable no-unused-vars */
import { Model, ObjectId, Schema } from 'mongoose';
import { USER_ROLE, USER_STATUS } from './user.constant';

export type TUser = {
  isPasswordMatch(password: string): unknown;
  _id?: string;
  name: string;
  role: keyof typeof USER_ROLE;
  email: string;
  password: string;
  status: keyof typeof USER_STATUS;
  passwordChangedAt?: Date;

  mobileNumber?: string;
  profilePhoto?: string;


// verify 
emailVerified?: any;
emailVerificationToken?: string;
emailVerificationTokenExpires?: Date;

  // Payment and Course fields
  purchasedCourses?: {
    course: ObjectId
    totalPaid: number;
    dueAmount: number;
    isFullyPaid: boolean;
    nextDueDate?: Date;
    totalPrice: number;
    penaltyAmount?: number;
    installments?: {
      amount: number;
      date: Date;
      method: 'sslcommerz' | 'manual' | 'bank';
      transactionId?: string;
      status?: 'pending' | 'completed' | 'failed';
    }[];
  }[];
  
  // Address (optional for invoicing)
  address?: {
    street?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
  };
  

  createdAt?: Date;
  updatedAt?: Date;
};

export interface IUserModel extends Model<TUser> {
  isUserExistsByEmail(id: string): Promise<TUser>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean>;
  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number
  ): boolean;
}