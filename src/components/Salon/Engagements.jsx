import React from "react";
import "../../styles/Salon/Engagements.css";

import iconRespect from "../../assets/Salon/picto_respect 1.png";
import iconPerformance from "../../assets/Salon/picto_performance 1.png";
import iconWorld from "../../assets/Salon/picto_planete 1.png";

const Engagements = () => {
  return (
    <section className="engagements-container">
      {/* Partie gauche : Texte et CTA */}
      <div className="engagements-content">
        <h2 className="engagements-title">ENGAGEMENTS CLÉS</h2>

        <div className="engagements-description">
          <p>
            Les produits utilisés, tels que ceux de L’Envolée des Couleurs,
            puisent dans les vertus des plantes tinctoriales et soignantes pour
            nourrir, fortifier et embellir la fibre capillaire.
          </p>
          <p>
            De même, les soins et colorations Couleurs Gaïa, certifiés bio
            Cosmos Organic ou Cosmos Natural, associent performance et douceur,
            avec des actifs naturels qui renforcent la brillance, le volume et
            la santé globale de vos cheveux.
          </p>
        </div>

        <button className="btn-rdv">PRENDRE RENDEZ-VOUS</button>
      </div>

      {/* Partie droite : Visuel et cartes */}
      <div className="engagements-visual">
        <div className="cards-stack">
          <div className="engagement-card">
            <div className="icon-container">
              <span
                className="icon-mask"
                style={{
                  WebkitMaskImage: `url(${iconRespect})`,
                  maskImage: `url(${iconRespect})`,
                }}
              ></span>
            </div>
            <div className="divider"></div>
            <p>Respect absolu du cheveu et du cuir chevelu</p>
          </div>

          <div className="engagement-card">
            <div className="icon-container">
              <span
                className="icon-mask"
                style={{
                  WebkitMaskImage: `url(${iconPerformance})`,
                  maskImage: `url(${iconPerformance})`,
                }}
              ></span>
            </div>
            <div className="divider"></div>
            <p className="bold-text">EN SAVOIR PLUS</p>
          </div>

          <div className="engagement-card">
            <div className="icon-container">
              <span
                className="icon-mask"
                style={{
                  WebkitMaskImage: `url(${iconWorld})`,
                  maskImage: `url(${iconWorld})`,
                }}
              ></span>
            </div>
            <div className="divider"></div>
            <p>Une démarche respectueuse de l’environnement</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engagements;
