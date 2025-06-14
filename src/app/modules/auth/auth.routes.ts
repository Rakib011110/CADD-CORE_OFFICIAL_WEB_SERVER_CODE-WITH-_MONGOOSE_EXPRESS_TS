import express from 'express';
import auth from '../../middlewares/auth';

import { USER_ROLE } from '../User/user.constant';
import { AuthControllers } from './auth.controller';

const router = express.Router();

router.post(
  '/register',
//   validateRequest(AuthValidation.registerValidationSchema),
  AuthControllers.registerUser
);
router.post(
  '/login',
//   validateRequest(AuthValidation.loginValidationSchema),
  AuthControllers.loginUser
);

router.post(
  '/change-password',
  auth(USER_ROLE.USER, USER_ROLE.ADMIN),
//   validateRequest(AuthValidation.changePasswordValidationSchema),
  AuthControllers.changePassword
);

router.post(
  '/refresh-token',
//   validateRequestCookies(AuthValidation.refreshTokenValidationSchema),
  AuthControllers.refreshToken
);
// Add this new route
router.post(
  '/verify-email',
  AuthControllers.verifyEmail
); 


router.post(
  '/resend-verification',
  AuthControllers.resendVerificationEmail
);




router.get(
  '/me',
  auth(USER_ROLE.USER, USER_ROLE.ADMIN), // ⬅️ Protect this route
  AuthControllers.getMyProfile // ⬅️ You will create this controller
);




export const AuthRoutes = router;