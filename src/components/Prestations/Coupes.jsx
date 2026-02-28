import React from "react";
import HeroSection from "../HeroSection";
import ConseilLongueurCheveux from "../Prestations/ConseilLongueurCheveux";
import heroImage from "../../assets/Services/31-Autourdufauteuil-Aurore_PHOTOS_0068 1.png";
import decorImage from "../../assets/Services/31-Autourdufauteuil-Aurore_PHOTOS_0059 1.png";
import "../../styles/Prestations/Coupes.css";

const Coupes = () => {
  const menuData = [
    {
      title: "HOMMES",
      items: [
        {
          name: "Shampoing + Coupe + Coiffage",
          duration: "30 min",
          price: "21 €",
        },
        {
          name: "Shampoing + Coupe + Coiffage + Barbe",
          duration: "30 min",
          price: "21 €",
        },
        { name: "Barbe", duration: "30 min", price: "21 €" },
      ],
    },
    {
      title: "FEMMES",
      items: [
        { name: "Shampoing + Coiffage", duration: "30 min", price: "34 €" },
        { name: "Shampoing + Coiffage", duration: "45 min", price: "30 €" },
        {
          name: "Shampoing + Coupe + Coiffage",
          duration: "30 min",
          price: "35 €",
        },
        {
          name: "Shampoing + Coupe + Coiffage",
          duration: "45 min",
          price: "39 €",
        },
        { name: "Diagnostic", duration: "15 min", price: null },
        { name: "Argile", duration: "15 min", price: "20 €" },
        { name: "Hair Bond Soin - XL", duration: "30 min", price: "50 €" },
        {
          name: "Hair Bond - Lotion technique + Masque",
          duration: "30 min",
          price: "50 €",
        },
        {
          name: "Gommage cuir chevelu - Produits BIO",
          duration: "15 min",
          price: "20 €",
        },
      ],
    },
    {
      title: "ENFANTS",
      items: [
        {
          name: "Coupe enfant (jusqu'à 12 ans)",
          duration: "30 min",
          price: "15 €",
        },
        {
          name: "Coupe fille (de 13 à 18 ans)",
          duration: "30 min",
          price: "20 €",
        },
        {
          name: "Coupe garçon (de 13 à 18 ans)",
          duration: "30 min",
          price: "18 €",
        },
      ],
    },
  ];

  return (
    <div className="page-coupes">
      <HeroSection
        image={heroImage}
        subtitle="Nos Services"
        title="PRESTATIONS"
      />
      <ConseilLongueurCheveux />
      <div className="prestations-container">
        <div className="header-prestations">
          <span className="sous-titre-prestations">Prestations</span>
          <h1 className="titre-principal-prestations">COUPES</h1>
        </div>
        <div className="main-pricing-container">
          {/* Colonne Gauche : Contenu */}
          <div className="content-pricing-wrapper">
            {menuData.map((section, idx) => (
              <div key={idx} className="section-coupe">
                <h2 className="titre-section">{section.title}</h2>
                <div className="liste-prestations-card">
                  {section.items.map((item, i) => (
                    <div key={i} className="prestations-item">
                      <span className="nom-prestations">{item.name}</span>
                      <div className="prestation-details">
                        <span className="badge-duree">{item.duration}</span>
                        {item.price && (
                          <span className="badge-prix">{item.price}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Colonne Droite : Image fixe */}
          <div
            className="background-decor-image"
            style={{ backgroundImage: `url(${decorImage})` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Coupes;
