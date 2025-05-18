import express from "express";
import { UserControllers } from "./user.controller";

const router = express.Router();

router.post("/create-user", UserControllers.createUsers);
router.get("/", UserControllers.getAllUsers); 
router.get("/:id", UserControllers.getAUser); 
router.put("/:id", UserControllers.updateUser); 
router.delete("/:id", UserControllers.deleteUser); 
export const UserRoutes = router; 



