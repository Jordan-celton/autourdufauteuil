import React, { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import "../../styles/Salon/EmployeeProfile.css";
import auroreImg from "../../assets/Salon/31-Autourdufauteuil-Aurore_PHOTOS_0086.webp";

const EmployeeProfile = () => {
  const profileJsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "HairSalon",
      name: "Autour du Fauteuil",
      employee: {
        "@type": "Person",
        name: "Aurore",
        jobTitle: "Gérante et Coiffeuse",
        image: auroreImg,
        description:
          "Je perpétue avec cœur l’héritage de ma maman en offrant un salon de coiffure où les plantes, le soin et la douceur prennent soin de chaque chevelure.",
      },
    }),
    [],
  );

  return (
    <section className="employee-section">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(profileJsonLd)}
        </script>
      </Helmet>

      <div className="background-title">Notre Équipe</div>

      <div className="employee-content">
        <h2 className="main-title">ELLE VOUS COIFFE</h2>

        <div className="image-wrapper">
          <img
            src={auroreImg}
            alt="Aurore"
            className="profile-photo"
            loading="lazy"
            decoding="async"
          />
          <span className="signature-name">Aurore</span>
        </div>

        <div className="text-content">
          <h3 className="concept-title">L'ESPRIT DU SALON</h3>
          <p className="quote">
            “ Je perpétue avec cœur l’héritage de ma maman en offrant un salon
            de coiffure où les plantes, le soin et la douceur prennent soin de
            chaque chevelure dans notre cocon familial. ”
          </p>
        </div>
      </div>
    </section>
  );
};

export default React.memo(EmployeeProfile);
