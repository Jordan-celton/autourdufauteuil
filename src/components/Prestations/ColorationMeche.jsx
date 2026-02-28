import React from "react";
import "../../styles/Prestations/ColorationMeche.css";
import natuliqueImage from "../../assets/Services/Coloration/31-Autourdufauteuil-Aurore_PHOTOS_0059 2.png";
import heroImage from "../../assets/Services/Coloration/31-Autourdufauteuil-Aurore_PHOTOS_0068 1.png";
import ConseilColorationImage from "../../assets/Services/Coloration/31-Autourdufauteuil-Aurore_PHOTOS_0034 1.png";

import HeroSection from "../HeroSection";
import ConseilLongueurCheveux from "../Prestations/ConseilLongueurCheveux";

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

      <div className="coloration-meche-page">
        <div className="main-grid">
          <div className="services-column">
            <h1 className="main-title">COLORATIONS, BALAYAGES, MÈCHES</h1>
            {sections.map((sec, i) => (
              <div key={i} className="section-coloration">
                <h2 className="section-subtitle">{sec.titre}</h2>
                <div className="liste-prestations">
                  {sec.items.map((item, j) => (
                    <div key={j} className="prestation-item">
                      <span className="nom-prestation">{item.nom}</span>
                      <div className="details-prestation">
                        <span className="duree">{item.duree}</span>
                        {item.prix && <span className="prix">{item.prix}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="image-column">
            <img
              src={natuliqueImage}
              alt="Prestations Natulique"
              className="service-image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorationMeche;
