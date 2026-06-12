import React, { useState, useEffect, useCallback } from "react";
import "../../styles/Realisations/Gallery.css";

import img1 from "../../assets/Realisation/gallery1.webp";
import img2 from "../../assets/Realisation/gallery2.webp";
import img3 from "../../assets/Realisation/gallery3.webp";
import img4 from "../../assets/Realisation/gallery4.webp";
import img5 from "../../assets/Realisation/gallery5.webp";
import img6 from "../../assets/Realisation/gallery6.webp";
import img7 from "../../assets/Realisation/gallery7.webp";
import img8 from "../../assets/Realisation/gallery8.webp";

const items = [
  {
    type: "image",
    src: img1,
    alt: "Coloration rousse éclatante",
    gridClass: "card-large",
  },
  {
    type: "image",
    src: img2,
    alt: "Balayage blond lumineux",
    gridClass: "card-standard",
  },
  {
    type: "image",
    src: img3,
    alt: "Coupe moderne et coloration",
    gridClass: "card-tall",
  },
  {
    type: "image",
    src: img4,
    alt: "Coiffure naturelle élégante",
    gridClass: "card-standard",
  },
  {
    type: "image",
    src: img5,
    alt: "Coupe bouclée et volumineuse",
    gridClass: "card-standard",
  },
  {
    type: "image",
    src: img6,
    alt: "Soin capillaire naturel",
    gridClass: "card-standard",
  },
  {
    type: "image",
    src: img7,
    alt: "Coupe courte stylisée",
    gridClass: "card-standard",
  },
  {
    type: "image",
    src: img8,
    alt: "Cheveux lisses et brillants",
    gridClass: "card-tall",
  },
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  const closeLightbox = useCallback(() => {
    setActiveImage(null);
  }, []);

  const openLightbox = useCallback((item) => {
    setActiveImage(item);
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") closeLightbox();
    },
    [closeLightbox],
  );

  useEffect(() => {
    if (!activeImage) return;

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeImage, handleKeyDown]);

  return (
    <section className="gallery-realisations">
      <header className="gallery-header">
        <span className="gallery-subtitle">Portfolio</span>
        <h2 className="gallery-title">NOTRE SAVOIR-FAIRE</h2>
        <p className="gallery-realisations-intro">
          Découvrez nos réalisations.
        </p>
      </header>

      <div className="gallery-realisations-grid">
        {items.map((item) => (
          <div
            key={item.src}
            className={`gallery-grid-wrapper ${item.gridClass}`}
          >
            <button
              type="button"
              className="gallery-item image-item"
              onClick={() => openLightbox(item)}
              aria-label={`Agrandir : ${item.alt}`}
            >
              <div className="image-overflow-container">
                <img
                  src={item.src}
                  alt={item.alt || "Réalisation salon de coiffure"}
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="750"
                  sizes="(max-width: 600px) 100vw, 33vw"
                />
              </div>

              <div className="image-overlay" aria-hidden="true">
                <span className="image-overlay-text">{item.alt}</span>
                <span className="zoom-indicator">🔍</span>
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {activeImage && (
        <div
          className="gallery-lightbox-overlay"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Visionneuse image"
        >
          <button
            className="lightbox-close-btn"
            onClick={closeLightbox}
            aria-label="Fermer la visionneuse"
          >
            &times;
          </button>

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={activeImage.src} alt={activeImage.alt} decoding="async" />
            <p className="lightbox-caption">{activeImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}
