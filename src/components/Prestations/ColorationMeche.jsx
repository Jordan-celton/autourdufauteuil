import React from "react";
import "../../styles/Prestations/Coupes.css";
import natuliqueImage from "../../assets/Services/Coloration/31-Autourdufauteuil-Aurore_PHOTOS_0059 2.png";

import ConseilLongueurCheveux from "./ConseilLongueurCheveux";
import ConseilColorationImage from "../../assets/Home/31-Autourdufauteuil-Aurore_PHOTOS_0059 1.png";
import HeroSection from "../HeroSection";
import heroImage from "../../assets/Services/Coloration/31-Autourdufauteuil-Aurore_PHOTOS_0034 1.png";

const ColorationMeche = () => {
  const sections = [
    {
      title: "COLORATION",
      items: [
        {
          name: "Couleur racine + brushing cheveux court",
          duration: "1h 30min",
          price: "68 €",
        },
        {
          name: "Couleur racine + brushing cheveux mi long",
          duration: "1h 45min",
          price: "74 €",
        },
        {
          name: "Couleur racine + brushing cheveux long",
          duration: "1h 45min",
          price: "74 €",
        },
        {
          name: "Couleur racine + coupe + brushing (Un soin peut vous être conseillé)",
          duration: "1h 45min",
          price: "84 €",
        },
        {
          name: "Couleur + shampoing + coupe cheveux long + brushing",
          duration: "1h 45min",
          price: "86 €",
        },
      ],
    },
    {
      title: "COLORATIONS & MÈCHES",
      items: [
        { name: "Coloration + mèches + brushing", duration: "2h00" },
        { name: "Coloration + mèches + coupe + brushing", duration: "2h15" },
        { name: "Coloration + mèches + patine + brushing", duration: "2h30" },
        {
          name: "Coloration + mèches + patine + coupe + brushing",
          duration: "2h30",
        },
      ],
    },
    {
      title: "BALAYAGE / MÈCHES",
      items: [
        {
          name: "Balayage cheveux courts ou mi long sans coupe (Cheveux mi long ou court sans coupe)",
          duration: "1h 45min",
          price: "de 80 € à 100 €",
        },
        {
          name: "Balayage cheveux court ou mi long avec coupe (Cheveux mi long ou court avec coupe)",
          duration: "2h 15min",
          price: "de 90 € à 120 €",
        },
        {
          name: "Balayage cheveux courts ou mi long coupe + patine",
          duration: "3h",
          price: "de 105 € à 125 €",
        },
        {
          name: "Balayage cheveux long sans coupe",
          duration: "2h 15min",
          price: "de 90 € à 120 €",
        },
        {
          name: "Balayage cheveux long avec coupe (Cheveux très long et ou épais avec coupe)",
          duration: "2h 30min",
          price: "de 100 € à 130 €",
        },
        {
          name: "Balayage cheveux long avec coupe et patine (Cheveux long et ou épais avec coupe)",
          duration: "2h 30min",
          price: "de 100 € à 145 €",
        },
        {
          name: "Flash dans la couleur",
          duration: "15min",
          price: "15 €",
        },
      ],
    },
  ];

  return (
    <>
      <HeroSection
        image={heroImage}
        subtitle="Nos Services"
        title="PRESTATIONS"
      />
      <ConseilLongueurCheveux image={ConseilColorationImage} />
      <div className="prestations-container">
        {/* Header : réutilisation de la structure titre/sous-titre */}
        <div className="header-prestations">
          <span className="sous-titre-prestations">Prestations</span>
          <h1 className="titre-principal-prestations">
            COLORATIONS, BALAYAGES, MÈCHES
          </h1>
        </div>

        <div className="main-pricing-container">
          {/* Colonne Gauche : Contenu */}
          <div className="content-pricing-wrapper">
            {sections.map((section, idx) => (
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

          {/* Colonne Droite : Image fixe (réutilisation de la classe existante) */}
          <div
            className="background-decor-image"
            style={{ backgroundImage: `url(${natuliqueImage})` }}
          />
        </div>
      </div>
    </>
  );
};

export default ColorationMeche;
