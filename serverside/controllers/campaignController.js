
const Campaign = require("../models/Campaign");

exports.createCampaign = async (req, res) => {
  const { title, description, goalAmount, image } = req.body;

  try {
    const campaign = await Campaign.create({
      title,
      description,
      goalAmount,
      image,
      createdBy: req.user._id, // User ID from JWT authentication
    });

    res.status(201).json(campaign);
  } catch (error) {
    res.status(500).json({ error: "Failed to create campaign" });
  }
};


exports.getAllCampaigns = async (req, res) => {
    try {
      const campaigns = await Campaign.find().populate("createdBy", "name email");
      res.status(200).json(campaigns);
    } catch (error) {
      res.status(500).json({ error: "Error fetching campaigns" });
    }
  };
  
  exports.getCampaignById = async (req, res) => {
    try {
      const campaign = await Campaign.findById(req.params.id);
      if (!campaign) return res.status(404).json({ message: "Campaign not found" });
  
      res.status(200).json(campaign);
    } catch (error) {
      res.status(500).json({ error: "Error fetching campaign details" });
    }
  };
  