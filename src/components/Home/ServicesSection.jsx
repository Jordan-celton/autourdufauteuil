import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../../styles/Home/ServicesSection.css";

import femmeImage1 from "../../assets/Home/31-Autourdufauteuil-Aurore_PHOTOS_0068.webp";
import femmeImage2 from "../../assets/Home/31-Autourdufauteuil-Aurore_PHOTOS_0032.webp";
import femmeImage3 from "../../assets/Home/31-Autourdufauteuil-Aurore_PHOTOS_0024.webp";

const ServicesSection = () => {
  const services = [
    {
      img: femmeImage1,
      title: "Coupe Femme",
      path: "/prestations/coupes",
      displayTitle: (
        <>
          COUPE <br /> FEMME
        </>
      ),
      description: "Shampoing + Coiffage",
    },
    {
      img: femmeImage2,
      title: "Couleur Végétale",
      path: "/prestations/colorations",
      displayTitle: <>COULEUR VÉGÉTALE</>,
      description: "Shampoing + Coupe + Coiffage",
    },
    {
      img: femmeImage3,
      title: "Couleur Organique",
      path: "/prestations/vegetales",
      displayTitle: <>COULEUR ORGANIQUE</>,
      description: "Soin + Couleur sur mesure",
    },
  ];

  const autresPrestations = [
    { name: "Green Botox" },
    { name: "Balayage Argile" },
    { name: "Coiffage Wavy" },
    { name: "Green Detox" },
    { name: "Soins aux plantes ayurvédiques" },
  ];

  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "Autour du Fauteuil",
    hasMenu: {
      "@type": "Menu",
      name: "Prestations Coiffure",
      hasMenuSection: [
        {
          "@type": "MenuSection",
          name: "Prestations Signatures",
          hasMenuItem: services.map((s) => ({
            "@type": "MenuItem",
            name: s.title,
            description: s.description,
          })),
        },
        {
          "@type": "MenuSection",
          name: "Autres Prestations",
          hasMenuItem: autresPrestations.map((ap) => ({
            "@type": "MenuItem",
            name: ap.name,
          })),
        },
      ],
    },
  };

  return (
    <section
      className="services-container"
      aria-label="Nos prestations et services"
    >
      {/* SEO JSON-LD */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(servicesJsonLd)}
        </script>
      </Helmet>

      {/* HEADER */}
      <div className="services-header">
        <span className="services-subtitle" aria-hidden="true">
          Nos Services
        </span>

        <h2 className="main-title">NOS PRESTATIONS SIGNATURES</h2>
      </div>

      {/* LAYOUT */}
      <div className="services-layout">
        {/* LEFT COLUMN */}
        <aside className="left-services-column">
          <h3 className="left-column-title">AUTRES PRESTATIONS</h3>

          <div className="simple-services-list">
            {autresPrestations.map((presta, index) => (
              <div className="simple-service-box" key={index}>
                <span className="service-name">{presta.name}</span>
                <span aria-hidden="true">+</span>
              </div>
            ))}
          </div>

          <div className="rdv-container">
            <a href="/prestations/coupes" className="rdv-button">
              TOUTES NOS PRESTATIONS
            </a>
          </div>
        </aside>

        {/* CARDS */}
        <div className="cards-section">
          {services.map((service, index) => (
            <article className="service-card" key={index}>
              <div className="card-image-wrapper">
                <img
                  src={service.img}
                  alt={`Service coiffure : ${service.title}`}
                  className="card-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="card-content">
                <div className="card-text">
                  <h3 className="card-title">{service.displayTitle}</h3>
                  <p className="card-description">{service.description}</p>
                </div>

                <Link
                  to={service.path}
                  className="card-cta"
                  aria-label={`En savoir plus sur ${service.title}`}
                >
                  LIRE PLUS
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
