import React, { useState } from "react";
import "./Campaign.css";
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';
const Campaign = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTiming, setSelectedTiming] = useState("All");
  const [campaigns, setCampaigns] = useState([]);  // State for campaigns
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);  // Error handling

  const categories = ["All", "Technology", "Social Project", "Kids and Family"];
  const campaignTimings = ["All", "Launching", "Ongoing", "Ending Soon"];

  const navigate = useNavigate();
  // Fetch campaigns from backend
  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
          const response = await fetch("http://localhost:5000/api/campaigns/all", {
          method: "GET",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
      });
      
 // Replace with your actual backend API URL
        if (!response.ok) {
          throw new Error("Failed to fetch campaigns");
        }
        const data = await response.json();
        setCampaigns(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  // Filtering logic
  const filteredCampaigns = campaigns.filter((campaign) => {
    return (
      (selectedCategory === "All" || campaign.category === selectedCategory) &&
      (selectedTiming === "All" || campaign.timing === selectedTiming) &&
      (campaign.title.toLowerCase().includes(search.toLowerCase()) ||
        campaign.description.toLowerCase().includes(search.toLowerCase()))
    );
  });

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
