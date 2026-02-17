import React from "react";
import "../../styles/Salon/SoinsVegetaux.css";

import produitImg from "../../assets/Salon/31-Autourdufauteuil-Aurore_PHOTOS_0016 1.png";

const SoinsVegetaux = () => {
  return (
    <section className="soins-container">
      <div className="soins-header">
        <h2 className="soins-subtitle">LES SOINS VEGETAUX</h2>
        <h1 className="soins-title">Savoir Engagé</h1>
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

      <div className="soins-bottom">
        <div className="engagements">
          <h3>Engagements clés</h3>
          <p>
            Les produits utilisés, tels que ceux de L’Envolée des Couleurs,
            puisent dans les vertus des plantes tinctoriales et soignantes pour
            nourrir, fortifier et embellir la fibre capillaire.
          </p>
          <p>
            De même, les soins et colorations Couleurs Gaïa, certifiés bio
            Cosmos Organic ou Cosmos Natural, associent performance et douceur,
            avec des actifs naturels qui renforcent la brillance, le volume et
            la santé globale de vos cheveux.
          </p>
          <button className="rdv-button">Prendre rendez-vous</button>
        </div>

        <div className="soins-cards">
          <div className="card">
            <span className="icon">🌿</span>
            <p>Respect absolu du cheveu et du cuir chevelu</p>
          </div>

          <div className="card highlight">
            <span className="icon">✨</span>
            <p>En savoir plus</p>
          </div>

          <div className="card">
            <span className="icon">♻️</span>
            <p>Une démarche respectueuse de l’environnement</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoinsVegetaux;
