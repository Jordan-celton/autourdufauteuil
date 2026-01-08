import React from "react";
import "../../styles/Home/TeamSection.css";

const TeamSection = () => {
  return (
    <div className="team-section">
      <div className="team-container">
        {/* Titre principal */}
        <h2 className="team-main-title">ELLES VOUS COIFFENT</h2>

        <div className="team-content">
          {/* Sous-titre et description */}

          {/* Images de l'équipe - Placeholder pour 3 coiffeuses */}
          <div className="team-photos">
            <div className="team-member">
              <div className="member-photo">
                {/* Image placeholder - à remplacer par vos images */}
                <div className="photo-placeholder">
                  <span className="photo-text">Coiffeuse 1</span>
                </div>
              </div>
              <div className="member-info">
                <h4 className="member-name">Marie</h4>
              </div>
            </div>

            <div className="team-member">
              <div className="member-photo">
                <div className="photo-placeholder">
                  <span className="photo-text">Coiffeuse 2</span>
                </div>
              </div>
              <div className="member-info">
                <h4 className="member-name">Sophie</h4>
              </div>
            </div>
          </div>
          <div className="team-text-section">
            <h3 className="team-subtitle">UNE ÉQUIPE PASSIONNÉE</h3>
            <p className="team-description">
              Spécialisées en coupe, balayage et coloration végétale, nos
              coiffeuses mettent leur expertise au service de votre beauté, dans
              un esprit doux, naturel et authentique.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
