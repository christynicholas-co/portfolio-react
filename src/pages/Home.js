import React from "react";
import Navbar from "../components/home/Navbar";
import HeroSection from "../components/home/HeroSection";
import ContentBlock from "../components/home/ContentBlock";
import Copyright from "../components/common/Copyright";

import "../styles/home/Home.css";

const Home = () => {
  return (
    <div className="home-wrapper">
      
      <div className="background-layer">
        <p className="background-footer">©Bytes & Brushes 2025</p>
      </div>

      <div className="transparency-layer">
        <div className="section-container top-section">
          <Navbar />
        </div>

        <div className="section-container middle-section">
          <div className="divider" />
          <ContentBlock />
          <div className="divider" />
        </div>

        <div className="section-container bottom-section">
        </div>
      </div>

      <div className="hero-layer">
        <HeroSection />
      </div>
    </div>
  );
};
    

export default Home;