import React, { useState } from "react";
import "../../styles/Salon/Engagements.css";

import iconRespect from "../../assets/Salon/picto_respect 1.png";
import iconPerformance from "../../assets/Salon/picto_performance 1.png";
import iconWorld from "../../assets/Salon/picto_planete 1.png";

const Engagements = () => {
  // Changement de sémantique : activeIndex au lieu de hoveredIndex pour gérer le clic
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    {
      icon: iconRespect,
      title: "Respect absolu du cheveu et du cuir chevelu",
      description:
        "Des produits 100 % naturels et végétaux, sans substances agressives, pour préserver l’équilibre de la fibre capillaire et de la peau tout en apportant douceur, vitalité et éclat.",
    },
    {
      icon: iconPerformance,
      title: "Performance et naturalité",
      description:
        "Les soins végétaux combinent efficacité et soin : ils nourrissent, renforcent et protègent les cheveux, tout en limitant la casse et en améliorant la texture.",
    },
    {
      icon: iconWorld,
      title: "Une démarche respectueuse de l’environnement",
      description:
        "Des formulations responsables, souvent certifiées bio, associées à des marques impliquées dans des procédés durables, pour un impact environnemental réduit et une traçabilité plus sincère.",
    },
  ];

  // Ouvre la carte au clic ou la ferme si on clique sur la même
  const handleCardClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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

        <a
          href="https://www.planity.com/autour-du-fauteuil-29980-ile-tudy"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-rdv"
        >
          PRENDRE RENDEZ-VOUS
        </a>
      </div>

      {/* Partie droite : Visuel et cartes */}
      <div className="engagements-visual">
        <div className="cards-stack">
          {/* Mapping des cartes d'engagement */}
          {data.map((item, index) => (
            <button
              key={index}
              className={`engagement-card ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleCardClick(index)}
              aria-expanded={activeIndex === index}
            >
              <div className="icon-container">
                <span
                  className="icon-mask"
                  style={{
                    WebkitMaskImage: `url(${item.icon})`,
                    maskImage: `url(${item.icon})`,
                  }}
                ></span>
              </div>
              <div className="divider"></div>
              <p>{item.title}</p>
            </button>
          ))}

          {/* OVERLAY : S'affiche si activeIndex n'est pas null */}
          {activeIndex !== null && (
            <div className="engagement-detail-overlay">
              <button
                className="close-icon"
                onClick={() => setActiveIndex(null)}
                aria-label="Fermer les détails"
              >
                ✕
              </button>

              <div className="overlay-header">
                <div className="icon-container">
                  <span
                    className="icon-mask-overlay"
                    style={{
                      WebkitMaskImage: `url(${data[activeIndex].icon})`,
                      maskImage: `url(${data[activeIndex].icon})`,
                    }}
                  ></span>
                </div>
                <h3 className="overlay-title">{data[activeIndex].title}</h3>
              </div>

              <div className="overlay-divider-horizontal"></div>

              <p className="overlay-description">
                {data[activeIndex].description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Engagements;
