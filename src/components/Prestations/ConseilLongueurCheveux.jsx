import React from "react";
import "../../styles/Prestations/ConseilLongueurCheveux.css";

const ConseilLongueur = ({ imageUrl, imageAlt }) => {
  return (
    <div className="conseil-longueur">
      <div className="conteneur-principal">
        <div className="section-texte">
          <h1 className="titre-principal">QUELLE LONGUEUR CHOISIR ?</h1>

          <div className="description">
            <p>
              Que ce soit pour entretenir votre coupe, changer de style ou
              prendre soin de vos cheveux en douceur,
              <strong> Autour du Fauteuil</strong> propose des prestations
              claires et sur mesure, avec la possibilité de réserver facilement
              votre rendez-vous en ligne via Planity.
            </p>
          </div>

          <div className="options-longueur">
            <div className="option">
              <div className="option-titre">
                <span className="puce">•</span>
                <h2>COURTS</h2>
              </div>
              <p className="option-description">Au-dessus des oreilles</p>
            </div>

            <div className="option">
              <div className="option-titre">
                <span className="puce">•</span>
                <h2>MI-LONGS</h2>
              </div>
              <p className="option-description">
                Carré ou au-dessus des épaules
              </p>
            </div>

            <div className="option">
              <div className="option-titre">
                <span className="puce">•</span>
                <h2>LONGS</h2>
              </div>
              <p className="option-description">Sous les épaules</p>
            </div>
          </div>
        </div>

        <div className="section-photo">
          <div className="cadre-photo">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={imageAlt || "Conseil longueur de cheveux"}
                className="photo-conseil"
              />
            ) : (
              <div className="placeholder-photo">
                <span className="icone-photo">📷</span>
                <p className="texte-placeholder">Photo illustrative</p>
                <p className="sous-texte-placeholder">
                  Exemple de longueur de cheveux
                </p>
              </div>
            )}
          </div>
          <div className="legende-photo">
            Notre expertise pour vous conseiller sur la longueur idéale
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConseilLongueur;
