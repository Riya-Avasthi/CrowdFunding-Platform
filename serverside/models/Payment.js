const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  campaignId: { type: mongoose.Schema.Types.ObjectId, ref: "Campaign", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  amount: { type: Number, required: true },
  transactionId: { type: String, required: true },
  status: { type: String, enum: ["Success", "Failed"], default: "Success" },
}, { timestamps: true });

module.exports = mongoose.model("Payment", paymentSchema);

