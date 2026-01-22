import React from "react";
import "../styles/components/HeroSection.css";

const HeroSection = ({ image, subtitle, title }) => {
  return (
    <div className="hero-section">
      <img src={image} alt={title} className="hero-section__image" />

      <div className="hero-section__overlay">
        {subtitle && <span className="hero-section__subtitle">{subtitle}</span>}

        {title && <span className="hero-section__title">{title}</span>}
      </div>
    </div>
  );
};

export default HeroSection;
