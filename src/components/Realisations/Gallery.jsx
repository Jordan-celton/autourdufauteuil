import React, { useState, useEffect } from "react";
import "../../styles/Realisations/Gallery.css";

// Images
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
    alt: "",
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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveImage(null);
    };

    if (activeImage) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImage]);

  return (
    <section className="gallery-realisations">
      <div className="gallery-header">
        <span className="gallery-subtitle">Portfolio</span>
        <h2 className="gallery-title">NOTRE SAVOIR-FAIRE</h2>
        <p className="gallery-realisations-intro">
          Découvrez nos réalisations.
        </p>
      </div>

      <div className="gallery-realisations-grid">
        {items.map((item, index) => (
          <div
            key={index}
            className={`gallery-grid-wrapper ${item.gridClass} reveal`}
          >
            <div
              className="gallery-item image-item"
              onClick={() => setActiveImage(item)}
              role="button"
              tabIndex={0}
              aria-label={`Agrandir l'image : ${item.alt}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveImage(item);
                }
              }}
            >
              <div className="image-overflow-container">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  width="600"
                  height="750"
                />
              </div>

              <div className="image-overlay">
                <span className="image-overlay-text">{item.alt}</span>
                <span aria-hidden="true">🔍</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {activeImage && (
        <div
          className="gallery-lightbox-overlay"
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="lightbox-close-btn"
            onClick={() => setActiveImage(null)}
            aria-label="Fermer"
          >
            &times;
          </button>

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={activeImage.src} alt={activeImage.alt} />
            <p className="lightbox-caption">{activeImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}
