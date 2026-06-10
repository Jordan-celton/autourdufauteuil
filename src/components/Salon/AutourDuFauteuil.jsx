import React from "react";
import { Helmet } from "react-helmet-async";
import "../../styles/Salon/AutourDuFauteuil.css";
import auroreSalon from "../../assets/Salon/31-Autourdufauteuil-Aurore_PHOTOS_0034.webp";

const AutourDuFauteuil = () => {
  const histoireJsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "Autour du Fauteuil",
    description:
      "Salon familial à l'Île-Tudy spécialisé en coloration végétale depuis plus de 13 ans.",
    brand: [
      {
        "@type": "Brand",
        name: "L’Envolée des Couleurs",
      },
      {
        "@type": "Brand",
        name: "Gaïa",
      },
    ],
    knowsAbout: [
      "Coloration végétale",
      "Plantes ayurvédiques",
      "Soin du cuir chevelu",
    ],
  };

  return (
    <section className="fauteuil-container" aria-label="Histoire du salon">
      {/* SEO CLEAN */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(histoireJsonLd)}
        </script>
      </Helmet>

      {/* BACKGROUND */}
      <div className="background-pattern" aria-hidden="true" />

      <div className="fauteuil-content">
        {/* TEXTE */}
        <div className="fauteuil-text">
          <h1>
            AUTOUR DU FAUTEUIL,
            <br />
            UNE HISTOIRE DE FAMILLE
          </h1>

          <div className="text-body">
            <p>
              Salon familial transmis de mère en fille, Autour du Fauteuil
              accompagne ses clients depuis plus de 20 ans.
            </p>

            <p>
              Spécialisé en coloration végétale depuis plus de 13 ans, le salon
              travaille avec des marques reconnues comme L’Envolée des Couleurs
              et Gaïa.
            </p>

            <p>
              À deux pas de la mer, le salon est pensé comme un cocon de
              bien-être et de détente.
            </p>
          </div>
        </div>

        {/* IMAGE */}
        <div className="fauteuil-image">
          <img
            src={auroreSalon}
            alt="Aurore réalisant une coloration végétale au salon Autour du Fauteuil"
            loading="lazy"
            decoding="async"
            width="600"
            height="800"
          />
        </div>
      </div>
    </section>
  );
};

export default AutourDuFauteuil;
