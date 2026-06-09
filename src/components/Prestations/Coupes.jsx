import React, { useEffect } from "react";
import { motion } from "framer-motion"; // 1. Import de motion
import HeroSection from "../HeroSection";
import ConseilLongueurCheveux from "../Prestations/ConseilLongueurCheveux";
import ScrollReveal from "../ScrollReveal"; // 2. Import du ScrollReveal centralisé

import conseilLongueurImage from "../../assets/Services/31-Autourdufauteuil-Aurore_PHOTOS_0096.webp";
import heroImage from "../../assets/Services/31-Autourdufauteuil-Aurore_PHOTOS_0072.webp";
import decorImage from "../../assets/Services/31-Autourdufauteuil-Aurore_PHOTOS_0078.webp";
import "../../styles/Prestations/Coupes.css";

const MotionDiv = motion.div;

const Coupes = () => {
  // 👑 AJOUT SEO : Métadonnées dynamiques et balise description pour Google
  useEffect(() => {
    document.title =
      "Tarifs Coupes Hommes, Femmes & Enfants | Autour du Fauteuil";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content =
      "Découvrez nos tarifs de coiffure à l'Île-Tudy : forfaits coupes et brushings pour femmes selon la longueur, coupes hommes, barbe, et forfaits enfants.";
  }, []);

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

  // 👑 AJOUT SEO : Structuration sémantique de la grille tarifaire des coupes pour Google
  const coupesMenuJsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "Autour du Fauteuil",
    hasMenu: {
      "@type": "Menu",
      name: "Tarifs Coupes et Coiffages",
      hasMenuSection: menuData.map((section) => ({
        "@type": "MenuSection",
        name: section.title,
        hasMenuItem: section.items.map((item) => ({
          "@type": "MenuItem",
          name: item.name,
          offers: item.price
            ? {
                "@type": "Offer",
                price: item.price.replace(/[^0-9]/g, ""),
                priceCurrency: "EUR",
              }
            : undefined,
        })),
      })),
    },
  };

  return (
    <div className="page-coupes">
      {/* Script invisible d'injection des données pour le référencement local */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coupesMenuJsonLd) }}
      />

      {/* Animation immédiate au chargement pour le Hero */}
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

      {/* Le bloc conseil apparaît en douceur au scroll */}
      <ScrollReveal variant="fadeUp">
        <ConseilLongueurCheveux image={conseilLongueurImage} />
      </ScrollReveal>

      <div className="prestations-container-coupes">
        <div className="header-prestations">
          <span className="sous-titre-prestations">Prestations</span>
          <h1 className="titre-principal-prestations">COUPES</h1>
        </div>

        <div className="main-pricing-container">
          {/* Colonne Gauche : Contenu */}
          <div className="content-pricing-wrapper">
            {menuData.map((section, idx) => (
              /* On place le ScrollReveal directement ici ! 
                  Chaque section (Hommes, Femmes, Enfants) va s'animer 
                  l'une après l'autre au fur et à mesure que l'utilisateur descend.
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

          {/* Colonne Droite : Image fixe */}
          {/* On applique un zoom doux à l'image de décoration pour une entrée élégante */}
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
    </div>
  );
};

export default Coupes;
