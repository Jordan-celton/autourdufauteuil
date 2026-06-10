import { Helmet } from "react-helmet-async";
import "../../styles/Home/About.css";
import image2 from "../../assets/Home/31-Autourdufauteuil-Aurore_PHOTOS_0079.webp";
import logo from "../../assets/Home/logo.png";
import iconHoraire from "../../assets/icons/icon_horaires 1.png";

const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Autour du Fauteuil",
  image: image2,
  logo: logo,
  address: {
    "@type": "PostalAddress",
    streetAddress: "1, avenue du Teven",
    addressLocality: "Île-Tudy",
    postalCode: "29980",
    addressCountry: "FR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Monday",
      opens: "14:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
  url: "https://www.autourdufauteuil-iletudy.fr",
};

export default function About() {
  return (
    <section className="about-section" aria-label="À propos du salon">
      {/* SEO JSON-LD PROPRE */}
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLdData)}</script>
      </Helmet>

      <div className="about-container">
        {/* LEFT */}
        <div className="about-left">
          <h2 className="about-title">
            LE SALON A <br />
            L'ÉCOUTE DE VOS <br />
            CHEVEUX
          </h2>

          <div className="about-photo-container">
            <div className="about-photo-wrapper">
              <img
                src={image2}
                alt="Aurore, gérante du salon Autour du Fauteuil"
                className="about-photo"
                width="278"
                height="280"
                loading="lazy"
                decoding="async"
              />
              <img
                src={logo}
                alt="Logo Autour du Fauteuil"
                className="about-logo"
                width="80"
                height="80"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        {/* CENTER */}
        <div className="about-center">
          <p>
            <strong>
              Bienvenue chez Autour du Fauteuil, votre salon de coiffure situé à
              l’Île-Tudy.
            </strong>
          </p>

          <p>
            Dans un cadre convivial, Aurore et son équipe vous accueillent avec
            une approche personnalisée.
          </p>

          <p>
            Coupe moderne, balayage lumineux ou soin naturel, tout est adapté à
            votre style.
          </p>

          <p className="about-highlight">
            Ici, on prend le temps. On vous écoute.
            <br />
            On sublime votre style avec douceur.
          </p>
        </div>

        {/* RIGHT */}
        <div className="about-right">
          <address className="about-address">
            <p className="address-name">Autour du Fauteuil</p>
            <p>1, avenue du Teven</p>
            <p>29980 Île-Tudy</p>
          </address>

          <div className="about-hours">
            <div className="about-hours-header">
              <h2 className="about-hours-title">
                HORAIRES <br /> DU SALON
              </h2>

              <span className="about-hours-icon" aria-hidden="true">
                <img
                  src={iconHoraire}
                  alt=""
                  width="28"
                  height="28"
                  loading="lazy"
                />
              </span>
            </div>

            <div className="about-hours-list">
              <div className="hour-item">
                <span className="day">LUNDI</span>
                <time dateTime="Mo 14:00-18:00">14h00 - 18h00</time>
              </div>

              <div className="hour-item">
                <span className="day">MARDI AU VENDREDI</span>
                <time dateTime="Tu-Fr 09:00-18:00">09h00 - 18h00</time>
              </div>

              <div className="hour-item">
                <span className="day">SAMEDI</span>
                <time dateTime="Sa 09:00-16:00">09h00 - 16h00</time>
              </div>

              <div className="hour-item">
                <span className="day">DIMANCHE</span>
                <span className="time is-closed">Fermé</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
