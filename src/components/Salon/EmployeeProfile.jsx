import React from "react";
import "../../styles/Salon/EmployeeProfile.css";

const EmployeeProfile = ({ name, role, image, quote }) => {
  // Données par défaut basées sur votre texte
  const employeeData = {
    name: name || "Notre Coiffeuse",
    role: role || "Propriétaire & Styliste",
    image: image || "chemin/vers/image-profil.jpg",
    quote:
      quote ||
      "Je perpétue avec cœur l'héritage de ma maman en offrant un salon de coiffure où les plantes, le soin et la douceur prennent soin de chaque chevelure dans notre cocon familial.",
  };

  return (
    <div className="employee-profile">
      <div className="profile-header">
        <h1 className="salon-name">ELLE VOUS COIFFE</h1>
        <h2 className="salon-concept">L'ESPRIT DU SALON</h2>
      </div>

      <div className="profile-container">
        <div className="profile-image-container">
          <div className="image-placeholder">
            {employeeData.image ? (
              <img
                src={employeeData.image}
                alt={employeeData.name}
                className="profile-image"
              />
            ) : (
              <div className="default-avatar">
                <span className="avatar-icon">💇‍♀️</span>
              </div>
            )}
          </div>
        </div>

        <div className="profile-info">
          <h3 className="employee-name">{employeeData.name}</h3>
          <p className="employee-role">{employeeData.role}</p>

          <div className="employee-quote">
            <div className="quote-mark">"</div>
            <p className="quote-text">{employeeData.quote}</p>
            <div className="quote-mark">"</div>
          </div>

          <div className="profile-details">
            <div className="detail-item">
              <span className="detail-text">Approche naturelle & plantes</span>
            </div>
            <div className="detail-item">
              <span className="detail-text">Soin & douceur</span>
            </div>
            <div className="detail-item">
              <span className="detail-text">Cocon familial</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
