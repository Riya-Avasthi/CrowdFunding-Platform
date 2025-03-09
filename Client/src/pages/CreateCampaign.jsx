import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CreateCampaign.css";
import axios from "axios";
const CreateCampaign = () => {
  const [campaignData, setCampaignData] = useState({
    title: "",
    description: "",
    goalAmount: "",
    raisedAmount: "",
    image: "",
    status: "PENDING",
    priority: "LOW",
    startDate: "",
    endDate: "",
    organizer: {
      name: "",
      location: "",
      category: "",
      profilePic: "",
      link: "",
    },
});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setCampaignData({ ...campaignData, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Campaign Created:", campaignData);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/campaigns/create", campaignData, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`  // Assuming token is stored in localStorage
        }
    });
    
      console.log("Campaign Created:", response.data);
      alert("Campaign successfully created!");
    } catch (error) {
      console.error("Error creating campaign:", error);
      alert("Failed to create campaign.");
    }
  };

  return (
    <div className="main-container">
      {/* Sidebar Navigation */}
      <div className="sidebar-create">
        <div className="logo">FundMe</div>
        <nav>
          <ul>
            <li>
              <Link to="/">🏠 Home</Link>
            </li>
            <li>
              <Link to="/profile">👤 Profile</Link>
            </li>
            <li>
              <Link to="/campaign">📢 Campaigns</Link>
            </li>
            <li>
              <Link to="/about">ℹ️ About Us</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Campaign Form Container */}
      <div className="campaign-container">
        <h2>Create Campaign</h2>
        <form className="campaign-form" onSubmit={handleSubmit}>
          {/* Name */}
          <label>Name </label>
          <input
            type="text"
            name="name"
            placeholder="Your campaign title"
            value={campaignData.name}
            onChange={handleChange}
            required
          />

          {/* Goals */}
          <label>Goals </label>
          <input
            type="text"
            name="goals"
            placeholder="Your campaign goals"
            value={campaignData.goals}
            onChange={handleChange}
            required
          />

          {/* Campaign Type */}
          <label>Campaign Type </label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="type"
                value="FUNDRAISING"
                checked={campaignData.type === "FUNDRAISING"}
                onChange={handleChange}
              />
              Fundraising
            </label>
            <label>
              <input
                type="radio"
                name="type"
                value="CROWDFUNDING"
                checked={campaignData.type === "CROWDFUNDING"}
                onChange={handleChange}
              />
              Crowdfunding
            </label>
          </div>

          {/* Amount */}
          <label>Amount </label>
          <input
            type="number"
            name="amount"
            placeholder="Fund to be raised"
            value={campaignData.amount}
            onChange={handleChange}
            required
          />

          {/* Campaign Status */}
          <label>Campaign Status </label>
          <div className="radio-group">
            <label className="status pending">
              <input
                type="radio"
                name="status"
                value="PENDING"
                checked={campaignData.status === "PENDING"}
                onChange={handleChange}
              />
              Pending
            </label>
            <label className="status ongoing">
              <input
                type="radio"
                name="status"
                value="ONGOING"
                checked={campaignData.status === "ONGOING"}
                onChange={handleChange}
              />
              Ongoing
            </label>
            <label className="status end">
              <input
                type="radio"
                name="status"
                value="END"
                checked={campaignData.status === "END"}
                onChange={handleChange}
              />
              End
            </label>
          </div>

          {/* Campaign Priority */}
          <label>Campaign Priority *</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="priority"
                value="LOW"
                checked={campaignData.priority === "LOW"}
                onChange={handleChange}
              />
              Low
            </label>
            <label>
              <input
                type="radio"
                name="priority"
                value="MEDIUM"
                checked={campaignData.priority === "MEDIUM"}
                onChange={handleChange}
              />
              Medium
            </label>
            <label>
              <input
                type="radio"
                name="priority"
                value="HIGH"
                checked={campaignData.priority === "HIGH"}
                onChange={handleChange}
              />
              High
            </label>
          </div>

          {/* Start & End Date */}
          <div className="date-group">
            <div>
              <label>Start Date *</label>
              <input
                type="date"
                name="startDate"
                value={campaignData.startDate}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>End Date *</label>
              <input
                type="date"
                name="endDate"
                value={campaignData.endDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Description */}
          <label>Description</label>
          <textarea
            name="description"
            placeholder="Your campaign description"
            value={campaignData.description}
            onChange={handleChange}
          ></textarea>

          <label>Documents for Verification </label>
          <input
            type="file"
            name="file"
            value={campaignData.file}
            onChange={handleChange}
            required
          />

          {/* Submit Button */}
          <button type="submit" className="create-btn">
            Create Campaign
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCampaign;
