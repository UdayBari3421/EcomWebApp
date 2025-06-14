import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET);

// Route for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ message: "User not found", status: 400, success: false });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ message: "Invalid credentials", status: 400, success: false });
    }

    const token = createToken(user._id);
    return res.json({
      message: "User logged in successfully",
      status: 200,
      success: true,
      data: { ...user._doc, password: null },
      token,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      message: error.message,
      status: 500,
      success: false,
    });
  }
};

// Route for user register
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exists = await userModel.findOne({ email });

    if (exists) {
      return res.json({ message: "User already exists", status: 400, sucess: false });
    }

    if (!validator.isEmail(email)) {
      return res.json({ message: "Please enter valid email", status: 400, sucess: false });
    }

    if (password.length < 8) {
      return res.json({ message: "Please enter strong a password", status: 400, sucess: false });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);

    return res.json({
      message: "User registered successfully",
      status: 200,
      success: true,
      data: user,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      message: error.message,
      status: 500,
      success: false,
    });
  }
};

const updateProfile = async (req, res) => {
  try {
    const { name, email, oldpassword, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ message: "User not found", status: 400, success: false });
    }

    const isMatch = await bcrypt.compare(oldpassword, user.password);
    if (!isMatch) {
      return res.json({ message: "Invalid credentials", status: 400, success: false });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const updatedUser = await userModel
      .findOneAndUpdate({ email }, { name, email, password: hashedPassword }, { new: true })
      .select("-password");

    return res.json({
      message: "User updated successfully",
      status: 200,
      success: true,
      data: updatedUser,
    });
  } catch (error) {
    console.log(error);
    return res.json({ message: error.message, status: 500, success: false });
  }
};

export { loginUser, registerUser, updateProfile };
