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
  return (
    <footer className="footer">
      <div className="footer-bg" />

      <div className="footer-container">
        {/* Colonne 1 */}
        <div className="footer-brand">
          <img src={logo} alt="Autour du Fauteuil" className="footer-logo" />

          <button className="footer-btn">PRENDRE RENDEZ-VOUS</button>

          <p className="footer-copy">
            © Copyright 2025 par autourdufauteuil.fr
          </p>
        </div>

        {/* Colonne 2 */}
        <div className="footer-links">
          <h4>PLAN DU SITE</h4>
          <ul>
            <li>Accueil du site</li>
            <li>Qui sommes-nous</li>
            <li>Nos créations</li>
            <li className="highlight">Nous contacter</li>
            <li>
              <a href="/mentions">Mentions légales</a>
            </li>
          </ul>
        </div>

        {/* Colonne 3 */}
        <div className="footer-contact">
          <h4>CONTACT</h4>

          <div className="contact-item">
            <FaPhoneAlt />
            <span>02 98 56 38 46</span>
          </div>
          <div className="divider-footer" />

          <div className="contact-item">
            <IoIosMail />
            <span>contact@autourdufauteuil.fr</span>
          </div>
          <div className="divider-footer" />

          <div className="contact-item">
            <FiMapPin />
            <span>
              1 Avenue du Teven <br />
              29980 Île-Tudy
            </span>
          </div>
        </div>

        {/* Colonne 4 */}
        <div className="footer-instagram">
          <h4>INSTAGRAM</h4>
          <div className="footer-instagram-grid">
            {[img1, img2, img3, img4, img5, img6].map((img, i) => (
              <img key={i} src={img} alt="" />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
