import { Router } from "express";
import {
  adminLogin,
  createAdmin,
  getAdminAndUsers,
  removeUser,
} from "../controllers/adminController.js";
import adminAuth from "../middleware/adminAuth.js";
import { registerUser } from "../controllers/userController.js";

const adminRouter = Router();

adminRouter.post("/login", adminLogin);
adminRouter.post("/create", adminAuth, createAdmin);
adminRouter.delete("/removeUser", adminAuth, removeUser);
adminRouter.get("/getAllUsers", adminAuth, getAdminAndUsers);

export default adminRouter;
