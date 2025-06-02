import React from "react";
import Navbar from "./Navbar"; // This should be the template navbar
import FooterTemplate from "./FooterTemplate"; // This includes Copyright
import "../../styles/template/PageTemplate.css"; // Scoped template styles

const PageTemplate = ({ children }) => {
  return (
    <div className="template-container">
      <header className="template-header">
        <Navbar />
      </header>

      <main className="template-content">
        {children}
      </main>
        <FooterTemplate />
    </div>
  );
};

export default PageTemplate;
