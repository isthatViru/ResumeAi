
const jwt = require("jsonwebtoken");
const tokenBlackList = require("../models/blackListSchema");


const verifyToken = async (req, res, next) => {
  try {
    let token = null;

    // Prefer cookie if present
    if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
    } else if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token is missing",
      });
    }

    // Check if token is blacklisted
    const blacklisted = await tokenBlackList.findOne({ token });
    if (blacklisted) {
      return res.status(401).json({
        success: false,
        message: "Token is blacklisted. Please login again.",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
      error: error.message,
    });
  }
};

module.exports = verifyToken;