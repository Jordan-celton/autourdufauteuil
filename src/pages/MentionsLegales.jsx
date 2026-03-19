import React from "react";
import HeroSection from "../components/HeroSection";
import "../styles/MentionsLegales.css";

// Import de l'image pour le Hero
import heroImage from "../assets/Realisation/31-Autourdufauteuil-Aurore_PHOTOS_0068 1.png";

const MentionsLegales = () => {
  return (
    <div className="mentions-legales-page">
      {/* Votre composant HeroSection existant */}
      <HeroSection
        image={heroImage}
        subtitle="Mentions Légales"
        title="MENTIONS LÉGALES"
      />

      {/* Conteneur de la "carte" blanche calquée sur l'image */}
      <div className="ml-container">
        <div className="ml-card">
          <section className="ml-section">
            <h2>Éditeur du site :</h2>
            <p>
              Le présent site est la propriété de la société AJH COIFFURE, SAS
              au capital social variable, immatriculée au Registre du Commerce
              et des Sociétés sous le numéro 922 463 096 00011, dont le siège
              social est situé :
            </p>
            <p>
              1 avenue du Teven, 29980 Île-Tudy, France
              <br />
              Adresse e-mail :{" "}
              <a href="mailto:contact@autourdufauteuil.fr">
                contact@autourdufauteuil.fr
              </a>
              <br />
              Directeur de la publication : Aurore BESNARD
            </p>
          </section>

          <section className="ml-section">
            <h2>Conception et développement :</h2>
            <p>
              Le site a été conçu graphiquement par Dark Side Productions
              <br />
              Contact :{" "}
              <a href="mailto:damien@darksideprod.fr">damien@darksideprod.fr</a>
              <br />
              Téléphone : 06 46 46 01 57
            </p>
            <p>
              Le développement du site a été réalisé par Jordan Celton EI
              <br />
              Technologies utilisées : React.js et Vite
              <br />
              Contact :{" "}
              <a href="mailto:celton.jordan@outlook.fr">
                celton.jordan@outlook.fr
              </a>
              <br />
              Téléphone : 06 88 76 73 18
            </p>
          </section>

          <section className="ml-section">
            <h2>Hébergement :</h2>
            <p>
              Le site est hébergé par :
              <br />
              Adresse : 1 avenue du Teven, 29980 Île-Tudy, France
              <br />
              Téléphone : 09 70 80 90 50
              <br />
              Site web :{" "}
              <a
                href="http://www.sfr.fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.sfr.fr
              </a>
            </p>
          </section>

          <section className="ml-section">
            <h2>Activité du site :</h2>
            <p>
              Le site{" "}
              <a
                href="http://www.neptunearrosage.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.neptunearrosage.com
              </a>{" "}
              est un site vitrine destiné à présenter les services et
              réalisations de la société Autour du Fauteuil dans le domaine de
              la coiffure.
            </p>
          </section>

          <section className="ml-section">
            <h2>Données personnelles :</h2>
            <p>
              Les informations recueillies via les formulaires du site sont
              destinées exclusivement à Autour du Fauteuil à des fins de contact
              ou de traitement de demandes. Conformément à la loi « Informatique
              et Libertés » du 6 janvier 1978 modifiée et au Règlement général
              sur la protection des données (RGPD), vous disposez d’un droit
              d’accès, de rectification, de suppression et d’opposition
              concernant vos données personnelles.
            </p>
          </section>

          <section className="ml-section">
            <h2>Cookies :</h2>
            <p>
              Le site peut utiliser des cookies à des fins statistiques et de
              navigation. Vous pouvez configurer votre navigateur pour les
              refuser ou être informé de leur utilisation.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;
