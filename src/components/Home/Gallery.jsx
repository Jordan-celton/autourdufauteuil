import React, { useState, useRef, useCallback } from "react";
import "../../styles/Home/Gallery.css";

import img1 from "../../assets/Home/gallery1.png";
import img2 from "../../assets/Home/gallery2.png";
import img3 from "../../assets/Home/gallery3.png";
import img4 from "../../assets/Home/gallery4.png";
import img5 from "../../assets/Home/gallery5.png";
import img6 from "../../assets/Home/gallery6.png";

const images = [img1, img2, img3, img4, img5, img6];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  // 🔥 optimisation : throttle léger via requestAnimationFrame
  const rafRef = useRef(false);

  const handleScroll = useCallback(() => {
    if (rafRef.current) return;

    rafRef.current = true;

    requestAnimationFrame(() => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const children = container.children;
      if (!children.length) return;

      const scrollLeft = container.scrollLeft;

      // 🔥 calcule basé sur DOM réel (plus robuste que 240px hardcodé)
      let closestIndex = 0;
      let closestDistance = Infinity;

      for (let i = 0; i < children.length; i++) {
        const el = children[i];
        const offset = el.offsetLeft;
        const distance = Math.abs(offset - scrollLeft);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      }

      setActiveIndex(closestIndex);
      rafRef.current = false;
    });
  }, []);

  const galleryJsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Galerie de créations - Autour du Fauteuil",
    description:
      "Aperçu des coupes, colorations végétales et coiffures réalisées au salon Autour du Fauteuil à l'Île-Tudy.",
    image: images,
  };

  return (
    <section className="gallery-section" aria-label="Galerie de nos créations">
      {/* SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(galleryJsonLd),
        }}
      />

      <div className="gallery-header">
        <span className="gallery-script-title" aria-hidden="true">
          Nos Photos
        </span>

        <h2 className="gallery-main-title">UN APERÇU DE NOS CRÉATIONS</h2>
      </div>

      {/* SCROLL HORIZONTAL */}
      <div
        className="gallery-grid-home"
        ref={scrollContainerRef}
        onScroll={handleScroll}
      >
        {images.map((img, index) => (
          <div
            className={`gallery-item-home ${
              index === activeIndex ? "active" : ""
            }`}
            key={index}
          >
            <img
              src={img}
              alt={`Coiffure réalisée au salon - création ${index + 1}`}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
