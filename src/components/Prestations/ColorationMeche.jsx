import React from "react";
import "../../styles/Prestations/Coupes.css";
import natuliqueImage from "../../assets/Services/Coloration/31-Autourdufauteuil-Aurore_PHOTOS_0059 2.png";

import ConseilLongueurCheveux from "./ConseilLongueurCheveux";
import ConseilColorationImage from "../../assets/Services/Coloration/31-Autourdufauteuil-Aurore_PHOTOS_0034 1.png";
import HeroSection from "../HeroSection";
import heroImage from "../../assets/Services/Coloration/31-Autourdufauteuil-Aurore_PHOTOS_0068 1.png";

const ColorationMeche = () => {
  const sections = [
    {
      titre: "Colorations",
      items: [
        { nom: "Coloration racine + brushing", duree: "1h30", prix: "66 €" },
        {
          nom: "Coloration racines + longueurs + brushing",
          duree: "1h30",
          prix: "70 €",
        },
        {
          nom: "Coloration racines + coupe + brushing",
          duree: "1h45",
          prix: "75 €",
        },
        {
          nom: "Coloration racines + longueurs + coupe + brushing",
          duree: "1h45",
          prix: "82 €",
        },
        {
          nom: "Col. racines + éclaircissement + coupe + brushing",
          duree: "2h00",
          prix: "85 €",
        },
      ],
    },
    {
      titre: "Colorations & Mèches",
      items: [
        { nom: "Coloration + mèches + brushing", duree: "2h00" },
        { nom: "Coloration + mèches + coupe + brushing", duree: "2h15" },
        { nom: "Coloration + mèches + patine + brushing", duree: "2h30" },
        {
          nom: "Coloration + mèches + patine + coupe + brushing",
          duree: "2h30",
        },
      ],
    },
    {
      titre: "Balayages & Mèches",
      items: [
        {
          nom: "Balayage + Coupe + Soin + Brushing",
          duree: "30 min",
          prix: "34 €",
        },
        {
          nom: "Balayage + Coupe + Soin + Brushing longs ou épais",
          duree: "45 min",
          prix: "30 €",
        },
        {
          nom: "Balayage + Coupe + Patine + Soin + Brushing",
          duree: "30 min",
          prix: "35 €",
        },
        {
          nom: "Shampoing + Coupe + Patine + Soin + Brushing longs",
          duree: "45 min",
          prix: "39 €",
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
          <h1 className="titre-principal-prestations">COLORATIONS & MÈCHES</h1>
        </div>

        <div className="main-pricing-container">
          {/* Colonne Gauche : Contenu */}
          <div className="content-pricing-wrapper">
            {sections.map((section, idx) => (
              <div key={idx} className="section-coupe">
                <h2 className="titre-section">{section.titre}</h2>
                <div className="liste-prestations-card">
                  {section.items.map((item, i) => (
                    <div key={i} className="prestations-item">
                      <span className="nom-prestations">{item.nom}</span>
                      <div className="prestation-details">
                        <span className="badge-duree">{item.duree}</span>
                        {item.prix && (
                          <span className="badge-prix">{item.prix}</span>
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
