import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import heroImage from "../assets/Salon/31-Autourdufauteuil-Aurore_PHOTOS_0058.webp";
import AutourDuFauteuil from "../components/Salon/AutourDuFauteuil";
import SoinsVegetaux from "../components/Salon/SoinsVegetaux";
import Engagements from "../components/Salon/Engagements";
import EmployeeProfile from "../components/Salon/EmployeeProfile";

export default function Salon() {
  // 👑 AJOUT SEO : Métadonnées dynamiques de la page et balise description pour les moteurs de recherche
  useEffect(() => {
    document.title =
      "Notre Univers & Engagements | Autour du Fauteuil Île-Tudy";

    // Met à jour ou crée la meta description de la page pour Google
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content =
      "Découvrez l'univers d'Autour du Fauteuil à l'Île-Tudy : un salon de coiffure engagé, spécialisé en colorations végétales, soins naturels et bien-être.";
  }, []);

  // 👑 AJOUT SEO : Schéma de Données Structurées déclarant cette page comme la page "À propos" officielle
  const salonPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "HairSalon",
      name: "Autour du Fauteuil",
      image: heroImage,
      description:
        "Salon de coiffure familial à l'Île-Tudy spécialisé dans les soins naturels et les colorations végétales.",
    },
  };

  return (
    <section className="container section">
      {/* Script invisible d'injection des données pour Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(salonPageJsonLd) }}
      />
      <HeroSection
        image={heroImage}
        subtitle="Le Salon"
        title="NOTRE UNIVERS"
      />

      <AutourDuFauteuil />

      <SoinsVegetaux />

      <Engagements />

      <EmployeeProfile />
    </section>
  );
}
