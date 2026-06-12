import { useMemo } from "react";
import "../styles/components/Footer.css";

import logo from "../assets/Home/logo_footer.png";

import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";

import img1 from "../assets/Home/gallery2.png";
import img2 from "../assets/Home/gallery6.png";
import img3 from "../assets/Home/gallery1.png";
import img4 from "../assets/Home/gallery3.png";
import img5 from "../assets/Home/gallery5.png";
import img6 from "../assets/Home/gallery4.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const instagramImages = useMemo(
    () => [img1, img2, img3, img4, img5, img6],
    [],
  );

  const footerJsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "HairSalon",
      name: "Autour du Fauteuil",
      telephone: "+33298563846",
      email: "autourdufauteuil@outlook.fr",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1 Avenue du Teven",
        addressLocality: "Île-Tudy",
        postalCode: "29980",
        addressCountry: "FR",
      },
      sameAs: ["https://www.instagram.com/autourdufauteuil/"],
    }),
    [],
  );

  return (
    <footer className="footer">
      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(footerJsonLd),
        }}
      />

      <div className="footer-bg" />

      <div className="footer-container">
        {/* BRAND */}
        <div className="footer-brand">
          <img
            src={logo}
            alt="Logo Autour du Fauteuil"
            className="footer-logo"
            loading="lazy"
            decoding="async"
          />

          <a href="/rendez-vous" className="footer-btn">
            PRENDRE RENDEZ-VOUS
          </a>

          <p className="footer-copy">
            © Copyright {currentYear} par autourdufauteuil.fr
          </p>
        </div>

        {/* NAV */}
        <nav className="footer-links" aria-label="Navigation du pied de page">
          <h4>PLAN DU SITE</h4>
          <ul>
            <li>
              <a href="/">Accueil du site</a>
            </li>
            <li>
              <a href="/le-salon">Qui sommes-nous</a>
            </li>
            <li>
              <a href="/realisations">Nos créations</a>
            </li>
            <li className="highlight">
              <a href="/contact">Nous contacter</a>
            </li>
            <li>
              <a href="/mentions">Mentions légales</a>
            </li>
          </ul>
        </nav>

        {/* CONTACT */}
        <div className="footer-contact">
          <h4>CONTACT</h4>

          <div className="contact-item">
            <FaPhoneAlt
              aria-hidden="true"
              focusable="false"
              role="presentation"
            />
            <a href="tel:0298563846">02 98 56 38 46</a>
          </div>

          <div className="divider-footer" />

          <div className="contact-item">
            <IoIosMail
              aria-hidden="true"
              focusable="false"
              role="presentation"
            />
            <a href="mailto:autourdufauteuil@outlook.fr">
              autourdufauteuil@outlook.fr
            </a>
          </div>

          <div className="divider-footer" />

          <div className="contact-item">
            <FiMapPin
              aria-hidden="true"
              focusable="false"
              role="presentation"
            />
            <address className="footer-address">
              1 Avenue du Teven <br />
              29980 Île-Tudy
            </address>
          </div>
        </div>

        {/* INSTAGRAM */}
        <div className="footer-instagram">
          <h4>INSTAGRAM</h4>

          <div className="footer-instagram-grid">
            {instagramImages.map((img, i) => (
              <a
                key={i}
                href="https://www.instagram.com/autourdufauteuil/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Voir Instagram Autour du Fauteuil - image ${i + 1}`}
                className="instagram-grid-link"
              >
                <img
                  src={img}
                  alt={`Aperçu réalisation Instagram ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
