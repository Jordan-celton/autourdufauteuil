import React from "react";
import "../../styles/Contact/ContactSection.css";

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Colonne gauche */}
        <div className="contact-left">
          <h2>
            AUTOUR DU FAUTEUIL, <br />
            TOUJOURS À VOTRE ÉCOUTE
          </h2>

          <p>
            Besoin d’un conseil ou d’un moment pour vous ? <br />
            Le salon Autour du Fauteuil vous accueille avec écoute et
            bienveillance. Écrivez-nous ou réservez votre rendez-vous en ligne
            sur Planity.
          </p>

          <button className="btn-primary">RENDEZ-VOUS EN LIGNE</button>
        </div>

        {/* Colonne droite */}
        <div className="contact-right">
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Nom" />
              <input type="email" placeholder="Email" />
            </div>

            <div className="form-row">
              <input type="tel" placeholder="Téléphone" />
              <input type="text" placeholder="Sujet" />
            </div>

            <textarea placeholder="Message..." rows="5"></textarea>

            <button type="submit" className="btn-primary">
              ENVOYER MESSAGE
            </button>
          </form>
        </div>
      </div>

      {/* Bandeau bas */}
      <div className="contact-footer">
        <div className="footer-block">
          <h4>HORAIRES DU SALON</h4>
          <p>
            Lundi : 14h - 18h <br />
            Mardi au Samedi : 9h - 18h <br />
            Dimanche : Fermé
          </p>
        </div>

        <div className="footer-block">
          <h4>ADRESSE DU SALON</h4>
          <p>
            Autour du Fauteuil <br />
            1 Avenue du Teven <br />
            29980 Île-Tudy
          </p>
        </div>

        <div className="footer-block">
          <h4>NOS COORDONNÉES</h4>
          <p>
            contact@autourdufauteuil.fr <br />
            02 98 56 38 46
          </p>
        </div>
      </div>

      <div className="map-location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2422.680098011008!2d-4.1580189999999995!3d47.8560842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48172d5aafa5b5b7%3A0xb680927349fdf9c2!2sAutour%20Du%20Fauteuil!5e1!3m2!1sfr!2sfr!4v1769424176378!5m2!1sfr!2sfr"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localisation du salon Autour du Fauteuil"
        />
      </div>
    </section>
  );
}
