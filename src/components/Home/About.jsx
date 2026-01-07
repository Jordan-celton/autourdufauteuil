// About.jsx
import React from "react";
import "../../styles/Home/About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-header">
          <h2>LE SALON A L'ECOUTE DE VOS CHEVEUX</h2>
          <img
            src="/assets/about-salon.jpg"
            alt="Intérieur du salon de coiffure Autour du Fauteuil"
            className="about-image"
          />
        </div>
        <div className="about-content">
          <p>
            Autour du Fauteuil est bien plus qu’un salon de coiffure. C’est un
            espace convivial, baigné de lumière, où nous prenons le temps de
            vous écouter et de sublimer vos envies. Chaque visite est un moment
            de détente, entre authenticité et professionnalisme.
          </p>
        </div>
        <div className="about-address">
          <p>Autour du Fauteuil</p>
          <p>1, avenue du Teven</p>
          <p>29980 Ile-tudy</p>
        </div>
        <div className="about-hours">
          <p>HORAIRES DU SALON</p>
          <p>Lundi : 14h00 - 18h00</p>
          <p>Mardi au vendredi : 09h30 - 18h00</p>
          <p>Dimanche : fermé</p>
        </div>
      </div>
    </section>
  );
};

export default About;
