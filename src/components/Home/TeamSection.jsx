import React from "react";
import "../../styles/Home/TeamSection.css";
import auroreImg from "../../assets/Home/31-Autourdufauteuil-Aurore_PHOTOS_0086.webp";

const TeamSection = () => {
  return (
    <section className="team-section" aria-label="L'équipe du salon">
      {/* Header */}
      <div className="team-header">
        {/* aria-hidden évite que le lecteur d'écran ne lise deux fois le titre du bloc */}
        <span className="team-section-title" aria-hidden="true">
          Savoir-Faire
        </span>
        <h2 className="team-main-title">ELLE VOUS COIFFE</h2>
      </div>

      {/* Photos */}
      <div className="team-members">
        <div className="team-member">
          <img
            src={auroreImg}
            alt="Aurore, gérante et coiffeuse du salon"
            className="member-photo"
          />
          <span className="member-name-script" aria-hidden="true">
            Aurore
          </span>
        </div>
      </div>

      {/* Texte */}
      <div className="team-text">
        <h3 className="team-subtitle">L'ESPRIT DU SALON</h3>
        <blockquote className="team-quote">
          <p className="team-description">
            "Je perpétue avec cœur l'héritage de ma maman en offrant un salon de
            coiffure où les plantes, le soin et la douceur prennent soin de
            chaque chevelure dans notre cocon familial"
          </p>
        </blockquote>
      </div>
    </section>
  );
};

export default TeamSection;
