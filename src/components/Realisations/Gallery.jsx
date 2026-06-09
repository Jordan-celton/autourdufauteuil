import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import ScrollReveal from "../ScrollReveal";
import "../../styles/Realisations/Gallery.css";

// Importation des images
import img1 from "../../assets/Realisation/gallery1.webp";
import img2 from "../../assets/Realisation/gallery2.webp";
import img3 from "../../assets/Realisation/gallery3.webp";
import img4 from "../../assets/Realisation/gallery4.webp";
import img5 from "../../assets/Realisation/gallery5.webp";
import img6 from "../../assets/Realisation/gallery6.webp";
import img7 from "../../assets/Realisation/gallery7.webp";
import img8 from "../../assets/Realisation/gallery8.webp";

// 👑 CORRECTION ACCESSIBILITÉ : Restauration et complétion des textes alternatifs descriptifs
const items = [
  {
    type: "image",
    src: img1,
    alt: "Coiffure bouclée et volumineuse - Autour du Fauteuil",
    gridClass: "card-large",
  },
  {
    type: "image",
    src: img2,
    alt: "Balayage blond lumineux sur cheveux mi-longs",
    gridClass: "card-standard",
  },
  {
    type: "image",
    src: img3,
    alt: "Coupe de cheveux moderne et coloration sur-mesure",
    gridClass: "card-tall",
  },
  {
    type: "image",
    src: img4,
    alt: "Longs cheveux ondulés avec reflets naturels",
    gridClass: "card-standard",
  },
  {
    type: "image",
    src: img5,
    alt: "Coloration rousse éclatante et brillante",
    gridClass: "card-standard",
  },
  {
    type: "image",
    src: img6,
    alt: "Soin capillaire naturel et brushing lisse",
    gridClass: "card-standard",
  },
  {
    type: "image",
    src: img7,
    alt: "Coupe courte femme moderne et stylisée",
    gridClass: "card-standard",
  },
  {
    type: "image",
    src: img8,
    alt: "Cheveux lisses, brillants et coupe droite",
    gridClass: "card-tall",
  },
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  // 👑 BONUS ACCESSIBILITÉ : Gestion de la fermeture de la Lightbox avec la touche Échap
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveImage(null);
      }
    };

    if (activeImage) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImage]);

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
                {/* Image avec effet de zoom au survol */}
                <motion.img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  width="600" // Dimensions indicatives pour éviter le CLS
                  height="750" // Dimensions indicatives pour éviter le CLS
                  variants={imageVariants}
                />
              </div>

              {/* Overlay textuel fluide */}
              <motion.div className="image-overlay" variants={overlayVariants}>
                <span className="image-overlay-text">{item.alt}</span>
                <span className="zoom-indicator" aria-hidden="true">
                  🔍
                </span>
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
            role="dialog"
            aria-modal="true"
            aria-label="Vue agrandie de la photo"
          >
            {/* Bouton Fermer */}
            <button
              className="lightbox-close-btn"
              onClick={() => setActiveImage(null)}
              aria-label="Fermer la galerie photo"
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
