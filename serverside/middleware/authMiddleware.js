
const jwt = require("jsonwebtoken");
const User = require("../models/User.js");
const dotenv = require("dotenv");

dotenv.config();

const authMiddleware = async (req, res, next) => {
    const authHeader = req.header("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        console.error("❌ Token Error: Missing or Invalid Token Format");
        return res.status(401).json({ error: "Access denied: No token provided" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);

        if (!user) {
            console.error("❌ Token Error: User Not Found in Database");
            return res.status(401).json({ error: "Invalid token: User not found" });
        }

        req.user = user;
        console.log("✅ Authenticated User:", req.user);

        next();
    } catch (error) {
        console.error("❌ Token Verification Error:", error.message);
        res.status(403).json({ error: "Invalid token or token expired" });
    }
};

module.exports = authMiddleware;
