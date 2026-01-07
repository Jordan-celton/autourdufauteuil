export default function Infos() {
  return (
    <section className="container section">
      <h1>Infos pratiques</h1>
      <div className="info-grid">
        <div>
          <h2>Coordonnées</h2>
          <p>
            1 avenue du Téven
            <br />
            29980 Île-Tudy
          </p>
          <p>
            <a href="tel:+33298563846">02 98 56 38 46</a>
          </p>
          <p>
            <a href="mailto:contact@autourdufauteuil.fr">
              contact@autourdufauteuil.fr
            </a>
          </p>
        </div>
        <div>
          <h2>Horaires</h2>
          <ul className="hours big">
            <li>
              <strong>Lundi</strong> 14:00–18:30
            </li>
            <li>
              <strong>Mardi</strong> 09:00–18:30
            </li>
            <li>
              <strong>Mercredi</strong> Fermé
            </li>
            <li>
              <strong>Jeudi</strong> 09:00–18:30
            </li>
            <li>
              <strong>Vendredi</strong> 09:00–18:30
            </li>
            <li>
              <strong>Samedi</strong> 09:00–16:00
            </li>
            <li>
              <strong>Dimanche</strong> Fermé
            </li>
          </ul>
        </div>
        <div className="map-card">
          <h2>Nous trouver</h2>
          <div className="map-embed">
            <iframe
              title="Carte — Autour du Fauteuil"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=1+Avenue+du+T%C3%A9ven+29980+%C3%8Ele-Tudy&output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
