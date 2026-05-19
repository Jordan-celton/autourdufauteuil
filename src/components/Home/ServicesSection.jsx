import React from "react";
import "../../styles/Home/ServicesSection.css";

import femmeImage1 from "../../assets/Home/31-Autourdufauteuil-Aurore_PHOTOS_0026 1.png";
import femmeImage2 from "../../assets/Home/31-Autourdufauteuil-Aurore_PHOTOS_0026 2.png";
import femmeImage3 from "../../assets/Home/31-Autourdufauteuil-Aurore_PHOTOS_0026 3.png";

const ServicesSection = () => {
  const handleRdvClick = () => {
    window.location.href = "/rendez-vous";
  };

  // 1. Vos cartes principales (Prestations Signatures)
  const services = [
    {
      img: femmeImage1,
      title: (
        <>
          COUPE <br /> FEMME
        </>
      ),
      description: "Shampoing + Coiffage",
    },
    {
      img: femmeImage2,
      title: <>COULEUR VEGETALE</>,
      description: "Shampoing + Coupe + Coiffage",
    },
    {
      img: femmeImage3,
      title: <>COULEUR ORGANIQUE</>,
      description: "Soin + Couleur sur mesure",
    },
  ];

  // 2. Les autres prestations (Colonne de gauche)
  // CHANGEZ LES NOMS ICI FACILEMENT :
  const autresPrestations = [
    { name: "Green Botox" },
    { name: "Balayage Argile" },
    { name: "Coiffage Wavy" },
    { name: "Green Detox" },
    { name: "Soins aux plantes ayurvédiques" },
  ];

  return (
    <section className="services-container">
      {/* Header */}
      <div className="services-header">
        <span className="services-subtitle">Nos Services</span>
        <h1 className="main-title">NOS PRESTATIONS SIGNATURES</h1>
      </div>

      {/* Layout */}
      <div className="services-layout">
        {/* Colonne gauche */}
        <aside className="left-services-column">
          <h2 className="left-column-title">AUTRES PRESTATIONS</h2>

          {/* Boucle sur les autres prestations */}
          {autresPrestations.map((presta, index) => (
            <div className="simple-service-box" key={index}>
              <span className="service-name">{presta.name}</span>
              <span className="service-price">+</span>
            </div>
          ))}

          <div className="rdv-container">
            <button className="rdv-button" onClick={handleRdvClick}>
              TOUTES NOS PRESTATIONS
            </button>
          </div>
        </aside>

        {/* Cartes */}
        <div className="cards-section">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="card-image-wrapper">
                <img src={service.img} alt="Service" className="card-image" />
              </div>

              <div className="card-content">
                <div className="card-text">
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-description">{service.description}</p>
                </div>

                <button className="card-cta">LIRE PLUS</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
