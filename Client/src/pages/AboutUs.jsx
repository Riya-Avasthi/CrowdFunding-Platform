import React from "react";
import "./AboutUs.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <div className="about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <img
          src="..\src\assets\aboutusteam.webp"
          alt="About Us"
          className="about-hero-img"
        />
        <div className="about-hero-overlay">
          <h1>About Us</h1>
        </div>
      </div>

      {/* Vision Section */}
      <div className="about-section about-vision">
        <div className="about-section-image">
          <img
            src="..\src\assets\vision.webp"
            alt="Vision"
          />
        </div>
        <div className="about-section-content">
          <h2>Our Vision</h2>
          <p>
            Our vision is to create a crowdfunding platform that connects 
            innovators, entrepreneurs, and social change-makers with the 
            right investors and donors. We believe in empowering ideas 
            that shape the future.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="about-section about-mission">
        <div className="about-section-content">
          <h2>Our Mission</h2>
          <p>
            Our mission is to simplify fundraising for startups, social 
            causes, and innovative projects by leveraging technology. We 
            aim to bridge the gap between ideas and funding, ensuring a 
            seamless experience for both creators and backers.
          </p>
        </div>
        <div className="about-section-image">
          <img
            src="..\src\assets\mission.jpg"
            alt="Mission"
          />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;
