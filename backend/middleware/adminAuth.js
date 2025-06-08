import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.json({ message: "Unauthorized Access", status: 401, success: false });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded || decoded.userType !== "admin") {
      return res.json({ message: "Unauthorized Access", status: 401, success: false });
    }

    req.userId = decoded.id;
    next();
  } catch (error) {
    console.log(error);
    return res.json({ message: error.message, status: 500, success: false });
  }
};

export default adminAuth;
