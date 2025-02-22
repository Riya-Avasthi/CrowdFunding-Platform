import React, { useState } from "react";
import "./Campaign.css";
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';
const Campaign = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTiming, setSelectedTiming] = useState("All");

  const categories = ["All", "Technology", "Social Project", "Kids and Family"];
  const campaignTimings = ["All", "Launching", "Ongoing", "Ending Soon"];

  const campaigns = [
    {
      id: 1,
      title: "Team Red Cross",
      description:
        "The money raised will be dedicated to going towards helping people during their greatest time of need.",
      category: "Social Project",
      timing: "Ongoing",
      goal: "500,000 USD",
      progress: 70,
      daysLeft: 45,
      image: "https://source.unsplash.com/600x400/?helping,community",
    },
    {
      id: 2,
      title: "Tech for Education",
      description:
        "Raising funds to provide technology access to underprivileged students.",
      category: "Technology",
      timing: "Launching",
      goal: "250,000 USD",
      progress: 40,
      daysLeft: 30,
      image: "https://source.unsplash.com/600x400/?technology,education",
    },
    {
      id: 3,
      title: "Save the Kids",
      description: "Help provide food and shelter to homeless children.",
      category: "Kids and Family",
      timing: "Ending Soon",
      goal: "1,000,000 USD",
      progress: 90,
      daysLeft: 5,
      image: "https://source.unsplash.com/600x400/?kids,care",
    },
    {
      id: 4,
      title: "StartUp Fund",
      description: "Help Businesses to grow by funding",
      category: "Businesses",
      timing: "Launching",
      goal: "25,000,000 USD",
      progress: 90,
      daysLeft: 5,
      image: "https://source.unsplash.com/600x400/?kids,care",
    },
  ];

  // Filtering logic
  const filteredCampaigns = campaigns.filter((campaign) => {
    return (
      (selectedCategory === "All" || campaign.category === selectedCategory) &&
      (selectedTiming === "All" || campaign.timing === selectedTiming) &&
      (campaign.title.toLowerCase().includes(search.toLowerCase()) ||
        campaign.description.toLowerCase().includes(search.toLowerCase()))
    );
  });

  const navigate = useNavigate();
  return (
    <>
    <Navbar/>
    <div className="campaigns-container">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="🔍 Search campaigns"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="content">
        {/* Sidebar */}
        <div className="sidebar">
          <h3>Filters</h3>

          {/* Category Filter */}
          <h4>Category</h4>
          <ul>
            {categories.map((cat) => (
              <li
                key={cat}
                className={selectedCategory === cat ? "active" : ""}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>

          {/* Campaign Timing Filter */}
          <h4>Campaign Timing</h4>
          <ul>
            {campaignTimings.map((time) => (
              <li
                key={time}
                className={selectedTiming === time ? "active" : ""}
                onClick={() => setSelectedTiming(time)}
              >
                {time}
              </li>
            ))}
          </ul>
        </div>

        {/* Campaign List */}
        <div className="campaign-list">
          {filteredCampaigns.length > 0 ? (
            filteredCampaigns.map((campaign) => (
              <div key={campaign.id} className="campaign-card">
                <img src={campaign.image} alt={campaign.title} />
                <div className="campaign-info">
                  <span className="funding">FUNDING</span>
                  <h3>{campaign.title}</h3>
                  <p>{campaign.description}</p>
                  <span className="category">{campaign.category}</span>
                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{ width: `${campaign.progress}%` }}
                    ></div>
                  </div>
                  <span className="days-left">{campaign.daysLeft} days left</span>
                  <button className="contribute-btn" onClick={() => navigate('/campaigndetails')}>Contribute</button>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">No campaigns found</p>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default Campaign;
