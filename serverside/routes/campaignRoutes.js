const express = require("express");
const { createCampaign, getAllCampaigns } = require("../controllers/campaignController");

const authMiddleware = require("../middleware/authMiddleware.js");

const router = express.Router();

// Restrict access to fund raisers only
router.post("/create", authMiddleware, async (req, res) => {
    if (req.user.role !== "fund_raiser") {
      return res.status(403).json({ error: "Access Denied: Only fund raisers can create campaigns" });
    }
    createCampaign(req, res);
  });

router.get("/all", getAllCampaigns);

module.exports = router;
