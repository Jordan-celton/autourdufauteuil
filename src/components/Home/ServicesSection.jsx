import React from "react";
import "../../styles/Home/ServicesSection.css";

// Importez vos images - remplacez ces chemins par les vôtres
import femmeImage1 from "../../assets/Home/2023-03-21.webp";
import femmeImage2 from "../../assets/Home/2023-03-21.webp";
import femmeImage3 from "../../assets/Home/2023-03-21.webp";

const ServicesSection = () => {
  const handleRdvClick = () => {
    window.location.href = "/rendez-vous";
  };

  return (
    <div className="services-container">
      <div className="services-header">
        <h1 className="main-title">CE QUE NOUS PROPOSONS</h1>
        <span className="services-subtitle">Nos Services</span>
      </div>
      {/* Layout principal : colonne gauche + cards à droite */}
      <div className="services-layout">
        {/* Colonne gauche : autres services */}
        <div className="left-services-column">
          <h2 className="left-column-title">AUTRES SERVICES</h2>

          <div className="simple-service-box">
            <div className="service-name">Coupe enfants</div>
            <div className="service-price">15€</div>
          </div>
          <div className="simple-service-box">
            <div className="service-name">Coupe enfants</div>
            <div className="service-price">15€</div>
          </div>
          <div className="simple-service-box">
            <div className="service-name">Coupe enfants</div>
            <div className="service-price">15€</div>
          </div>
          <div className="simple-service-box">
            <div className="service-name">Coupe enfants</div>
            <div className="service-price">15€</div>
          </div>
          <div className="simple-service-box">
            <div className="service-name">Coupe enfants</div>
            <div className="service-price">15€</div>
          </div>

          {/* Bouton RDV */}
          <div className="rdv-container">
            <button className="rdv-button" onClick={handleRdvClick}>
              PRENDRE RENDEZ-VOUS
            </button>
          </div>
        </div>

        {/* Section cartes à droite */}
        <div className="cards-section">
          {/* Carte 1 */}
          <div className="service-card">
            <div className="card-image-wrapper">
              <img src={femmeImage1} alt="Coupe Femme" className="card-image" />
            </div>
            <div className="card-content">
              <h2 className="card-title-simple">Coupe Femme</h2>
              <div className="main-price">30,00€</div>
              <div className="card-description">Shampoing + Coiffage</div>
            </div>
          </div>

          {/* Carte 2 */}
          <div className="service-card">
            <div className="card-image-wrapper">
              <img src={femmeImage2} alt="Coupe Femme" className="card-image" />
            </div>
            <div className="card-content">
              <h2 className="card-title-simple">Coupe Femme</h2>
              <div className="main-price">30,00€</div>
              <div className="card-description">Shampoing + Coiffage</div>
            </div>
          </div>

          {/* Carte 3 */}
          <div className="service-card">
            <div className="card-image-wrapper">
              <img src={femmeImage3} alt="Coupe Femme" className="card-image" />
            </div>
            <div className="card-content">
              <h2 className="card-title-simple">Coupe Femme</h2>
              <div className="main-price">30,00€</div>
              <div className="card-description">Shampoing + Coiffage</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
