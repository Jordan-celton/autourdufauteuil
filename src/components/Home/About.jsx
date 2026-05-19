// About.jsx
import "../../styles/Home/About.css";
import image2 from "../../assets/Home/31-Autourdufauteuil-Aurore_PHOTOS_0079 1.png";
import logo from "../../assets/Home/logo.png";
import iconHoraire from "../../assets/icons/icon_horaires 1.png";

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
            <div className="about-hours-header">
              <h3>
                HORAIRES
                <br />
                DU SALON
              </h3>

              <span className="about-hours-icon">
                <img src={iconHoraire} alt="Icône horaires" />
              </span>
            </div>

            <div className="about-hours-list">
              <div className="hour-item">
                <span className="day">LUNDI</span>
                <span className="time">14h00 - 18h00</span>
              </div>

              <div className="hour-item">
                <span className="day">MARDI AU VENDREDI</span>
                <span className="time">09h00 - 18h00</span>
              </div>

              <div className="hour-item">
                <span className="day">SAMEDI</span>
                <span className="time">09h00 - 16h00</span>
              </div>

              <div className="hour-item">
                <span className="day">DIMANCHE</span>
                <span className="time">Fermé</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
