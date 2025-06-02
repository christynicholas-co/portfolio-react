import React from "react";
import { Link } from "react-router-dom";
import "../../styles/template/Navbar.css";

const Navbar = () => {
  return (
    <nav className="template-navbar">
      <ul className="template-navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/resume">Resume</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
