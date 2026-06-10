import React from "react";
import { Helmet } from "react-helmet-async";
import "../../styles/Home/ServicesPresentation.css";

import ciseau1 from "../../assets/icons/ciseaux 1.png";
import vegetal1 from "../../assets/icons/picto_végétal 1.png";
import visage from "../../assets/icons/wellness 1.png";
import backgroundImage from "../../assets/Home/31-Autourdufauteuil-Aurore_PHOTOS_0059.webp";

const ServicesPresentation = () => {
  const presentationJsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "Autour du Fauteuil",
    description:
      "Salon de coiffure spécialisé en soins naturels et colorations végétales à l'Île-Tudy.",
    foundingDate: "2006",
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
      aria-label="Pourquoi choisir notre salon"
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(presentationJsonLd)}
        </script>
      </Helmet>

      <div className="presentation-wrapper">
        {/* LEFT */}
        <div className="presentation-left">
          <h2 className="presentation-title">
            UN LARGE CHOIX <br /> DE PRESTATIONS
          </h2>

          <p className="presentation-description">
            Chez Autour du Fauteuil, nous croyons qu’un beau résultat commence
            par un cheveu respecté.
          </p>

          <ul className="presentation-list">
            <li>Produits naturels et végétaux</li>
            <li>Techniques non agressives</li>
            <li>Accompagnement personnalisé</li>
          </ul>

          <a href="/rendez-vous" className="presentation-button">
            PRENDRE RENDEZ-VOUS
          </a>
        </div>

        {/* RIGHT */}
        <div
          className="presentation-right"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="advantages">
            <div className="advantage-card light">
              <div className="advantage-icon" aria-hidden="true">
                <img src={ciseau1} alt="" loading="lazy" decoding="async" />
              </div>
              <p>Salon de proximité depuis près de 20 ans</p>
            </div>

            <div className="advantage-card dark">
              <div className="advantage-icon" aria-hidden="true">
                <img src={vegetal1} alt="" loading="lazy" decoding="async" />
              </div>
              <p>Colorations végétales et naturelles</p>
            </div>

            <div className="advantage-card light">
              <div className="advantage-icon" aria-hidden="true">
                <img src={visage} alt="" loading="lazy" decoding="async" />
              </div>
              <p>Approche centrée sur le client</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPresentation;
