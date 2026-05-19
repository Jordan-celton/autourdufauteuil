import React, { useState, useEffect } from "react";
import "../../styles/Home/Hero.css";

// Import de vos images
import img1 from "../../assets/Home/aurore_hero.jpg";
import img2 from "../../assets/Home/31-Autourdufauteuil-Aurore_PHOTOS_0009 1.png";
import img3 from "../../assets/Salon/31-Autourdufauteuil-Aurore_PHOTOS_0059 1.png";

const images = [img1, img2, img3];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gestion du défilement automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-hero-inner">
      {/* Background Slideshow */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Contenu Texte & CTA */}
      <div className="hero-content-wrapper">
        <div className="hero-subtitle">
          <h1>COLORATION VÉGÉTALE, COUPE VISAGISTE, BALAYAGE</h1>
          <span className="hero-script handwritten-loop">
            {"Autour du Fauteuil".split("").map((char, i) => (
              <span key={i} style={{ animationDelay: `${i * 0.15}s` }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        </div>
        <div className="hero-cta">
          <a href="/rendez-vous" className="btn">
            PRENDRE RENDEZ-VOUS
          </a>
        </div>
      </div>

      {/* Indicateurs ondulés (Dots) */}
      <div className="hero-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot-wave ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            title={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
