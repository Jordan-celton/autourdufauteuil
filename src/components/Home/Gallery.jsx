import React, { useState, useRef } from "react";
import "../../styles/Home/Gallery.css";

import img1 from "../../assets/Home/gallery1.png";
import img2 from "../../assets/Home/gallery2.png";
import img3 from "../../assets/Home/gallery3.png";
import img4 from "../../assets/Home/gallery4.png";
import img5 from "../../assets/Home/gallery5.png";
import img6 from "../../assets/Home/gallery6.png";

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  // Fonction qui calcule l'index de l'image visible au scroll
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const itemWidth = 240; // Largeur d'un item (220px) + le gap (20px)

    // Calcule l'index le plus proche
    const newIndex = Math.round(scrollLeft / itemWidth);

    // Sécurité pour rester dans les bornes du tableau
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < images.length) {
      setActiveIndex(newIndex);
    }
  };

  // 👑 AJOUT SEO : Structuration de la galerie d'images pour optimiser le référencement visuel (invisible)
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
      {/* Script invisible d'injection des données pour Google Images */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryJsonLd) }}
      />

      <div className="gallery-header">
        <span className="gallery-script-title" aria-hidden="true">
          Nos Photos
        </span>
        <h2 className="gallery-main-title">UN APERÇU DE NOS CRÉATIONS</h2>
      </div>

      {/* Ajout de la Ref et de l'écouteur onScroll */}
      <div
        className="gallery-grid-home"
        ref={scrollContainerRef}
        onScroll={handleScroll}
      >
        {images.map((img, index) => (
          <div className="gallery-item-home" key={index}>
            <img
              src={img}
              alt={`Exemple de coiffure - Création ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
