import React from "react";
import "../../styles/Home/ServicesPresentation.css";

const ServicesPresentation = () => {
  return (
    <div className="services-presentation">
      <div className="presentation-container">
        {/* Section gauche - Texte */}
        <div className="presentation-text">
          <h1 className="presentation-title">
            UN LARGE CHOIX
            <br />
            DE PRESTATIONS
          </h1>

          <p className="presentation-description">
            Chez Auteur du Fauteuil, nous croyons qu’un beau résultat commence
            par un cheveu respecté. C'est pourquoi nous privilégions un
            accompagnement personnalisé avec :
          </p>

          <ul className="features-list">
            <li className="feature-item">
              <span className="feature-icon"></span>
              Des produits naturels, végétaux ou peu chimiques
            </li>
            <li className="feature-item">
              <span className="feature-icon"></span>
              Des techniques non agressives
            </li>
            <li className="feature-item">
              <span className="feature-icon"></span>
              Une approche bienveillante et des conseils pour l'entretien de vos
              cheveux
            </li>
          </ul>

          <button className="services-button">VOIR TOUS NOS SERVICES</button>
        </div>

        {/* Section droite - Cartes d'avantages */}
        <div className="advantages-cards">
          <div className="advantage-card">
            <div className="card-icon">🏪</div>
            <p className="card-title">
              Un salon de proximité depuis près de 20 ans
            </p>
          </div>

          <div className="advantage-card">
            <div className="card-icon">🌿</div>
            <p className="card-title">Des soins et des colorations végétales</p>
          </div>

          <div className="advantage-card">
            <div className="card-icon">👥</div>
            <p className="card-title">
              Une attention portée sur le besoin du client
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPresentation;
