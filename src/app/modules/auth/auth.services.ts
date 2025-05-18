import bcrypt from 'bcryptjs';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { createToken } from '../../utils/verifyJWT';
import { USER_ROLE } from '../User/user.constant';
import { TLoginUser, TRegisterUser } from './auth.interface';
import AppError from '../../error/AppError';
import config from '../../../config';
import { User } from '../User/user.model';

import crypto from 'crypto';
import { sendVerificationEmail } from '../../utils/emailSender';

// Add this to your existing imports

// Update your registerUser function to include email verification
const registerUser = async (payload: TRegisterUser) => {
  const user = await User.isUserExistsByEmail(payload?.email);

  if (user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is already exist!');
  }

  payload.role = USER_ROLE.USER;

  // Generate verification token
  const verificationToken = crypto.randomBytes(32).toString('hex');
  const verificationTokenExpires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

  // Create user with verification info
  const newUser = await User.create({
    ...payload,
    emailVerificationToken: verificationToken,
    emailVerificationTokenExpires: verificationTokenExpires,
  });

  // Send verification email
  await sendVerificationEmail(newUser.email, verificationToken);

  const jwtPayload = {
    _id: newUser._id,
    name: newUser.name,
    email: newUser.email,
    mobileNumber: newUser.mobileNumber,
    role: newUser.role,
    status: newUser.status,
    emailVerified: newUser.emailVerified,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
    user: {
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      emailVerified: newUser.emailVerified,
    },
  };
};

// Add this new function for email verification
const verifyEmail = async (token: string) => {
  // Find user with this token and check expiration
  const user = await User.findOne({
    emailVerificationToken: token,
    emailVerificationTokenExpires: { $gt: new Date() },
  });

  if (!user) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Invalid or expired token');
  }

  // Update user to mark email as verified
  user.emailVerified = true;
  user.emailVerificationToken = undefined;
  user.emailVerificationTokenExpires = undefined;
  await user.save();

  return {
    message: 'Email verified successfully',
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      emailVerified: user.emailVerified,
    },
  };
}; 



const loginUser = async (payload: TLoginUser) => {
 
   const user = await User.isUserExistsByEmail(payload?.email);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found!');
  }
 // Check if email is verified
  if (!user.emailVerified) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      'Please verify your email before logging in'
    );
  }

  const userStatus = user?.status;

  if (userStatus === 'BLOCKED') {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked!');
  }

  //checking if the password is correct

  if (!(await User.isPasswordMatched(payload?.password, user?.password)))
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');


  const jwtPayload = {
    _id: user._id,
    name: user.name,
    email: user.email,
    mobileNumber: user.mobileNumber,
    role: user.role,
    status: user.status,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
  };
};

const changePassword = async (
  userData: JwtPayload,
  payload: { oldPassword: string; newPassword: string }
) => {
  const user = await User.isUserExistsByEmail(userData.email);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found!');
  }


  const userStatus = user?.status;

  if (userStatus === 'BLOCKED') {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked!');
  }


  if (!(await User.isPasswordMatched(payload.oldPassword, user?.password)))
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');

  const newHashedPassword = await bcrypt.hash(
    payload.newPassword,
    Number(config.bcrypt_salt_rounds)
  );

  await User.findOneAndUpdate(
    {
      email: userData.email,
      role: userData.role,
    },
    {
      password: newHashedPassword,
      passwordChangedAt: new Date(),
    }
  );

  return null;
};

const refreshToken = async (token: string) => {
  // checking if the given token is valid
  const decoded = jwt.verify(
    token,
    config.jwt_refresh_secret as string
  ) as JwtPayload;

  const { email, iat } = decoded;

  // checking if the user is exist
  const user = await User.isUserExistsByEmail(email);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found!');
  }

  // checking if the user is blocked
  const userStatus = user?.status;

  if (userStatus === 'BLOCKED') {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked!');
  }

  if (
    user.passwordChangedAt &&
    User.isJWTIssuedBeforePasswordChanged(user.passwordChangedAt, iat as number)
  ) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized !');
  }

  const jwtPayload = {
    _id: user._id,
    name: user.name,
    email: user.email,
    mobileNumber: user.mobileNumber,
    role: user.role,
    status: user.status,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  );

  return {
    accessToken,
  };
};










const resendVerificationEmail = async (email: string) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }

  if (user.emailVerified) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Email is already verified');
  }

  // Generate new token
  const verificationToken = crypto.randomBytes(32).toString('hex');
  const verificationTokenExpires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

  // Update user with new token
  user.emailVerificationToken = verificationToken;
  user.emailVerificationTokenExpires = verificationTokenExpires;
  await user.save();

  // Send verification email
  await sendVerificationEmail(user.email, verificationToken);

  return {
    message: 'Verification email resent successfully',
  };
};








export const AuthServices = {
  registerUser,
  loginUser,
  changePassword,
  refreshToken,
  verifyEmail, 
  resendVerificationEmail
};