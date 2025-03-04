import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({ success: false, message: "Unauthorized Access", status: 401 });
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = decode.id;

    next();
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message, status: 401 });
  }
};

export default authUser;
