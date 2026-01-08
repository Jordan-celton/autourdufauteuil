import React from "react";
import "../../styles/Home/ServicesSection.css";

const ServicesSection = () => {
  const handleRdvClick = () => {
    alert("Redirection vers la prise de rendez-vous");
  };

  return (
    <div className="services-container">
      <h1 className="main-title">CE QUE NOUS PROPOSONS</h1>

      <div className="services-grid">
        {/* Colonne 1 */}
        <div className="services-column">
          <h2 className="section-title">AUTRES SERVICES</h2>
          <div className="service-items">
            <div className="service-item">
              <span>Coupe enfants</span>
              <span>15€</span>
            </div>
            <div className="service-item">
              <span>Coupe enfants</span>
              <span>15€</span>
            </div>
            <div className="service-item">
              <span>Coupe enfants</span>
              <span>15€</span>
            </div>
            <div className="service-item">
              <span>Coupe enfants</span>
              <span>15€</span>
            </div>
            <div className="service-item">
              <span>Coupe enfants</span>
              <span>15€</span>
            </div>
          </div>
          <button className="rdv-button" onClick={handleRdvClick}>
            PRENDRE RENDEZ-VOUS
          </button>
        </div>

        {/* Colonne 2 */}
        <div className="services-column">
          <h2 className="section-title">COUPE FEMME</h2>
          <div className="service-block">
            <div className="service-header">Shampoing + Coiffage</div>
            <div className="prices-grid">
              <div className="price-box">30,00€</div>
              <div className="price-box">30,00€</div>
              <div className="price-box">30,00€</div>
              <div className="price-box">30,00€</div>
            </div>
            <div className="service-footer">Shampoing + Coiffage</div>
          </div>
        </div>

        {/* Colonne 3 */}
        <div className="services-column">
          <h2 className="section-title">COUPE FEMME</h2>
          <div className="service-block">
            <div className="service-header">Shampoing + Coiffage</div>
            <div className="prices-grid">
              <div className="price-box">30,00€</div>
              <div className="price-box">30,00€</div>
              <div className="price-box">30,00€</div>
              <div className="price-box">30,00€</div>
            </div>
            <div className="service-footer">Shampoing + Coiffage</div>
          </div>
        </div>

        {/* Colonne 4 */}
        <div className="services-column">
          <h2 className="section-title">SERVICE SUPPLÉMENTAIRE</h2>
          <div className="service-items">
            <div className="service-item">
              <span>Brushing</span>
              <span>25€</span>
            </div>
            <div className="service-item">
              <span>Coloration</span>
              <span>45€</span>
            </div>
            <div className="service-item">
              <span>Mèches</span>
              <span>60€</span>
            </div>
            <div className="service-item">
              <span>Soins</span>
              <span>35€</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
