import React from "react";
import "../../styles/Salon/EmployeeProfile.css";
// Import de l'image si nécessaire
import auroreImg from "../../assets/Salon/31-Autourdufauteuil-Aurore_PHOTOS_0086.webp";

const EmployeeProfile = () => {
  return (
    <section className="employee-section">
      {/* Titre de fond décoratif */}
      <div className="background-title">Notre Équipe</div>

      <div className="employee-content">
        <h2 className="main-title">ELLE VOUS COIFFE</h2>

        <div className="image-wrapper">
          <img src={auroreImg} alt="Aurore" className="profile-photo" />
          {/* Nom manuscrit qui chevauche l'image */}
          <span className="signature-name">Aurore</span>
        </div>

        <div className="text-content">
          <h3 className="concept-title">L'ESPRIT DU SALON</h3>
          <p className="quote">
            “ Je perpétue avec cœur l’héritage de ma maman en offrant un salon
            de coiffure où les plantes, le soin et la douceur prennent soin de
            chaque chevelure dans notre cocon familial. ”
          </p>
        </div>
      </div>

      {/* Les vagues décoratives en fond (optionnel, via CSS ou SVG) */}
      <div className="decorative-waves"></div>
    </section>
  );
};

export default EmployeeProfile;
