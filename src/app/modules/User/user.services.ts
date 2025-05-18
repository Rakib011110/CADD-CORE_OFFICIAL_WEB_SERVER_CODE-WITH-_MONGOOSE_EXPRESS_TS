import { User } from './user.model';
import { TUser } from "./user.interface";

const createUserIntoDB = async (payload: TUser) => {
  try {
    const newUser = await User.create(payload);
    return newUser;
  } catch (error) {
    throw error;
  }
};

const getAllUsersFromDb = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw error;
  }
};

const getAUserFromDb = async (id: string) => {
  try {
    const user = await User.findById(id);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    throw error;
  }
};
 
const updpateUserInDb = async (id: string, payload: TUser) => {
  try {  
const user = await User.findByIdAndUpdate(id, payload, { new: true });
    if (!user) {
      throw new Error("User not found");
    } 

    return user;
  } catch (error) {
    throw error;



   } };


const deleteUserFromDb = async (id: string) => {
  try {    

   const deletedUser = await User.findByIdAndDelete(id);


   if (!deletedUser) {
    throw new Error("User not found");
  }

  return deletedUser;
   } catch (error) {} };



export const UserServices = {
  createUserIntoDB,
  getAllUsersFromDb,
  getAUserFromDb, 
  updpateUserInDb, 

  deleteUserFromDb
};
