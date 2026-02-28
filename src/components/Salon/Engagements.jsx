import React, { useState } from "react";
import "../../styles/Salon/Engagements.css";

import iconRespect from "../../assets/Salon/picto_respect 1.png";
import iconPerformance from "../../assets/Salon/picto_performance 1.png";
import iconWorld from "../../assets/Salon/picto_planete 1.png";

const Engagements = () => {
  // État pour savoir quelle carte est survolée (null par défaut)
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
        "Les soins végétaux combinent efficacité et soin : ils nourrisent, renforcent et protègent les cheveux, tout en limitant la casse et en améliorant la texture.",
    },
    {
      icon: iconWorld,
      title: "Une démarche respectueuse de l’environnement",
      description:
        "Des formulations responsables, souvent certifées bio, associées à des marques implquées dans des procédés durable, pour un impact environnemental réduit et une traçabilité plus sincère.",
    },
  ];

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
          {/* Mapping des cartes d'engagement */}
          {data.map((item, index) => (
            <div
              key={index}
              className="engagement-card"
              onMouseEnter={() => setHoveredIndex(index)}
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
            </div>
          ))}

          {/* OVERLAY : S'affiche uniquement si hoveredIndex n'est pas null */}
          {hoveredIndex !== null && (
            <div
              className="engagement-detail-overlay"
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span
                className="close-icon"
                onClick={() => setHoveredIndex(null)}
              >
                X
              </span>

              <div className="overlay-header">
                <div className="icon-container">
                  <span
                    className="icon-mask-overlay"
                    style={{
                      WebkitMaskImage: `url(${data[hoveredIndex].icon})`,
                      maskImage: `url(${data[hoveredIndex].icon})`,
                    }}
                  ></span>
                </div>
                <h3 className="overlay-title">{data[hoveredIndex].title}</h3>
              </div>

              <div className="overlay-divider-horizontal"></div>

              <p className="overlay-description">
                {data[hoveredIndex].description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Engagements;
