import adminModel from "../models/adminModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import { registerUser } from "./userController.js";

const createToken = (id) => jwt.sign({ id, userType: "admin" }, process.env.JWT_SECRET);

// route for admin login
// const adminLogin = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
//       const token = jwt.sign(email + password, process.env.JWT_SECRET);
//       return res.json({
//         message: "Admin logged in successfully",
//         username: process.env.ADMIN_NAME,
//         status: 200,
//         success: true,
//         token,
//       });
//     } else {
//       return res.json({ message: "Invalid credentials", status: 400, success: false });
//     }
//   } catch (error) {
//     console.log(error);
//     return res.json({ message: error.message, status: 500, success: false });
//   }
// };

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "Email and password are required", status: 400, success: false });
    }

    const admin = await adminModel.findOne({ email });

    if (!admin) {
      return res.json({ message: "Admin not found", status: 404, success: false });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.json({ message: "Invalid credentials", status: 400, success: false });
    }

    const token = createToken(admin._id);
    return res.json({
      message: "Admin logged in successfully",
      status: 200,
      success: true,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.json({ message: error.message, status: 500, success: false });
  }
};

const createAdmin = async (req, res) => {
  try {
    const { email, password, name, role } = req.body;
    if (!email || !password || !name) {
      return res.json({ message: "All fields are required", status: 400, success: false });
    }

    if (role !== "admin") {
      return registerUser(req, res);
    }

    const exist = await adminModel.findOne({ email });

    if (exist) {
      return res.json({ message: "Admin already exists", success: false, status: 400 });
    }

    if (password.length < 6) {
      return res.json({
        message: "Password must be at least 6 characters long",
        success: false,
        status: 400,
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newAdmin = new adminModel({
      name,
      email,
      password: hashedPassword,
    });

    await newAdmin.save();
    const token = createToken(newAdmin._id);

    return res.json({
      message: "Admin created successfully",
      status: 201,
      success: true,
      data: { ...newAdmin._doc, password: null },
      token,
    });
  } catch (error) {
    console.log(error);
    return res.json({ message: error.message, status: 500, success: false });
  }
};

const getAdminAndUsers = async (req, res) => {
  try {
    const admins = await adminModel.find().select("-password");
    const users = await userModel.find().select("-password");

    if (!admins || !users) {
      return res.json({ message: "No admins or users found", status: 404, success: false });
    }

    const allUsers = [];
    users.forEach((user) => {
      allUsers.push({ ...user._doc, isAdmin: false });
    });
    admins.forEach((admin) => {
      allUsers.push({ ...admin._doc, isAdmin: true });
    });

    return res.json({
      message: "Users fetched successfully",
      status: 200,
      success: true,
      allUsers,
    });
  } catch (error) {
    console.log(error);
    return { message: error.message, status: 500, success: false };
  }
};

const removeUser = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      return res.json({ message: "User ID is required", status: 400, success: false });
    }

    const user = await userModel.findByIdAndDelete(userId);
    const admin = await adminModel.findByIdAndDelete(userId);

    if (!user && !admin) {
      return res.json({ message: "User not found", status: 404, success: false });
    }

    return res.json({
      message: "User removed successfully",
      status: 200,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.json({ message: error.message, status: 500, success: false });
  }
};

export { adminLogin, createAdmin, getAdminAndUsers, removeUser };
