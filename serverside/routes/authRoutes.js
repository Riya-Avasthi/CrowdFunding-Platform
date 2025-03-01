const express = require("express");
const { registerUser, loginUser, getUser } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// User Registration
router.post("/register", registerUser);

// User Login
router.post("/login", loginUser);

// Get User Details (Protected Route)
router.get("/user", authMiddleware, getUser);

module.exports = router;
