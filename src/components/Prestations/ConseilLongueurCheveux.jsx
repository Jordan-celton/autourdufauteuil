import React from "react";
import "../../styles/Prestations/ConseilLongueurCheveux.css";

import iconCourt from "../../assets/Services/Court.png";
import iconMoyen from "../../assets/Services/Milong.png";
import iconLong from "../../assets/Services/Long.png";

const ConseilLongueur = ({ image, alt = "Coiffeuse en action" }) => {
  const defaultImage = "/images/default-conseil-longueur.jpg"; // optionnel

  return (
    <div className="conseil-longueur">
      <div className="conseil-conteneur-principal">
        {/* Section image */}
        <div className="conseil-section-photo">
          <img
            src={image || defaultImage}
            alt={alt}
            className="photo-conseil"
          />
        </div>

        {/* Section texte */}
        <div className="conseil-section-texte">
          <h1 className="conseil-titre-principal">
            QUELLE LONGUEUR
            <br />
            CHOISIR ?
          </h1>

          <p className="conseil-description">
            Que ce soit pour entretenir votre coupe, changer de style ou prendre
            soin de vos cheveux en douceur, <strong>Autour du Fauteuil</strong>{" "}
            propose des prestations claires et sur mesure, avec la possibilité
            de réserver facilement votre rendez-vous en ligne via Planity.
          </p>

          <div className="conseil-options-longueur">
            {/* Courts */}
            <div className="conseil-option">
              <h3>COURTS</h3>
              <div className="icon-hair short">
                <img src={iconCourt} alt="Cheveux courts" />
              </div>
              <p>
                Au-dessus des
                <br />
                oreilles
              </p>
            </div>

            {/* Mi-longs */}
            <div className="conseil-option">
              <h3>MI-LONGS</h3>
              <div className="icon-hair medium">
                <img src={iconMoyen} alt="Cheveux mi-longs" />
              </div>
              <p>
                Carré ou
                <br />
                au-dessus des épaules
              </p>
            </div>

            {/* Longs */}
            <div className="conseil-option">
              <h3>LONGS</h3>
              <div className="icon-hair long">
                <img src={iconLong} alt="Cheveux longs" />
              </div>
              <p>
                Sous les
                <br />
                épaules
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConseilLongueur;
