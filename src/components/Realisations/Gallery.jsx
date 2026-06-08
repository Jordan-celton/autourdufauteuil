import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../ScrollReveal";
import "../../styles/Realisations/Gallery.css";

// Importation des images
import img1 from "../../assets/Home/gallery1.png";
import img2 from "../../assets/Home/gallery2.png";
import img3 from "../../assets/Home/gallery3.png";
import img4 from "../../assets/Home/gallery4.png";
import img5 from "../../assets/Home/gallery5.png";
import img6 from "../../assets/Home/gallery6.png";

const items = [
  {
    type: "image",
    src: img1,
    alt: "Coiffure bouclée",
    gridClass: "card-large",
  },
  {
    type: "image",
    src: img2,
    alt: "Balayage blond",
    gridClass: "card-standard",
  },
  { type: "image", src: img3, alt: "Dégradé homme", gridClass: "card-tall" },
  {
    type: "image",
    src: img4,
    alt: "Longs cheveux ondulés",
    gridClass: "card-standard",
  },
  {
    type: "image",
    src: img5,
    alt: "Coloration rousse",
    gridClass: "card-standard",
  },
  { type: "image", src: img6, alt: "Carré ondulé", gridClass: "card-standard" },
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  // Variantes d'animation pour les éléments de la grille au survol
  const cardVariants = {
    rest: { y: 0 },
    hover: { y: -8, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const overlayVariants = {
    rest: { opacity: 0 },
    hover: { opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <section className="gallery-realisations">
      <div className="gallery-header">
        <span className="gallery-subtitle">Portfolio</span>
        <h2 className="gallery-title">NOTRE SAVOIR-FAIRE</h2>
        <p className="gallery-realisations-intro">
          Découvrez à travers notre galerie un aperçu de nos réalisations.
          Coupes précises, balayages lumineux et colorations végétales
          sur-mesure, façonnés dans le respect absolu de votre fibre capillaire.
        </p>
      </div>

      <div className="gallery-realisations-grid">
        {items.map((item, index) => (
          <ScrollReveal
            key={index}
            variant="scaleUp"
            className={`gallery-grid-wrapper ${item.gridClass}`}
          >
            {/* Conteneur de la carte animé au survol */}
            <motion.div
              className="gallery-item image-item"
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={cardVariants}
              onClick={() => setActiveImage(item)}
            >
              <div className="image-overflow-container">
                {/* Image avec effet de zoom au survol */}
                <motion.img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  variants={imageVariants}
                />
              </div>

              {/* Overlay textuel fluide */}
              <motion.div className="image-overlay" variants={overlayVariants}>
                <span className="image-overlay-text">{item.alt}</span>
                <span className="zoom-indicator">🔍</span>
              </motion.div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>

      {/* LIGHTBOX INTERACTIVE */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="gallery-lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActiveImage(null)}
          >
            {/* Bouton Fermer */}
            <button
              className="lightbox-close-btn"
              onClick={() => setActiveImage(null)}
            >
              &times;
            </button>

            {/* Conteneur Image Animé (Effet Pop Spring) */}
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 260 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={activeImage.src} alt={activeImage.alt} />
              {activeImage.alt && (
                <p className="lightbox-caption">{activeImage.alt}</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
