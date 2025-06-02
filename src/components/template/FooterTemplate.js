// src/components/template/FooterTemplate.js
import React from "react";
import "../../styles/template/FooterTemplate.css";

const FooterTemplate = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-section">
          <p>Email: christy@bytesandbrushes.com</p>
          <p>Location: Austin, TX</p>
      </div>

      <div className="footer-section">
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <ul>
          <li><a href="https://www.linkedin.com/in/christynicholas/" target="_blank">LinkedIn</a></li>
          <li><a href="https://github.com/christynicholas-co/portfolio-react" target="_blank">GitHub</a></li>
        </ul>
      </div>
    </div>

    <div className="footer-copyright">
        &copy; 2025 Bytes & Brushes
    </div>
    </footer>
  );
};

export default FooterTemplate;
