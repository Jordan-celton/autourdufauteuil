export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h4>Autour du Fauteuil</h4>
          <p>
            1 avenue du Téven
            <br />
            29980 Île-Tudy
          </p>
          <p>
            <a href="tel:+33298563846">02 98 56 38 46</a>
          </p>
        </div>
        <div>
          <h4>Horaires</h4>
          <ul className="hours">
            <li>Lun 14:00–18:30</li>
            <li>Mar, Jeu, Ven 09:00–18:30</li>
            <li>Sam 09:00–16:00</li>
            <li>Mer & Dim : fermé</li>
          </ul>
        </div>
        <div>
          <h4>Réseaux</h4>
          <ul className="social">
            <li>
              <a
                href="https://www.planity.com/autour-du-fauteuil-29980-ile-tudy"
                target="_blank"
                rel="noreferrer"
              >
                Planity
              </a>
            </li>
            <li>
              <a href="#">Instagram (à venir)</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <small>
          © {new Date().getFullYear()} Autour du Fauteuil — Tous droits
          réservés.
        </small>
      </div>
    </footer>
  );
}
