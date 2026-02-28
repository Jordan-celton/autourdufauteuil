import React from "react";
import "../../styles/Prestations/ColorationVegetales.css";
import ConseilLongueurCheveux from "./ConseilLongueurCheveux";

import HeroSection from "../HeroSection";
import heroImage from "../../assets/Home/2023-03-21.webp";

const PrestationCoiffure = () => {
  return (
    <>
      <HeroSection
        image={heroImage}
        subtitle="Nos Services"
        title="PRESTATIONS"
      />
      <ConseilLongueurCheveux />
      <div className="prestation-coiffure">
        {/* Section COLORATIONS VÉGÉTALES */}
        <div className="prestation-section">
          <div className="prestation-header">
            <h1 className="prestation-title">COLORATIONS VÉGÉTALES</h1>
            <p className="prestation-subtitle">Coloration végétale</p>
          </div>

          <div className="prestation-list">
            <div className="prestation-item">
              <span className="prestation-name">
                Coloration végétale : 1 temps clair + coupe
              </span>
              <span className="prestation-duration">1h45</span>
            </div>

            <div className="prestation-item">
              <span className="prestation-name">
                Coloration végétale : 1 temps foncé + coupe
              </span>
              <span className="prestation-duration">2h15</span>
            </div>

            <div className="prestation-item">
              <span className="prestation-name">
                Coloration végétale : 2 temps reste sans coupe
              </span>
              <span className="prestation-duration">3h00</span>
            </div>

            <div className="prestation-item">
              <span className="prestation-name">
                Coloration végétale : 2 temps reste avec coupe
              </span>
              <span className="prestation-duration">3h15</span>
            </div>

            <div className="prestation-item">
              <span className="prestation-name">
                Coloration végétale : 2 temps sans coupe
              </span>
              <span className="prestation-duration">3h15</span>
            </div>

            <div className="prestation-item">
              <span className="prestation-name">
                Coloration végétale : 2 temps pars avec sans coupe
              </span>
              <span className="prestation-duration">3h30</span>
            </div>

            <div className="prestation-item">
              <span className="prestation-name">
                Coloration végétale : 2 temps pars avec + coupe
              </span>
              <span className="prestation-duration">2h00</span>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="prestation-separator">- - -</div>

        {/* Section SOIN GREEN BOTOX */}
        <div className="prestation-section">
          <div className="prestation-header">
            <h2 className="prestation-title">SOIN GREEN BOTOX</h2>
          </div>

          <div className="prestation-list">
            <div className="prestation-item with-price">
              <span className="prestation-name">
                Soin green botox + brushing
              </span>
              <div className="prestation-details">
                <span className="prestation-duration">1h45</span>
                <span className="prestation-price">70 €</span>
              </div>
            </div>

            <div className="prestation-item with-price">
              <span className="prestation-name">
                Soin green botox + brushing
              </span>
              <div className="prestation-details">
                <span className="prestation-duration">2h00</span>
                <span className="prestation-price">75 €</span>
              </div>
            </div>

            <div className="prestation-item with-price">
              <span className="prestation-name">
                Soin green botox + brushing
              </span>
              <div className="prestation-details">
                <span className="prestation-duration">2h00</span>
                <span className="prestation-price">80 €</span>
              </div>
            </div>

            <div className="prestation-item with-price">
              <span className="prestation-name">
                Soin botox + coupe + brushing
              </span>
              <div className="prestation-details">
                <span className="prestation-duration">2h00</span>
                <span className="prestation-price">100 €</span>
              </div>
            </div>

            <div className="prestation-item with-price">
              <span className="prestation-name">
                Soin green botox + coupe + brushing
              </span>
              <div className="prestation-details">
                <span className="prestation-duration">2h15</span>
                <span className="prestation-price">105 €</span>
              </div>
            </div>

            <div className="prestation-item with-price">
              <span className="prestation-name">
                Soin green botox + coupe + brushing
              </span>
              <div className="prestation-details">
                <span className="prestation-duration">2h30</span>
                <span className="prestation-price">20 €</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrestationCoiffure;
