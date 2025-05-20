import React from "react";
import { Link } from "react-router-dom";
import "../styles/ContentBlock.css";

const ContentBlock = () => {
    const buttons = [
        { label: "About", path: "/about" },
        { label: "Portfolio", path: "/portfolio" },
        { label: "Blog", path: "/blog" },
        { label: "Resume", path: "/resume" },
        { label: "Contact", path: "/contact" },
    ];

    return (
        <section className="content-blocks">
            <div className="button-grid">
                {buttons.map((btn) => (
                    <Link key={btn.label} to={btn.path} className="button-card" >
                       <button>{btn.label}</button> 
                    </Link>
                ))}
            </div>
        </section>    
    );
};

export default ContentBlock;