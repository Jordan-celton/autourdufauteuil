import React from "react";
import { motion } from "framer-motion"; // 1. Import de motion
import ConseilLongueurCheveux from "./ConseilLongueurCheveux";
import HeroSection from "../HeroSection";
import ScrollReveal from "../ScrollReveal"; // 2. Import du ScrollReveal centralisé

import heroImage from "../../assets/Services/Végétales/31-Autourdufauteuil-Aurore_PHOTOS_0016.webp";
import conseilColorationVegetaleImage from "../../assets/Services/Végétales/31-Autourdufauteuil-Aurore_PHOTOS_0094.webp";
import decorImage from "../../assets/Home/31-Autourdufauteuil-Aurore_PHOTOS_0024.webp";
import "../../styles/Prestations/Coupes.css";

const MotionDiv = motion.div;

const PrestationCoiffure = () => {
  const sections = [
    {
      title: "Coloration végétale",
      items: [
        {
          name: "Coloration végétale : 1 temps + coupe",
          duration: "2h",
          price: "90 €",
        },
        {
          name: "Coloration végétale : 1 temps sans coupe",
          duration: "1h 45min",
          price: "70 €",
        },
        {
          name: "Coloration végétale : 2 temps reste sans coupe",
          duration: "2h 45min",
          price: "90 €",
        },
        {
          name: "Coloration végétale : 2 temps reste avec coupe",
          duration: "3h 15min",
          price: "99 €",
        },
        {
          name: "Coloration végétale : 2 temps pars avec sans coupe",
          duration: "1h 30min",
          price: "70 €",
        },
        {
          name: "Coloration végétale : 2 temps pars avec + coupe",
          duration: "2h",
          price: "81 €",
        },
      ],
    },
    {
      title: "Soin green botox",
      items: [
        {
          name: "Soin green botox - brushing - cheveux courts",
          duration: "1h 45min",
          price: "70 €",
        },
        {
          name: "Soin green botox - brushing - cheveux mi long",
          duration: "2h",
          price: "75 €",
        },
        {
          name: "Soin green botox - brushing - cheveux longs",
          duration: "2h",
          price: "80 €",
        },
        {
          name: "Soin botox - coupe brushing - cheveux courts",
          duration: "2h",
          price: "100 €",
        },
        {
          name: "Soin green botox - coupe brushing - cheveux mi long",
          duration: "2h 15min",
          price: "105 €",
        },
        {
          name: "Soin green botox - coupe brushing - cheveux longs",
          duration: "2h 15min",
          price: "120 €",
        },
      ],
    },
    {
      title: "Femme soin",
      items: [
        {
          name: "Argile",
          duration: "15min",
          price: "21 €",
        },
        {
          name: "Hair bond soin xl",
          duration: "30min",
          price: "50 €",
        },
        {
          name: "Hair bond (lotion tehcnique + masque)",
          duration: "30min",
          price: "50 €",
        },
        {
          name: "Green detox",
          duration: "15min",
          price: "25 €",
        },
        {
          name: "Soin bac",
          duration: "5min",
          price: "6 €",
        },
        {
          name: "Diagnostic",
          duration: "15min",
          price: null,
        },
      ],
    },
  ];

  return (
    <>
      {/* Animation d'intro fluide pour le Hero au chargement */}
      <MotionDiv
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
      >
        <HeroSection
          image={heroImage}
          subtitle="Nos Services"
          title="PRESTATIONS"
        />
      </MotionDiv>

      {/* Le conseil sur la coloration végétale apparaît au scroll */}
      <ScrollReveal variant="fadeUp">
        <ConseilLongueurCheveux image={conseilColorationVegetaleImage} />
      </ScrollReveal>

      <div className="prestations-container-vegetales">
        <div className="header-prestations">
          <span className="sous-titre-prestations-vegetales">Prestations</span>
          <h1 className="titre-principal-prestations">SOINS & VÉGÉTAL</h1>
        </div>

        <div className="main-pricing-container">
          {/* Colonne Gauche : Liste des prestations */}
          <div className="content-pricing-wrapper">
            {sections.map((section, idx) => (
              /* Chaque bloc de soin (Coloration, Green Botox, Femme Soin) 
                 va s'animer séparément au fur et à mesure du scroll 
              */
              <ScrollReveal key={idx} variant="fadeUp">
                <div className="section-coupe">
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
              </ScrollReveal>
            ))}
          </div>

          {/* Colonne Droite : Image de décoration fixe */}
          {/* Un conteneur propre enveloppe le ScrollReveal pour préserver la mise en page CSS */}
          <div
            className="content-pricing-wrapper-image"
            style={{ width: "100%", height: "100%" }}
          >
            <ScrollReveal variant="scaleUp">
              <div
                className="background-decor-image"
                style={{
                  backgroundImage: `url(${decorImage})`,
                  width: "100%",
                  height: "100%",
                }}
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrestationCoiffure;
