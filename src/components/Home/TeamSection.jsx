import React from "react";
import "../../styles/Home/TeamSection.css";

import lauraImg from "../../assets/Home/2023-03-21.webp";
import isabelleImg from "../../assets/Home/2023-03-21.webp";

const TeamSection = () => {
  return (
    <section className="team-section">
      {/* Header */}
      <div className="team-header">
        <span className="team-script-title">Notre Équipe</span>
        <h2 className="team-main-title">ELLES VOUS COIFFENT</h2>
      </div>

      {/* Photos */}
      <div className="team-members">
        <div className="team-member">
          <img src={lauraImg} alt="Laura" className="member-photo" />
          <span className="member-name-script">Laura</span>
        </div>

        <div className="team-member">
          <img src={isabelleImg} alt="Isabelle" className="member-photo" />
          <span className="member-name-script">Isabelle</span>
        </div>
      </div>

      {/* Texte */}
      <div className="team-text">
        <h3 className="team-subtitle">UNE ÉQUIPE PASSIONNÉE</h3>
        <p className="team-description">
          Spécialisées en coupe, balayage et coloration végétale, nos coiffeuses
          mettent leur expertise au service de votre beauté, dans un esprit
          doux, naturel et authentique.
        </p>
      </div>
    </section>
  );
};

export default TeamSection;
