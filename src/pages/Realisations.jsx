import React, { useEffect } from "react";
import { motion } from "framer-motion"; // 1. Import de motion
import HeroSection from "../components/HeroSection";
import heroImage from "../assets/Realisation/31-Autourdufauteuil-Aurore_PHOTOS_0031.webp";
import Gallery from "../components/Realisations/Gallery";
import ScrollReveal from "../components/ScrollReveal"; // 2. Import du ScrollReveal centralisé

const MotionDiv = motion.div;

export default function Realisations() {
  // 👑 AJOUT SEO : Métadonnées dynamiques pour la page des réalisations
  useEffect(() => {
    document.title =
      "Nos Réalisations Coiffure & Portfolio | Autour du Fauteuil";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content =
      "Découvrez le savoir-faire du salon Autour du Fauteuil à l'Île-Tudy en images : transformations, coupes hommes et femmes, balayages et colorations végétales.";
  }, []);

  return (
    <>
      <section className="container section">
        {/* Animation d'intro fluide pour le Hero au chargement */}
        <MotionDiv
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroSection
            image={heroImage}
            subtitle="Nos photos"
            title="RÉALISATIONS"
          />
        </MotionDiv>
      </section>

      {/* La galerie photo se dévoile élégamment avec un effet zoom/focus doux au scroll */}
      <Gallery />
    </>
  );
}
