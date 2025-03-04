import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.json({ message: "Unauthorized Access", status: 401, success: false });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log(decoded);
    if (decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({ message: "Unauthorized Access", status: 401, success: false });
    }

    next();
  } catch (error) {
    console.log(error);
    return res.json({ message: error.message, status: 500, success: false });
  }
};

export default adminAuth;
