const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db.js");
const campaignRoutes = require("./routes/campaignRoutes.js");
const paymentRoutes = require("./routes/paymentRoutes.js");
const authRoutes = require("./routes/authRoutes");
const Razorpay = require("razorpay");

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});


// API Routes
app.use("/api/campaigns", campaignRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Crowdfunding Backend API 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
