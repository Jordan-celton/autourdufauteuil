import React from "react";
import "../../styles/Home/ServicesSection.css";

import femmeImage1 from "../../assets/Home/31-Autourdufauteuil-Aurore_PHOTOS_0068.webp";
import femmeImage2 from "../../assets/Home/31-Autourdufauteuil-Aurore_PHOTOS_0032.webp";
import femmeImage3 from "../../assets/Home/31-Autourdufauteuil-Aurore_PHOTOS_0024.webp";

const ServicesSection = () => {
  // 1. Vos cartes principales (Prestations Signatures)
  const services = [
    {
      img: femmeImage1,
      title: "Coupe Femme",
      displayTitle: (
        <>
          COUPE <br /> FEMME
        </>
      ),
      description: "Shampoing + Coiffage",
    },
    {
      img: femmeImage2,
      title: "Couleur Végétale",
      displayTitle: <>COULEUR VÉGÉTALE</>,
      description: "Shampoing + Coupe + Coiffage",
    },
    {
      img: femmeImage3,
      title: "Couleur Organique",
      displayTitle: <>COULEUR ORGANIQUE</>,
      description: "Soin + Couleur sur mesure",
    },
  ];

  // 2. Les autres prestations (Colonne de gauche)
  const autresPrestations = [
    { name: "Green Botox" },
    { name: "Balayage Argile" },
    { name: "Coiffage Wavy" },
    { name: "Green Detox" },
    { name: "Soins aux plantes ayurvédiques" },
  ];

  return (
    <section
      className="services-container"
      aria-label="Nos prestations et services"
    >
      {/* Header */}
      <div className="services-header">
        {/* aria-hidden pour le texte géant en arrière-plan afin d'éviter les répétitions pour les malvoyants */}
        <span className="services-subtitle" aria-hidden="true">
          Nos Services
        </span>
        <h2 className="main-title">NOS PRESTATIONS SIGNATURES</h2>
      </div>

      {/* Layout */}
      <div className="services-layout">
        {/* Colonne gauche */}
        <aside className="left-services-column">
          <h3 className="left-column-title">AUTRES PRESTATIONS</h3>

          <div className="simple-services-list">
            {autresPrestations.map((presta, index) => (
              <div className="simple-service-box" key={index}>
                <span className="service-name">{presta.name}</span>
                <span
                  className="service-price"
                  aria-label="Sur devis ou prix de départ"
                >
                  +
                </span>
              </div>
            ))}
          </div>

          <div className="rdv-container">
            <a href="/rendez-vous" className="rdv-button">
              TOUTES NOS PRESTATIONS
            </a>
          </div>
        </aside>

        {/* Cartes */}
        <div className="cards-section">
          {services.map((service, index) => (
            <article className="service-card" key={index}>
              <div className="card-image-wrapper">
                <img
                  src={service.img}
                  alt={`Illustration du service : ${service.title}`}
                  className="card-image"
                />
              </div>

              <div className="card-content">
                <div className="card-text">
                  <h3 className="card-title" aria-label={service.title}>
                    {service.displayTitle}
                  </h3>
                  <p className="card-description">{service.description}</p>
                </div>

                <button
                  type="button"
                  className="card-cta"
                  aria-label={`En savoir plus sur la prestation : ${service.title}`}
                >
                  LIRE PLUS
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
