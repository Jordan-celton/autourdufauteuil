import "../styles/components/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Colonne 1 */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/images/logo.png" alt="Autour du Fauteuil" />
            <span>
              Autour
              <br />
              du Fauteuil
            </span>
          </div>

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
            <li>Mentions légales</li>
          </ul>
        </div>

        {/* Colonne 3 */}
        <div className="footer-contact">
          <h4>CONTACT</h4>

          <p>📞 02 98 56 38 46</p>
          <p>✉️ contact@autourdufauteuil.fr</p>
          <p>
            📍 1 Avenue du Teven
            <br />
            29980 Île-Tudy
          </p>
        </div>

        {/* Colonne 4 */}
        <div className="footer-instagram">
          <h4>INSTAGRAM</h4>
          <div className="footer-instagram-grid">
            <img src="/images/gallery-1.jpg" alt="" />
            <img src="/images/gallery-2.jpg" alt="" />
            <img src="/images/gallery-3.jpg" alt="" />
            <img src="/images/gallery-4.jpg" alt="" />
            <img src="/images/gallery-5.jpg" alt="" />
            <img src="/images/gallery-6.jpg" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
