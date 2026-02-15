import React from "react";
import "../../styles/Home/TeamSection.css";

import auroreImg from "../../assets/Home/31-Autourdufauteuil-Aurore_PHOTOS_0086 1.png";
// import isabelleImg from "../../assets/Home/2023-03-21.webp";

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
          <img src={auroreImg} alt="Aurore" className="member-photo" />
          <span className="member-name-script">Aurore</span>
        </div>

        {/* <div className="team-member">
          <img src={isabelleImg} alt="Isabelle" className="member-photo" />
          <span className="member-name-script">Isabelle</span>
        </div> */}
      </div>

      {/* Texte */}
      <div className="team-text">
        <h3 className="team-subtitle">L'ESPRIT DU SALON</h3>
        <p className="team-description">
          "Je perpétue avec coeur l'héritage de ma maman en offrant un salon de
          coiffure où les plantes, le soin et la douceur prennent soin de chaque
          chevelure dans notre cocon familial"
        </p>
      </div>
    </section>
  );
};

export default TeamSection;
