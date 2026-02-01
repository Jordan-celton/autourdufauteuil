import React from "react";
import "../../styles/Home/ServicesSection.css";

import femmeImage1 from "../../assets/Home/2023-03-21.webp";
import femmeImage2 from "../../assets/Home/2023-03-21.webp";
import femmeImage3 from "../../assets/Home/2023-03-21.webp";

const ServicesSection = () => {
  const handleRdvClick = () => {
    window.location.href = "/rendez-vous";
  };

  return (
    <section className="services-container">
      {/* Header */}
      <div className="services-header">
        <span className="services-subtitle">Nos Services</span>
        <h1 className="main-title">CE QUE NOUS PROPOSONS</h1>
      </div>

      {/* Layout */}
      <div className="services-layout">
        {/* Colonne gauche */}
        <aside className="left-services-column">
          <h2 className="left-column-title">AUTRES SERVICES</h2>

          <div className="simple-service-box">
            <span className="service-name">Coupe enfants</span>
            <span className="service-price">15€</span>
          </div>
          <div className="simple-service-box">
            <span className="service-name">Coupe enfants</span>
            <span className="service-price">15€</span>
          </div>
          <div className="simple-service-box">
            <span className="service-name">Coupe enfants</span>
            <span className="service-price">15€</span>
          </div>
          <div className="simple-service-box">
            <span className="service-name">Coupe enfants</span>
            <span className="service-price">15€</span>
          </div>
          <div className="simple-service-box">
            <span className="service-name">Coupe enfants</span>
            <span className="service-price">15€</span>
          </div>

          <div className="rdv-container">
            <button className="rdv-button" onClick={handleRdvClick}>
              PRENDRE RENDEZ-VOUS
            </button>
          </div>
        </aside>

        {/* Cartes */}
        <div className="cards-section">
          {[femmeImage1, femmeImage2, femmeImage3].map((img, index) => (
            <div className="service-card" key={index}>
              <div className="card-image-wrapper">
                <img src={img} alt="Coupe Femme" className="card-image" />
                <div className="price-badge">30,00€</div>
              </div>

              <div className="card-content">
                <h3 className="card-title-simple">COUPE FEMME</h3>
                <p className="card-description">Shampoing + Coiffage</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
