import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

import image1 from "../assets/Home/2023-03-21.webp";

export default function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="hero section">
        <div className="container hero-inner">
          <div className="hero-text">
            <h1>Bienvenue chez Autour du Fauteuil</h1>
            <p>
              Un salon de coiffure chaleureux à l’Île-Tudy, où chaque détail est
              pensé pour votre confort et votre style. Prenez un moment rien que
              pour vous.
            </p>
            <div className="hero-cta">
              <Link to="/contact" className="btn">
                Réserver
              </Link>
              <Link to="/prestations" className="btn ghost">
                Découvrir nos services
              </Link>
            </div>
          </div>
          <div className="hero-img">
            <img src={image1} alt="Salon de coiffure" />
          </div>
        </div>
      </section>

      {/* PRESENTATION */}
      <section className="section">
        <div className="container">
          <h2>Un lieu pour se détendre</h2>
          <p>
            Autour du Fauteuil est bien plus qu’un salon de coiffure. C’est un
            espace convivial, baigné de lumière, où nous prenons le temps de
            vous écouter et de sublimer vos envies. Chaque visite est un moment
            de détente, entre authenticité et professionnalisme.
          </p>
        </div>
      </section>

      {/* SERVICES EN AVANT */}
      <section className="section">
        <div className="container">
          <h2>Nos services phares</h2>
          <div className="cards">
            <div className="card">
              <img src="/assets/service-coupe.jpg" alt="Coupe de cheveux" />
              <h3>Coupe & Brushing</h3>
              <p>
                Adaptée à votre style et à votre visage, réalisée avec soin et
                précision.
              </p>
            </div>
            <div className="card">
              <img src="/assets/service-coloration.jpg" alt="Coloration" />
              <h3>Coloration</h3>
              <p>
                Des couleurs vibrantes ou naturelles pour illuminer vos cheveux.
              </p>
            </div>
            <div className="card">
              <img src="/assets/service-barbier.jpg" alt="Barbier" />
              <h3>Barbier</h3>
              <p>
                Taille et entretien de barbe pour un look soigné et élégant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AVIS CLIENTS */}
      <section className="section">
        <div className="container">
          <h2>Ce que disent nos clients</h2>
          <div className="cards">
            <div className="card">
              <p>
                ⭐⭐⭐⭐⭐
                <br />
                “Une équipe au top, toujours à l’écoute. On ressort avec le
                sourire !”
              </p>
              <p className="muted">— Claire M.</p>
            </div>
            <div className="card">
              <p>
                ⭐⭐⭐⭐⭐
                <br />
                “Un salon chaleureux et des coupes impeccables. Je recommande à
                100%.”
              </p>
              <p className="muted">— Julien P.</p>
            </div>
            <div className="card">
              <p>
                ⭐⭐⭐⭐⭐
                <br />
                “L’endroit parfait pour prendre soin de soi et se détendre.”
              </p>
              <p className="muted">— Sophie R.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <h2>Prêt(e) à prendre rendez-vous ?</h2>
          <Link to="/contact" className="btn">
            Réserver maintenant
          </Link>
        </div>
      </section>
    </div>
  );
}
