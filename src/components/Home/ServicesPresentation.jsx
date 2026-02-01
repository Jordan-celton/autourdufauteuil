import React from "react";
import "../../styles/Home/ServicesPresentation.css";

import backgroundImage from "../../assets/Home/2023-03-21.webp";

const ServicesPresentation = () => {
  return (
    <section className="services-presentation">
      <div className="presentation-wrapper">
        {/* Bloc gauche */}
        <div className="presentation-left">
          <h2 className="presentation-title">
            UN LARGE CHOIX
            <br />
            DE PRESTATIONS
          </h2>

          <p className="presentation-description">
            Chez Autour du Fauteuil, nous croyons qu’un beau résultat commence
            par un cheveu respecté. C’est pourquoi nous privilégions un
            accompagnement personnalisé avec :
          </p>

          <ul className="presentation-list">
            <li>Des produits naturels, végétaux ou peu chimiques</li>
            <li>Des techniques non agressives</li>
            <li>
              Une approche bienveillante et des conseils pour l’entretien de vos
              cheveux
            </li>
          </ul>

          <button className="presentation-button">
            VOIR TOUS NOS SERVICES
          </button>
        </div>

        {/* Bloc droit */}
        <div
          className="presentation-right"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="advantages">
            <div className="advantage-card light">
              <div className="advantage-icon">✂️</div>
              <p>Un salon de proximité depuis près de 20 ans</p>
            </div>

            <div className="advantage-card dark">
              <div className="advantage-icon">🌿</div>
              <p>Des soins et des colorations végétales</p>
            </div>

            <div className="advantage-card light">
              <div className="advantage-icon">👤</div>
              <p>Une attention portée sur le besoin du client</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPresentation;
