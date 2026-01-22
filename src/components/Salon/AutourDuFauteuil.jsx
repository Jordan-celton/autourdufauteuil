import React from "react";
import "../../styles/Salon/AutourDuFauteuil.css";

const AutourDuFauteuil = () => {
  return (
    <section className="fauteuil-container">
      <div className="fauteuil-text">
        <h1>
          Autour du Fauteuil,
          <br />
          une histoire de famille
        </h1>
        <p>
          Salon familial transmis de mère en fille, Autour du Fauteuil est un
          salon de coiffure à Île-Tudy où l’on prend soin des cheveux et des
          personnes depuis plus de 20 ans. Repris en 2022 par Aurore, le salon
          continue de faire vivre un esprit doux, bienveillant et attentif, dans
          la lignée de son histoire.
        </p>
        <p>
          Depuis plus de 13 ans, le salon s’engage dans la coloration végétale,
          en travaillant avec des marques reconnues comme L’Envolée des Couleurs
          et Gaïa. Cette approche naturelle, enrichie par une formation
          continue, permet de proposer le meilleur des plantes ayurvédiques,
          pour des couleurs lumineuses, des cheveux respectés et un cuir chevelu
          apaisé.
        </p>
        <p>
          À deux pas de la mer, Autour du Fauteuil est pensé comme un cocon, un
          lieu où l’on prend le temps d’écouter, de conseiller et d’accompagner
          chaque client. Aux beaux jours, la petite terrasse devient un espace
          de pause et de convivialité, idéale pour savourer un café ou profiter
          d’un moment de détente au soleil pendant sa couleur.
        </p>
      </div>

      <div className="fauteuil-image">
        <img
          src="/images/salon-coloration.jpg"
          alt="Coloration végétale au salon Autour du Fauteuil"
        />
      </div>
    </section>
  );
};

export default AutourDuFauteuil;
