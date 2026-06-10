import React from "react";
import { Helmet } from "react-helmet-async";
import "../../styles/Home/TeamSection.css";
import auroreImg from "../../assets/Home/31-Autourdufauteuil-Aurore_PHOTOS_0086.webp";

const TeamSection = () => {
  const teamJsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "Autour du Fauteuil",
    employee: {
      "@type": "Person",
      name: "Aurore",
      jobTitle: "Gérante et Coiffeuse",
      image: auroreImg,
    },
  };

  return (
    <section className="team-section" aria-label="L'équipe du salon">
      {/* SEO CLEAN */}
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(teamJsonLd)}</script>
      </Helmet>

      {/* HEADER */}
      <div className="team-header">
        <span className="team-section-title" aria-hidden="true">
          Savoir-Faire
        </span>

        <h2 className="team-main-title">ELLE VOUS COIFFE</h2>
      </div>

      {/* PHOTO */}
      <div className="team-members">
        <div className="team-member">
          <img
            src={auroreImg}
            alt="Aurore, gérante et coiffeuse du salon Autour du Fauteuil"
            className="member-photo"
            loading="lazy"
            decoding="async"
          />

          <span className="member-name-script" aria-hidden="true">
            Aurore
          </span>
        </div>
      </div>

      {/* TEXT */}
      <div className="team-text">
        <h3 className="team-subtitle">L'ESPRIT DU SALON</h3>

        <blockquote className="team-quote">
          <p className="team-description">
            "Je perpétue avec cœur l'héritage familial en offrant un salon où
            plantes, soin et douceur prennent soin de chaque chevelure."
          </p>
        </blockquote>
      </div>
    </section>
  );
};

export default TeamSection;
