import React, { useState, useMemo, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import "../../styles/Salon/Engagements.css";

import iconRespect from "../../assets/Salon/picto_respect 1.png";
import iconPerformance from "../../assets/Salon/picto_performance 1.png";
import iconWorld from "../../assets/Salon/picto_planete 1.png";

const Engagements = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = useMemo(
    () => [
      {
        icon: iconRespect,
        title: "Respect du cheveu et du cuir chevelu",
        description:
          "Produits naturels sans substances agressives pour préserver la fibre capillaire.",
      },
      {
        icon: iconPerformance,
        title: "Performance et naturalité",
        description:
          "Soins végétaux qui nourrissent, renforcent et protègent les cheveux.",
      },
      {
        icon: iconWorld,
        title: "Démarche environnementale",
        description:
          "Formulations responsables et certifiées bio pour un impact réduit.",
      },
    ],
    [],
  );

  const handleCardClick = useCallback((index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  }, []);

  const engagementsJsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "Autour du Fauteuil",
    knowsAbout: [
      "Coloration végétale certifiée bio",
      "Cosmos Organic",
      "Cosmos Natural",
      "Coiffure écoresponsable",
    ],
  };

  return (
    <section
      className="engagements-container"
      aria-label="Engagements du salon"
    >
      {/* SEO CLEAN */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(engagementsJsonLd)}
        </script>
      </Helmet>

      {/* LEFT */}
      <div className="engagements-content">
        <h2 className="engagements-title">ENGAGEMENTS CLÉS</h2>

        <div className="engagements-description">
          <p>
            Produits végétaux issus de plantes tinctoriales et certifiées bio.
          </p>

          <p>
            Une approche respectueuse de la fibre capillaire et de
            l’environnement.
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

      {/* RIGHT */}
      <div className="engagements-visual">
        <div className="cards-stack">
          {data.map((item, index) => (
            <button
              key={index}
              type="button"
              className={`engagement-card ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => handleCardClick(index)}
              aria-expanded={activeIndex === index}
              aria-label={item.title}
            >
              <span
                className="icon-mask"
                style={{
                  WebkitMaskImage: `url(${item.icon})`,
                  maskImage: `url(${item.icon})`,
                }}
                aria-hidden="true"
              />

              <p>{item.title}</p>
            </button>
          ))}

          {/* OVERLAY */}
          {activeIndex !== null && (
            <div
              className="engagement-detail-overlay"
              role="dialog"
              aria-modal="true"
            >
              <button
                className="close-icon"
                onClick={() => setActiveIndex(null)}
                aria-label="Fermer les détails"
              >
                ✕
              </button>

              <h3>{data[activeIndex].title}</h3>

              <p>{data[activeIndex].description}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Engagements;
