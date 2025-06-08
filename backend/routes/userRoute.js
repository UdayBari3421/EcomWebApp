import express from "express";
import { loginUser, registerUser, updateProfile } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/update", updateProfile);

export default userRouter;
