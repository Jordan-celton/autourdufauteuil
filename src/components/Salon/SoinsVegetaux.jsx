import React from "react";
import "../../styles/Salon/SoinsVegetaux.css";

import produitImg from "../../assets/Salon/31-Autourdufauteuil-Aurore_PHOTOS_0016.webp";

const SoinsVegetaux = () => {
  // 👑 AJOUT SEO : Indexation sémantique des soins végétaux et de la philosophie du salon pour Google
  const soinsJsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "Autour du Fauteuil",
    image: produitImg,
    description:
      "Chez Autour du Fauteuil, la santé du cheveu et du cuir chevelu prime grâce à des formulations naturelles élaborées à partir de plantes ayurvédiques.",
    knowsAbout: [
      "Soins végétaux",
      "Plantes ayurvédiques",
      "Approche capillaire naturelle",
      "Soins capillaires écologiques",
      "Santé du cuir chevelu",
    ],
  };

  return (
    <section className="soins-container">
      {/* Script invisible d'injection des données pour le référencement naturel thématique */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(soinsJsonLd) }}
      />

      <div className="soins-header">
        <h2 className="soins-subtitle">LES SOINS VEGETAUX</h2>
        <h1 className="soins-title">Salon Engagé</h1>
      </div>

      <div className="soins-top">
        <div className="soins-image">
          <img src={produitImg} alt="Produits de soins végétaux" />
        </div>

        <div className="soins-text">
          <h3>Une approche naturelle</h3>
          <p>
            Chez Autour du Fauteuil, l’engagement pour les soins végétaux n’est
            pas un simple argument marketing, mais une véritable philosophie de
            travail. La santé du cheveu et du cuir chevelu prime, grâce à des
            formulations naturelles et respectueuses, élaborées à partir de
            plantes ayurvédiques et d’ingrédients d’origine végétale.
          </p>
          <p>
            Cette approche s’inscrit dans une vision écologique et bien-être,
            qui vise à sublimer vos cheveux tout en respectant leur nature et
            l’environnement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SoinsVegetaux;
