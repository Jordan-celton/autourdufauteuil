import React from "react";
import HeroSection from "../HeroSection";
import ConseilLongueurCheveux from "../Prestations/ConseilLongueurCheveux";
import conseilLongueurImage from "../../assets/Services/31-Autourdufauteuil-Aurore_PHOTOS_0034 1.png";
import heroImage from "../../assets/Salon/31-Autourdufauteuil-Aurore_PHOTOS_0068 1.png";
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
          price: "24 €",
        },
        {
          name: "Shampoing + Coupe + Coiffage + Barbe",
          duration: "45 min",
          price: "35 €",
        },
        { name: "Barbe", duration: "15 min", price: "11 €" },
      ],
    },
    {
      title: "Femmes - Forfait coupe et forfait brushing",
      items: [
        {
          name: "Shampoing + coupe cheveux très court + coiffage naturel (Cheveux au dessus des oreilles)",
          duration: "30min",
          price: "36 €",
        },
        {
          name: "Shampoing + coupe cheveux court + brushing",
          duration: "30min",
          price: "41 €",
        },
        {
          name: "Shampoing + coupe cheveux mi long + brushing",
          duration: "45min",
          price: "à partir de 43 €",
        },
        {
          name: "Shampoing + coupe cheveux long + brushing",
          duration: "45min",
          price: "à partir de 47 €",
        },
        {
          name: "Shampoing + brushing cheveux courts",
          duration: "30min",
          price: "30 €",
        },
        {
          name: "Shampoing + brushing cheveux mi long",
          duration: "30min",
          price: "à partir de 35 €",
        },
        {
          name: "Shampoing + brushing cheveux long",
          duration: "30min",
          price: "40 €",
        },
        {
          name: "Wavy utilisation du fer",
          duration: "5min",
          price: "5 €",
        },
      ],
    },
    {
      title: "Enfants",
      items: [
        {
          name: "Coupe bébé sans shampooing - 4ans",
          duration: "30min",
          price: "15 €",
        },
        {
          name: "Coupe enfant (jusqu'a 12 ans) sans shampoing",
          duration: "30min",
          price: "18 €",
        },
        {
          name: "Coupe enfant (jusqu’à 12ans) avec shampoing",
          duration: "30min",
          price: "20 €",
        },
        {
          name: "Coupe fille (de 13 à 18 ans)",
          duration: "30min",
          price: "30 €",
        },
        {
          name: "Coupe garçon (de 13 à 18 ans)",
          duration: "30min",
          price: "21 €",
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
      <ConseilLongueurCheveux image={conseilLongueurImage} />
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
