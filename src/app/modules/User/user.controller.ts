import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { UserServices } from "./user.services";

const createUsers = catchAsync(async (req, res) => {
  const user = await UserServices.createUserIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User Created Successfully",
    data: user,
  });
});

const getAllUsers = catchAsync(async (req, res) => {
  const users = await UserServices.getAllUsersFromDb();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Users fetched successfully",
    data: users,
  });
});

const getAUser = catchAsync(async (req, res) => {
  const userId = req.params.id;
  const user = await UserServices.getAUserFromDb(userId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User fetched successfully",
    data: user,
  });
});
 
const updateUser = catchAsync(async (req, res) => {
  const userId = req.params.id;
  const updatedUser = await UserServices.updpateUserInDb(userId, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User updated successfully",
    data: updatedUser,
  });
});

const deleteUser = catchAsync(async (req, res) => {
  const userId = req.params.id;
  const deletedUser = await UserServices.deleteUserFromDb(userId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User deleted successfully",
    data: deletedUser,
  });
});

export const UserControllers = {
  createUsers,
  getAllUsers,
  getAUser, deleteUser,
  updateUser
};
