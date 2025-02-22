import "./CampaignDetails.css";
import React from "react";
import { useParams } from "react-router-dom";
import "./CampaignDetails.css"; // Import the CSS file
import Navbar from "../components/Navbar";
const sampleCampaign = {
  id: "sample",
  name: "The John Anthony West Project",
  goals: "Raise $155,000 for medical treatment.",
  type: "FUNDRAISING",
  amount: "$117,739 Raised",
  status: "PENDING",
  priority: "HIGH",
  startDate: "2025-02-01",
  endDate: "2025-03-31",
  description:
    "The Emmy award-winning Egyptologist who took on the 'Quackademics' and conventional dating of The Sphinx is now taking on Cancer.",
  contributors: "1,196 donors",
  file: "https://source.unsplash.com/800x400/?egypt,history",
  organizer: {
    name: "Clay Roup",
    location: "Saugerties, NY",
    category: "Medical & Health",
    profilePic: "https://via.placeholder.com/50",
    link: "https://fundly.com/john-anthony-west-project",
  },
};

const CampaignDetails = ({ campaigns = [] }) => {
  const { id } = useParams();
  const campaign = campaigns.find((c) => c.id === id) || sampleCampaign;

  return (
    <>
    <Navbar/>
    <div className="campaign-container">
      <h1 className="campaign-title">{campaign.name}</h1>

      <div className="campaign-image">
        <img src={campaign.file} alt="Campaign" />
      </div>

      <div className="campaign-actions">
        <button className="donate-button">DONATE NOW</button>
        {/* <button className="share-button">SHARE</button> */}
      </div>

      <div className="campaign-stats">
        <p className="contributors">{campaign.contributors}</p>
        <p className="amount">{campaign.amount}</p>
        <p className="goal">Goal: {campaign.goals}</p>
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: "75%" }}></div>
      </div>

      <div className="campaign-stats">
        <p className="contributors">{campaign.priority}</p>
        <p className="goal">Start Date: {campaign.startDate} End Date: {campaign.endDate}</p>
      </div>

      <div className="campaign-organizer">
        <img src={campaign.organizer.profilePic} alt="Organizer" />
        <div>
          <p className="organizer-name">{campaign.organizer.name}</p>
          <p className="organizer-info">{campaign.organizer.location}</p>
          <p className="organizer-category">{campaign.organizer.category}</p>
          <a
            href={campaign.organizer.link}
            target="_blank"
            rel="noopener noreferrer"
            className="campaign-link"
          >
            Visit Campaign Page
          </a>
        </div>
      </div>

      <p className="campaign-description">{campaign.description}</p>

      <div className="social-share">
        <button className="share-btn">SHARE</button>
        <button className="tweet-btn">TWEET</button>
        <button className="email-btn">EMAIL</button>
      </div>
    </div>
    </>
  );
};

export default CampaignDetails;
