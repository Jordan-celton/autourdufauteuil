// About.jsx
import "../../styles/Home/About.css";
import image2 from "../../assets/Home/2023-03-21.webp";
import logo from "../../assets/Home/logo.png";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Colonne gauche */}
        <div className="about-left">
          <h2 className="about-title">
            LE SALON A <br />
            L'ÉCOUTE DE VOS <br />
            CHEVEUX
          </h2>

          <div className="about-photo-wrapper">
            <img
              src={image2}
              alt="Photo de la gérante du salon"
              className="about-photo"
            />
            <img
              src={logo}
              alt="Logo Autour du Fauteuil"
              className="about-logo"
            />
          </div>
        </div>

        {/* Colonne centrale */}
        <div className="about-center">
          <p>
            <strong>
              Bienvenue chez Autour du Fauteuil, votre salon de coiffure situé à
              l’Île-Tudy.
            </strong>
          </p>

          <p>
            Dans un cadre convivial, Aurore et son équipe de coiffeurs
            professionnels vous accueillent avec une approche personnalisée --
            parce que chaque chevelure est unique.
          </p>

          <p>
            Que vous recherchiez une coupe moderne, un balayage lumineux ou un
            soin naturel, nous adaptons nos propositions à vos attentes et à
            votre style de vie.
          </p>

          <p className="about-highlight">
            Ici, on prend le temps. On vous écoute.
            <br />
            On sublime votre style avec douceur.
          </p>
        </div>

        {/* Colonne droite */}
        <div className="about-right">
          <div className="about-address">
            <p>Autour du Fauteuil</p>
            <p>1, avenue du Teven</p>
            <p>29980 Île-Tudy</p>
          </div>

          <div className="about-hours">
            <h3 className="about-hours-title">
              HORAIRES DU SALON
              <span className="title-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="17"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="3"
                    y1="9"
                    x2="21"
                    y2="9"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="8"
                    y1="2"
                    x2="8"
                    y2="6"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="16"
                    y1="2"
                    x2="16"
                    y2="6"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </span>
            </h3>
            <p>
              <span className="day">Lundi</span>
              14h00 - 18h00
            </p>
            <p>
              <span className="day">Mardi au vendredi</span>
              09h30 - 18h00
            </p>
            <p>
              <span className="day">Dimanche</span>
              fermé
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
