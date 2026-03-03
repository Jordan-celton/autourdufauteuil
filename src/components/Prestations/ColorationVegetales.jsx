import React from "react";
import ConseilLongueurCheveux from "./ConseilLongueurCheveux";
import HeroSection from "../HeroSection";
import heroImage from "../../assets/Home/2023-03-21.webp";
import conseilColorationVegetaleImage from "../../assets/Services/Végétales/31-Autourdufauteuil-Aurore_PHOTOS_0034 1.png";
import decorImage from "../../assets/Services/Coloration/31-Autourdufauteuil-Aurore_PHOTOS_0059 2.png";
import "../../styles/Prestations/Coupes.css";

const PrestationCoiffure = () => {
  const sections = [
    {
      title: "COLORATIONS VÉGÉTALES",
      items: [
        {
          name: "Coloration végétale : 1 temps clair + coupe",
          duration: "1h45",
        },
        {
          name: "Coloration végétale : 1 temps foncé + coupe",
          duration: "2h15",
        },
        {
          name: "Coloration végétale : 2 temps reste sans coupe",
          duration: "3h00",
        },
        {
          name: "Coloration végétale : 2 temps reste avec coupe",
          duration: "3h15",
        },
        { name: "Coloration végétale : 2 temps sans coupe", duration: "3h15" },
        {
          name: "Coloration végétale : 2 temps pars avec sans coupe",
          duration: "3h30",
        },
        {
          name: "Coloration végétale : 2 temps pars avec + coupe",
          duration: "2h00",
        },
      ],
    },
    {
      title: "SOIN GREEN BOTOX",
      items: [
        {
          name: "Soin green botox + brushing",
          duration: "1h45",
          price: "70 €",
        },
        {
          name: "Soin green botox + brushing",
          duration: "2h00",
          price: "75 €",
        },
        {
          name: "Soin green botox + brushing",
          duration: "2h00",
          price: "80 €",
        },
        {
          name: "Soin botox + coupe + brushing",
          duration: "2h00",
          price: "100 €",
        },
        {
          name: "Soin green botox + coupe + brushing",
          duration: "2h15",
          price: "105 €",
        },
        {
          name: "Soin green botox + coupe + brushing",
          duration: "2h30",
          price: "20 €",
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
      <ConseilLongueurCheveux image={conseilColorationVegetaleImage} />

      <div className="prestations-container">
        <div className="header-prestations">
          <span className="sous-titre-prestations">Prestations</span>
          <h1 className="titre-principal-prestations">SOINS & VÉGÉTAL</h1>
        </div>

        <div className="main-pricing-container">
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

          <div
            className="background-decor-image"
            style={{ backgroundImage: `url(${decorImage})` }}
          />
        </div>
      </div>
    </>
  );
};

export default PrestationCoiffure;
