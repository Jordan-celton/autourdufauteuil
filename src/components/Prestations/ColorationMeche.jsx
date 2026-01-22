import React from "react";
import "../../styles/Prestations/ColorationMeche.css";

const ColorationMeche = () => {
  return (
    <div className="coloration-meche">
      {/* Première section */}
      <div className="section-coloration">
        <div className="section-header">
          <h1 className="section-titre">COLORATIONS, BALAYAGES, MÈCHES</h1>
          <p className="section-sous-titre">Coloration</p>
        </div>

        <div className="liste-prestations">
          <div className="prestation-item">
            <span className="nom-prestation">Coloration racine + brushing</span>
            <div className="details-prestation">
              <span className="duree">1h30</span>
              <span className="prix">66 €</span>
            </div>
          </div>

          <div className="prestation-item">
            <span className="nom-prestation">
              Coloration racines + longueurs + brushing
            </span>
            <div className="details-prestation">
              <span className="duree">1h30</span>
              <span className="prix">70 €</span>
            </div>
          </div>

          <div className="prestation-item">
            <span className="nom-prestation">
              Coloration racines + coupe + brushing
            </span>
            <div className="details-prestation">
              <span className="duree">1h45</span>
              <span className="prix">75 €</span>
            </div>
          </div>

          <div className="prestation-item">
            <span className="nom-prestation">
              Coloration racines + longueurs + coupe + brushing
            </span>
            <div className="details-prestation">
              <span className="duree">1h45</span>
              <span className="prix">82 €</span>
            </div>
          </div>

          <div className="prestation-item">
            <span className="nom-prestation">
              Col. racines + éclaircissement + coupe + brushing
            </span>
            <div className="details-prestation">
              <span className="duree">2h00</span>
              <span className="prix">85 €</span>
            </div>
          </div>
        </div>
      </div>

      {/* Séparateur */}
      <div className="separateur">---</div>

      {/* Deuxième section */}
      <div className="section-coloration">
        <div className="section-header">
          <h2 className="section-titre">COLORATIONS & MÈCHES</h2>
        </div>

        <div className="liste-prestations">
          <div className="prestation-item">
            <span className="nom-prestation">
              Coloration + mèches + brushing
            </span>
            <div className="details-prestation">
              <span className="duree">2h00</span>
              <span className="prix"></span>
            </div>
          </div>

          <div className="prestation-item">
            <span className="nom-prestation">
              Coloration + mèches + coupe + brushing
            </span>
            <div className="details-prestation">
              <span className="duree">2h15</span>
              <span className="prix"></span>
            </div>
          </div>

          <div className="prestation-item">
            <span className="nom-prestation">
              Coloration + mèches + patine + brushing
            </span>
            <div className="details-prestation">
              <span className="duree">2h30</span>
              <span className="prix"></span>
            </div>
          </div>

          <div className="prestation-item">
            <span className="nom-prestation">
              Coloration + mèches + patine + coupe + brushing
            </span>
            <div className="details-prestation">
              <span className="duree">2h30</span>
              <span className="prix"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Séparateur */}
      <div className="separateur">---</div>

      {/* Troisième section */}
      <div className="section-coloration">
        <div className="section-header">
          <h2 className="section-titre">BALAYAGES & MÈCHES</h2>
        </div>

        <div className="liste-prestations">
          <div className="prestation-item">
            <span className="nom-prestation">
              Balayage + Coupe + Soin + Brushing
            </span>
            <div className="details-prestation">
              <span className="duree">30 min</span>
              <span className="prix">34 €</span>
            </div>
          </div>

          <div className="prestation-item">
            <span className="nom-prestation">
              Balayage + Coupe + Soin + Brushing longs ou épais
            </span>
            <div className="details-prestation">
              <span className="duree">45 min</span>
              <span className="prix">30 €</span>
            </div>
          </div>

          <div className="prestation-item">
            <span className="nom-prestation">
              Balayage + Coupe + Patine + Soin + Brushing
            </span>
            <div className="details-prestation">
              <span className="duree">30 min</span>
              <span className="prix">35 €</span>
            </div>
          </div>

          <div className="prestation-item">
            <span className="nom-prestation">
              Shampoing + Coupe + Patine + Soin + Brushing longs
            </span>
            <div className="details-prestation">
              <span className="duree">45 min</span>
              <span className="prix">39 €</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorationMeche;
