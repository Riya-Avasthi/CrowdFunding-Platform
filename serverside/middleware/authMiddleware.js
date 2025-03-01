const jwt = require("jsonwebtoken");
const User = require("../models/User.js");
const dotenv = require("dotenv");

dotenv.config();

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Extract token after "Bearer"
  if (!token) return res.status(401).json({ error: "Access denied: No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);

    console.log("Authenticated User:", req.user); // Debugging Log

    if (!req.user) return res.status(401).json({ error: "Invalid token: User not found" });

    next();
  } catch (error) {
    console.error("Token Verification Error:", error); // Log token errors
    res.status(400).json({ error: "Invalid token" });
  }
};

module.exports = authMiddleware;
