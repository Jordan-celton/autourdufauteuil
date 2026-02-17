import React from "react";
import "../styles/components/HeroSection.css";

const HeroSection = ({ image, subtitle, title, decorativeText }) => {
  return (
    <section className="hero-section">
      <img src={image} alt={title} className="hero-section__image" />

      {/* Voile sombre */}
      <div className="hero-section__shade" />

      {/* Texte décoratif arrière-plan (ex: "Le Salon") */}
      {decorativeText && (
        <span className="hero-section__background-text">{decorativeText}</span>
      )}

      {/* Contenu principal */}
      <div className="hero-section__overlay">
        {subtitle && (
          <span className="hero-section__subtitle handwritten-loop">
            {subtitle.split("").map((char, i) => (
              <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        )}

        {title && <h1 className="hero-section__title">{title}</h1>}
      </div>
    </section>
  );
};

export default HeroSection;
