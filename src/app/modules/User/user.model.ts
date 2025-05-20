/* eslint-disable no-useless-escape */
import bcryptjs from 'bcryptjs';
import mongoose, { Schema, model } from 'mongoose';
import { USER_ROLE, USER_STATUS } from './user.constant';
import { IUserModel, TUser } from './user.interface';
import config from '../../../config';

const userSchema = new Schema<TUser, IUserModel>(
  {
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: Object.keys(USER_ROLE),
      required: true,
    },
    email: {
      type: String,
      required: true,
      //validate email
      match: [
        /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
        'Please fill a valid email address',
      ],
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
    status: {
      type: String,
      enum: Object.keys(USER_STATUS),
      default: USER_STATUS.ACTIVE,
    },
    passwordChangedAt: {
      type: Date,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
    profilePhoto: {
      type: String,
      default: null
    },
//  
// email verify  
emailVerified: {
  type: Boolean,
  default: false,
},
emailVerificationToken: {
  type: String,
  select: false,
},
emailVerificationTokenExpires: {
  type: Date,
  select: false,
},
 // Course purchase and payment
    purchasedCourses: [{
     course: { type: mongoose.Types.ObjectId, ref: 'Course' },
      totalPaid: { type: Number, default: 0 },
      dueAmount: { type: Number, required: true },
      isFullyPaid: { type: Boolean, default: false },
      nextDueDate: { type: Date },
      totalPrice: { type: Number, required: true },
      penaltyAmount: { type: Number, default: 0 },
      installments: [{
        amount: { type: Number, required: true },
        date: { type: Date, default: Date.now },
        method: { 
          type: String, 
          enum: ['sslcommerz', 'manual', 'bank'],
          required: true
        },
        transactionId: { type: String },
        status: { 
          type: String, 
          enum: ['pending', 'completed', 'failed'],
          default: 'completed'
        }
      }]
    }],
    
    // Address
    address: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      postalCode: { type: String },
      country: { type: String }
    }
  },

  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function(doc, ret) {
        delete ret.password;
        return ret;
      }
    }
  }
);

userSchema.pre('save', async function (next) {
  // only hash when password was created or changed
  if (!this.isModified('password')) {
    return next();
  }
  this.password = await bcryptjs.hash(
    this.password,
    Number(config.bcrypt_salt_rounds)
  );
  next();
});

// set '' after saving password
userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

userSchema.statics.isUserExistsByEmail = async function (email: string) {
  return await User.findOne({ email }).select('+password');
};

userSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword
) {
  return await bcryptjs.compare(plainTextPassword, hashedPassword);
};

userSchema.statics.isJWTIssuedBeforePasswordChanged = function (
  passwordChangedTimestamp: number,
  jwtIssuedTimestamp: number
) {
  const passwordChangedTime =
    new Date(passwordChangedTimestamp).getTime() / 1000;
  return passwordChangedTime > jwtIssuedTimestamp;
};

export const User = model<TUser, IUserModel>('User', userSchema);