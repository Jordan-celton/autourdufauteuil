import React from "react";
import "../../styles/Salon/EmployeeProfile.css";
// Import de l'image si nécessaire
import auroreImg from "../../assets/Salon/31-Autourdufauteuil-Aurore_PHOTOS_0086.webp";

const EmployeeProfile = () => {
  // 👑 AJOUT SEO : Structuration sémantique de l'identité de la gérante pour Google (totalement invisible)
  const profileJsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "Autour du Fauteuil",
    employee: {
      "@type": "Person",
      name: "Aurore",
      jobTitle: "Gérante et Coiffeuse",
      image: auroreImg,
      description:
        "Je perpétue avec cœur l’héritage de ma maman en offrant un salon de coiffure où les plantes, le soin et la douceur prennent soin de chaque chevelure.",
    },
  };

  return (
    <section className="employee-section">
      {/* Script invisible d'injection des données sémantiques pour Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />

      {/* Titre de fond décoratif */}
      <div className="background-title">Notre Équipe</div>

      <div className="employee-content">
        <h2 className="main-title">ELLE VOUS COIFFE</h2>

        <div className="image-wrapper">
          <img src={auroreImg} alt="Aurore" className="profile-photo" />
          {/* Nom manuscrit qui chevauche l'image */}
          <span className="signature-name">Aurore</span>
        </div>

        <div className="text-content">
          <h3 className="concept-title">L'ESPRIT DU SALON</h3>
          <p className="quote">
            “ Je perpétue avec cœur l’héritage de ma maman en offrant un salon
            de coiffure où les plantes, le soin et la douceur prennent soin de
            chaque chevelure dans notre cocon familial. ”
          </p>
        </div>
      </div>

      {/* Les vagues décoratives en fond (optionnel, via CSS ou SVG) */}
      <div className="decorative-waves"></div>
    </section>
  );
};

export default EmployeeProfile;
