import React, { useState, useEffect, useCallback } from "react";
import "../../styles/Home/Hero.css";

import img1 from "../../assets/Home/31-Autourdufauteuil-Aurore_PHOTOS_0009.webp";
import img2 from "../../assets/Home/31-Autourdufauteuil-Aurore_PHOTOS_0068.webp";
import img3 from "../../assets/Home/31-Autourdufauteuil-Aurore_PHOTOS_0024.webp";
import img4 from "../../assets/Home/31-Autourdufauteuil-Aurore_PHOTOS_0003.webp";

const images = [img1, img2, img3, img4];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // autoplay carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // preload intelligent (idle time browser)
  useEffect(() => {
    const preload = () => {
      images.slice(1).forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    if ("requestIdleCallback" in window) {
      requestIdleCallback(preload);
    } else {
      setTimeout(preload, 1500);
    }
  }, []);

  const handleDotClick = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  return (
    <section
      className="container-hero-inner"
      aria-label="Présentation du salon"
    >
      <div className="hero-slides-container" aria-hidden="true">
        {images.map((img, index) => (
          <img
            key={img}
            src={img}
            alt=""
            width="1920"
            height="1080"
            className={`hero-slide ${index === currentIndex ? "active" : ""}`}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "low"}
            decoding="async"
          />
        ))}
      </div>

      <div className="hero-content-wrapper">
        <header className="hero-subtitle">
          <h1>COLORATION VÉGÉTALE, COUPE VISAGISTE, BALAYAGE</h1>

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

      <nav className="hero-dots" aria-label="Navigation du diaporama">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`dot-wave ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Afficher la diapositive ${index + 1}`}
            aria-current={index === currentIndex}
          />
        ))}
      </nav>
    </section>
  );
};

export default Hero;
