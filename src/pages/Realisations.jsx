import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import heroImage from "../assets/Realisation/31-Autourdufauteuil-Aurore_PHOTOS_0031.webp";
import Gallery from "../components/Realisations/Gallery";

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
        <HeroSection
          image={heroImage}
          subtitle="Nos photos"
          title="RÉALISATIONS"
        />
      </section>

      {/* La galerie photo se dévoile élégamment avec un effet zoom/focus doux au scroll */}
      <Gallery />
    </>
  );
}
