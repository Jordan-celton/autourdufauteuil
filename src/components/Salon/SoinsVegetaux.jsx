import React from "react";
import { Helmet } from "react-helmet-async";
import "../../styles/Salon/SoinsVegetaux.css";

import produitImg from "../../assets/Salon/31-Autourdufauteuil-Aurore_PHOTOS_0016.webp";

const SoinsVegetaux = () => {
  const soinsJsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "Autour du Fauteuil",
    image: produitImg,
    description:
      "Salon spécialisé en soins végétaux et coloration naturelle à l'Île-Tudy.",
    knowsAbout: [
      "Soins végétaux",
      "Plantes ayurvédiques",
      "Soins capillaires naturels",
      "Santé du cuir chevelu",
    ],
  };

  return (
    <section className="soins-container" aria-label="Soins végétaux du salon">
      {/* SEO CLEAN */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(soinsJsonLd)}
        </script>
      </Helmet>

      <div className="soins-header">
        <h2 className="soins-subtitle">LES SOINS VÉGÉTAUX</h2>
        <h1 className="soins-title">Salon Engagé</h1>
      </div>

      <div className="soins-top">
        <div className="soins-image">
          <img
            src={produitImg}
            alt="Produits de soins végétaux utilisés au salon Autour du Fauteuil"
            loading="lazy"
            decoding="async"
            width="600"
            height="600"
          />
        </div>

        <div className="soins-text">
          <h3>Une approche naturelle</h3>

          <p>
            Chez Autour du Fauteuil, les soins végétaux reposent sur une
            philosophie simple : respecter le cheveu et le cuir chevelu.
          </p>

          <p>
            Nous utilisons des formulations naturelles à base de plantes
            ayurvédiques pour sublimer vos cheveux tout en préservant leur
            santé.
          </p>

          <p>
            Cette approche s’inscrit dans une démarche écologique et de
            bien-être durable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SoinsVegetaux;
