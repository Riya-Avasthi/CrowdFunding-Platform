const razorpay = require("../config/razorpay.js");
const Payment = require("../models/Payment.js");
const Campaign = require("../models/Campaign.js");
const User = require("../models/User.js");
const sendEmail = require("../utils/sendEmail.js");

// 🟢 Initiate Payment
const initiatePayment = async (req, res) => {
  const { amount, campaignId, userId } = req.body;

  try {
    const options = {
      amount: amount * 100, // Amount in paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: "Error initiating payment" });
  }
};

// 🟢 Verify Payment and Send Email
const verifyPayment = async (req, res) => {
  const { campaignId, amount, userId, transactionId } = req.body;

  try {
    const donor = await User.findById(userId);
    if (!donor || donor.role !== "fund_donor") {
      return res.status(400).json({ error: "Only fund donors can make donations" });
    }

    // Save Payment
    const payment = await Payment.create({ campaignId, userId, amount, transactionId, status: "Success" });

    // Update Campaign Fund Raised
    await Campaign.findByIdAndUpdate(campaignId, { $inc: { raisedAmount: amount } });

    // Send Confirmation Email to Donor
    await sendEmail(donor.email, "Payment Successful", `Thank you for your contribution of ₹${amount} to the campaign.`);

    res.status(200).json({ message: "Payment successful", payment });

  } catch (error) {
    res.status(500).json({ error: "Error processing payment" });
  }
};

module.exports = { initiatePayment, verifyPayment };
