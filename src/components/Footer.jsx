import "../styles/components/Footer.css";
import logo from "../assets/Home/logo_footer.png";

import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";

// Note : Si ton projet utilise React Router, remplace les <a> par des <Link to="...">
import img1 from "../assets/Home/gallery2.png";
import img2 from "../assets/Home/gallery6.png";
import img3 from "../assets/Home/gallery1.png";
import img4 from "../assets/Home/gallery3.png";
import img5 from "../assets/Home/gallery5.png";
import img6 from "../assets/Home/gallery4.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-bg" />

      <div className="footer-container">
        {/* Colonne 1 : Brand & Action */}
        <div className="footer-brand">
          <img
            src={logo}
            alt="Logo Autour du Fauteuil"
            className="footer-logo"
          />

          {/* Si c'est un lien externe (ex: Planity), utilise un <a> stylisé en bouton */}
          <a href="#rdv" className="footer-btn">
            PRENDRE RENDEZ-VOUS
          </a>

          <p className="footer-copy">
            © Copyright {currentYear} par autourdufauteuil.fr
          </p>
        </div>

        {/* Colonne 2 : Navigation */}
        <nav className="footer-links" aria-label="Plan du site">
          <h4>PLAN DU SITE</h4>
          <ul>
            <li>
              <a href="/">Accueil du site</a>
            </li>
            <li>
              <a href="/qui-sommes-nous">Qui sommes-nous</a>
            </li>
            <li>
              <a href="/creations">Nos créations</a>
            </li>
            <li className="highlight">
              <a href="/contact">Nous contacter</a>
            </li>
            <li>
              <a href="/mentions">Mentions légales</a>
            </li>
          </ul>
        </nav>

        {/* Colonne 3 : Contact */}
        <div className="footer-contact">
          <h4>CONTACT</h4>

          <div className="contact-item">
            <FaPhoneAlt aria-hidden="true" />
            <a href="tel:0298563846">02 98 56 38 46</a>
          </div>
          <div className="divider-footer" />

          <div className="contact-item">
            <IoIosMail aria-hidden="true" />
            <a href="mailto:contact@autourdufauteuil.fr">
              contact@autourdufauteuil.fr
            </a>
          </div>
          <div className="divider-footer" />

          <div className="contact-item">
            <FiMapPin aria-hidden="true" />
            <address>
              1 Avenue du Teven <br />
              29980 Île-Tudy
            </address>
          </div>
        </div>

        {/* Colonne 4 : Instagram */}
        <div className="footer-instagram">
          <h4>INSTAGRAM</h4>
          <div className="footer-instagram-grid">
            {[img1, img2, img3, img4, img5, img6].map((img, i) => (
              <a
                key={i}
                href="https://www.instagram.com/autourdufauteuil/"
                target="_blank"
                rel="noreferrer"
                className="instagram-grid-link"
              >
                <img src={img} alt={`Aperçu réalisation Instagram ${i + 1}`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
