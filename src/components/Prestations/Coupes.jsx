import React from "react";
import "../../styles/Prestations/Coupes.css";

const Coupes = () => {
  return (
    <div className="coupes">
      <h1 className="titre-principal">COUPES</h1>

      {/* Section HOMMES */}
      <div className="section-coupe">
        <h2 className="titre-section">HOMMES</h2>
        <div className="liste-prestations">
          <div className="prestation">
            <span className="nom-prestation">Shampoing + Coupe + Coiffage</span>
            <div className="details-prestation">
              <span className="duree">30 min</span>
              <span className="prix">21 €</span>
            </div>
          </div>
          <div className="prestation">
            <span className="nom-prestation">
              Shampoing + Coupe + Coiffage + Barbe
            </span>
            <div className="details-prestation">
              <span className="duree">30 min</span>
              <span className="prix">21 €</span>
            </div>
          </div>
          <div className="prestation">
            <span className="nom-prestation">Barbe</span>
            <div className="details-prestation">
              <span className="duree">30 min</span>
              <span className="prix">21 €</span>
            </div>
          </div>
        </div>
      </div>

      {/* Séparateur */}
      <div className="separateur">---</div>

      {/* Section FEMMES */}
      <div className="section-coupe">
        <h2 className="titre-section">FEMMES</h2>
        <div className="liste-prestations">
          <div className="prestation">
            <span className="nom-prestation">Shampoing + Coiffage</span>
            <div className="details-prestation">
              <span className="duree">30 min</span>
              <span className="prix">34 €</span>
            </div>
          </div>
          <div className="prestation">
            <span className="nom-prestation">Shampoing + Coiffage</span>
            <div className="details-prestation">
              <span className="duree">45 min</span>
              <span className="prix">30 €</span>
            </div>
          </div>
          <div className="prestation">
            <span className="nom-prestation">Shampoing + Coupe + Coiffage</span>
            <div className="details-prestation">
              <span className="duree">30 min</span>
              <span className="prix">35 €</span>
            </div>
          </div>
          <div className="prestation">
            <span className="nom-prestation">Shampoing + Coupe + Coiffage</span>
            <div className="details-prestation">
              <span className="duree">45 min</span>
              <span className="prix">39 €</span>
            </div>
          </div>
          <div className="prestation">
            <span className="nom-prestation">Diagnostic</span>
            <div className="details-prestation">
              <span className="duree">15 min</span>
              <span className="prix"></span>
            </div>
          </div>
          <div className="prestation">
            <span className="nom-prestation">Argile</span>
            <div className="details-prestation">
              <span className="duree">15 min</span>
              <span className="prix">20 €</span>
            </div>
          </div>
          <div className="prestation">
            <span className="nom-prestation">Hair Bond Soin - XL</span>
            <div className="details-prestation">
              <span className="duree">30 min</span>
              <span className="prix">50 €</span>
            </div>
          </div>
          <div className="prestation">
            <span className="nom-prestation">
              Hair Bond - Lotion technique + Masque
            </span>
            <div className="details-prestation">
              <span className="duree">30 min</span>
              <span className="prix">50 €</span>
            </div>
          </div>
          <div className="prestation">
            <span className="nom-prestation">
              Gommage cuir chevelu - Produits BIO
            </span>
            <div className="details-prestation">
              <span className="duree">15 min</span>
              <span className="prix">20 €</span>
            </div>
          </div>
        </div>
      </div>

      {/* Séparateur */}
      <div className="separateur">---</div>

      {/* Section ENFANTS */}
      <div className="section-coupe">
        <h2 className="titre-section">ENFANTS</h2>
        <div className="liste-prestations">
          <div className="prestation">
            <span className="nom-prestation">
              Coupe enfant (jusqu'à 12 ans)
            </span>
            <div className="details-prestation">
              <span className="duree">30 min</span>
              <span className="prix">15 €</span>
            </div>
          </div>
          <div className="prestation">
            <span className="nom-prestation">Coupe fille (de 13 à 18 ans)</span>
            <div className="details-prestation">
              <span className="duree">30 min</span>
              <span className="prix">20 €</span>
            </div>
          </div>
          <div className="prestation">
            <span className="nom-prestation">
              Coupe garçon (de 13 à 18 ans)
            </span>
            <div className="details-prestation">
              <span className="duree">30 min</span>
              <span className="prix">18 €</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupes;
