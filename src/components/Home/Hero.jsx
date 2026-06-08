import React, { useState, useEffect, useCallback } from "react";
import "../../styles/Home/Hero.css";

// Import de vos images
import img1 from "../../assets/Home/31-Autourdufauteuil-Aurore_PHOTOS_0003.webp";
import img2 from "../../assets/Home/31-Autourdufauteuil-Aurore_PHOTOS_0068.webp";
import img3 from "../../assets/Home/31-Autourdufauteuil-Aurore_PHOTOS_0024.webp";
import img4 from "../../assets/Home/31-Autourdufauteuil-Aurore_PHOTOS_0009.webp";

const images = [img1, img2, img3, img4];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 1. Reset de l'intervalle lors d'un clic manuel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]); // Se réinitialise si l'index change

  // 2. Optimisation du clic sur les dots
  const handleDotClick = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  return (
    <section
      className="container-hero-inner"
      aria-label="Présentation du salon"
    >
      {/* Background Slideshow */}
      <div className="hero-slides-container" aria-hidden="true">
        {images.map((img, index) => (
          <div
            key={img} // Utilisation de l'import de l'image comme clé unique
            className={`hero-slide ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Contenu Texte & CTA */}
      <div className="hero-content-wrapper">
        <header className="hero-subtitle">
          <h1>COLORATION VÉGÉTALE, COUPE VISAGISTE, BALAYAGE</h1>
          {/* aria-label pour éviter que les lecteurs d'écran lisent lettre par lettre */}
          <span
            className="hero-script handwritten-loop"
            aria-label="Autour du Fauteuil"
          >
            {"Autour du Fauteuil".split("").map((char, i) => (
              <span
                key={i}
                style={{ animationDelay: `${i * 0.15}s` }}
                aria-hidden="true"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        </header>
        <div className="hero-cta">
          <a href="/rendez-vous" className="btn">
            PRENDRE RENDEZ-VOUS
          </a>
        </div>
      </div>

      {/* Indicateurs ondulés (Dots) réaccessibles */}
      <nav className="hero-dots" aria-label="Navigation du diaporama">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`dot-wave ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Afficher la diapositive ${index + 1}`}
            aria-current={index === currentIndex ? "true" : "false"}
          />
        ))}
      </nav>
    </section>
  );
};

export default Hero;
