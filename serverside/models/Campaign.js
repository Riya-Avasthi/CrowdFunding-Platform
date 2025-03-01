const mongoose = require("mongoose");

const campaignSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  goalAmount: { type: Number, required: true },
  raisedAmount: { type: Number, default: 0 },
  image: { type: String },
  status: {type: String},
  priority: {type: String},
  startDate: {type: Date},
  endDate: {type: Date},
  organizer: {
    name: { type: String, required: true },
    location: { type: String, required: true },
    category: { type: String, required: true },
    profilePic: { type: String, required: true },
    link: { type: String, required: true },
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

module.exports = mongoose.model("Campaign", campaignSchema);
