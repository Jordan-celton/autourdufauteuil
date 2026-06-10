import React, { useMemo } from "react";
import "../styles/components/HeroSection.css";

const HeroSection = ({ image, subtitle, title, decorativeText }) => {
  // 🔥 évite recalcul inutile du split à chaque render
  const animatedSubtitle = useMemo(() => {
    if (!subtitle) return null;

    return subtitle.split("").map((char, i) => (
      <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  }, [subtitle]);

  return (
    <section
      className="hero-section"
      aria-label={title || "Section principale"}
    >
      {/* IMAGE HERO (SEO + PERF) */}
      <img
        src={image}
        alt={title || "Image du hero"}
        className="hero-section__image"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />

      {/* VOILE */}
      <div className="hero-section__shade" aria-hidden="true" />

      {/* TEXTE ARRIÈRE-PLAN */}
      {decorativeText && (
        <span className="hero-section__background-text" aria-hidden="true">
          {decorativeText}
        </span>
      )}

      {/* CONTENU */}
      <div className="hero-section__overlay">
        {subtitle && (
          <span
            className="hero-section__subtitle handwritten-loop"
            aria-label={subtitle}
          >
            {animatedSubtitle}
          </span>
        )}

        {title && <h1 className="hero-section__title">{title}</h1>}
      </div>
    </section>
  );
};

export default HeroSection;
