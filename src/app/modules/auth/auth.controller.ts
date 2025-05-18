import httpStatus  from 'http-status';
import config from "../../../config";
import { catchAsync } from "../../utils/catchAsync";
import { AuthServices } from "./auth.services";
import sendResponse from '../../utils/sendResponse';



const registerUser = catchAsync(async (req, res) => {

    const result = await AuthServices.registerUser(req.body);
  
const {refreshToken, accessToken} = result;

res.cookie('refreshToken', refreshToken, {

secure: config.NODE_ENV === 'production',
httpOnly: true,

    
});


sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User registered in successfully!',
    data: {
      accessToken,
      refreshToken,
    },
  });

}) 

const loginUser = catchAsync(async (req, res) => {
    const result = await AuthServices.loginUser(req.body);
    const { refreshToken, accessToken } = result;
  
    res.cookie('refreshToken', refreshToken, {
      secure: config.NODE_ENV === 'production',
      httpOnly: true,
    });
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User logged in successfully!',
      data: {
        accessToken,
        refreshToken,
      },
    });
  }); 


  const changePassword = catchAsync(async (req, res) => {
    const { ...passwordData } = req.body;
  
    const result = await AuthServices.changePassword(req.user, passwordData);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Password updated successfully!',
      data: result,
    });
  }); 


  const refreshToken = catchAsync(async (req, res) => {
    const { refreshToken } = req.cookies;
    const result = await AuthServices.refreshToken(refreshToken);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Access token retrieved successfully!',
      data: result,
    });
  }); 


// Add this new controller
const verifyEmail = catchAsync(async (req, res) => {
  const { token } = req.body;
  const result = await AuthServices.verifyEmail(token);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: result.message,
    data: result.user,
  });
});
const resendVerificationEmail = catchAsync(async (req, res) => {
  const { email } = req.body;
  const result = await AuthServices.resendVerificationEmail(email);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: result.message,
    data: null,
  });
});

  export const AuthControllers = {
    registerUser,
    loginUser,
    changePassword,
    refreshToken,verifyEmail, resendVerificationEmail
  };