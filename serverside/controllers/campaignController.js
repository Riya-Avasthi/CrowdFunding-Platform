
const Campaign = require("../models/Campaign");

// 🟢 Create Campaign
exports.createCampaign = async (req, res) => {
  const {
      title,
      description,
      goalAmount,
      raisedAmount,
      image,
      status,
      priority,
      startDate,
      endDate,
      organizer
  } = req.body;

  try {
      if (!req.user) {
          console.error("❌ Request Error: `req.user` is undefined");
          return res.status(403).json({ error: "Unauthorized: No user information found" });
      }

      console.log("✅ Creating Campaign for:", req.user.name);

      const newCampaign = new Campaign({
          title,
          description,
          goalAmount,
          raisedAmount: raisedAmount || 0,
          image: image || "https://example.com/default-image.jpg",
          status: status || "Pending",
          priority: priority || "Low",
          startDate,
          endDate,
          organizer,
          createdBy: req.user._id
      });

      await newCampaign.save();

      res.status(201).json({
          message: "✅ Campaign created successfully",
          campaign: newCampaign
      });

  } catch (error) {
      console.error("❌ Error creating campaign:", error.message);
      console.error("Stack Trace:", error.stack);  // Detailed error trace
      res.status(500).json({ error: "Failed to create campaign", details: error.message });
  }
};


// 🟢 Get All Campaigns
exports.getAllCampaigns = async (req, res) => {
    try {
        const campaigns = await Campaign.find().populate("createdBy", "name email");
        res.status(200).json(campaigns);
    } catch (error) {
        console.error("❌ Error fetching campaigns:", error.message);
        res.status(500).json({ error: "Error fetching campaigns" });
    }
};

// 🟢 Get Campaign by ID
exports.getCampaignById = async (req, res) => {
    try {
        const campaign = await Campaign.findById(req.params.id);
        if (!campaign) {
            return res.status(404).json({ error: "Campaign not found" });
        }

        res.status(200).json(campaign);
    } catch (error) {
        console.error("❌ Error fetching campaign details:", error.message);
        res.status(500).json({ error: "Error fetching campaign details" });
    }
};

  
