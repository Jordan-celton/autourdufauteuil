import React from "react";
import "../../styles/Home/ServicesPresentation.css";
import ciseau1 from "../../assets/icons/ciseaux 1.png";
import vegetal1 from "../../assets/icons/picto_végétal 1.png";
import visage from "../../assets/icons/wellness 1.png";
import backgroundImage from "../../assets/Home/31-Autourdufauteuil-Aurore_PHOTOS_0059.webp";

const ServicesPresentation = () => {
  // 👑 AJOUT SEO : Spécification de la longévité et des valeurs fondamentales du salon pour Google
  const presentationJsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "Autour du Fauteuil",
    description:
      "Chez Autour du Fauteuil, nous privilégions un accompagnement personnalisé avec des produits naturels, des soins et des colorations végétales.",
    foundingDate: "2006", // Indique la date approximative (20 ans d'existence en 2026)
    knowsAbout: [
      "Coloration végétale",
      "Produits naturels",
      "Techniques de coiffure non agressives",
      "Soin du cheveu",
    ],
  };

  return (
    <section
      className="services-presentation"
      aria-label="Pourquoi nous choisir"
    >
      {/* Script invisible pour l'injection des données SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(presentationJsonLd) }}
      />

      <div className="presentation-wrapper">
        {/* Bloc gauche */}
        <div className="presentation-left">
          <h2 className="presentation-title">
            UN LARGE CHOIX <br /> DE PRESTATIONS
          </h2>

          <p className="presentation-description">
            Chez Autour du Fauteuil, nous croyons qu’un beau résultat commence
            par un cheveu respecté. C’est why nous privilégions un
            accompagnement personnalisé avec :
          </p>

          <ul className="presentation-list">
            <li>
              <span>Des produits naturels, végétaux ou peu chimiques</span>
            </li>
            <li>
              <span>Des techniques non agressives</span>
            </li>
            <li>
              <span>
                Une approche bienveillante et des conseils pour l’entretien de
                vos cheveux
              </span>
            </li>
          </ul>

          <a href="/rendez-vous" className="presentation-button">
            PRENDRE RENDEZ-VOUS
          </a>
        </div>

        {/* Bloc droit */}
        <div
          className="presentation-right"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="advantages">
            <div className="advantage-card light">
              <div className="advantage-icon" aria-hidden="true">
                <img src={ciseau1} alt="" />
              </div>
              <p>Un salon de proximité depuis près de 20 ans</p>
            </div>

            <div className="advantage-card dark">
              <div className="advantage-icon" aria-hidden="true">
                <img src={vegetal1} alt="" />
              </div>
              <p>Des soins et des colorations végétales</p>
            </div>

            <div className="advantage-card light">
              <div className="advantage-icon" aria-hidden="true">
                <img src={visage} alt="" />
              </div>
              <p>Une attention portée sur le besoin du client</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPresentation;
