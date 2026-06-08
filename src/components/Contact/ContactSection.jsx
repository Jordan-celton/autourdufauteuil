import React, { useState } from "react";
import "../../styles/Contact/ContactSection.css";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
          <a
            href="https://www.planity.com/autour-du-fauteuil-29980-ile-tudy"
            target="_blank"
            rel="noreferrer"
            className="btn-primary-link"
          >
            RENDEZ-VOUS EN LIGNE
          </a>
        </div>

        {/* Colonne droite */}
        <div className="contact-right">
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();

              // 1. Définir l'adresse de réception
              const emailDestinataire = "contact@autourdufauteuil.fr";

              // 2. Construire le sujet du mail (en incluant le sujet choisi ou une valeur par défaut)
              const sujetMail = encodeURIComponent(
                formData.sujet || `Message de ${formData.nom} - Salon`,
              );

              // 3. Construire le corps du mail proprement formaté
              const corpsMail = encodeURIComponent(
                `Nom : ${formData.nom}\n` +
                  `Téléphone : ${formData.telephone || "Non renseigné"}\n` +
                  `Email : ${formData.email}\n\n` +
                  `Message :\n${formData.message}`,
              );

              // 4. Déclencher l'ouverture du client de messagerie
              window.location.href = `mailto:${emailDestinataire}?subject=${sujetMail}&body=${corpsMail}`;
            }}
          >
            <div className="form-row">
              <div className="input-group">
                <label htmlFor="nom" className="sr-only">
                  Nom
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  placeholder="Nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="input-group">
                <label htmlFor="telephone" className="sr-only">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  placeholder="Téléphone"
                  value={formData.telephone}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="sujet" className="sr-only">
                  Sujet
                </label>
                <input
                  type="text"
                  id="sujet"
                  name="sujet"
                  placeholder="Sujet"
                  value={formData.sujet}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary">
              ENVOYER MESSAGE
            </button>
          </form>
        </div>
      </div>

      {/* Bandeau bas (Footer de section) */}
      <div className="contact-footer">
        {/* BLOC AVEC IMAGE DE FOND */}
        <div className="footer-block block-with-bg">
          <div className="overlay-content">
            <h4>HORAIRES DU SALON</h4>
            <p>
              Lundi : 14h - 18h <br />
              Mardi au Samedi : 9h - 18h <br />
              Dimanche : Fermé
            </p>
          </div>
        </div>

        {/* BLOCS STANDARDS */}
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
            <a href="mailto:contact@autourdufauteuil.fr">
              contact@autourdufauteuil.fr
            </a>{" "}
            <br />
            <a href="tel:0298563846">02 98 56 38 46</a>
          </p>
        </div>
      </div>

      <div className="map-location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4430.541589312218!2d-4.1580189999999995!3d47.8560842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48172d5aafa5b5b7%3A0xb680927349fdf9c2!2sAutour%20Du%20Fauteuil!5e1!3m2!1sfr!2sfr!4v1780942892193!5m2!1sfr!2sfr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        />
      </div>
    </section>
  );
}
