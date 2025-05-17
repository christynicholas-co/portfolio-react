import React from "react";
import "../styles/Header.css";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header">
      <h1>Bytes & Brushes</h1> {/*header branding*/}
      <Navbar /> {/* Navbar included here*/}
    </header>
  );
};

export default Header;
