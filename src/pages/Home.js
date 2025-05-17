import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/HeroSection.css";
import "../styles/Navbar.css";
import "../styles/ContentBlocks.css";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <main>
        <h1>Welcome to My Portfolio</h1>
        <p>Discover my work and experience in web development and design.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
