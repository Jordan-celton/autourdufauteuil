import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Home/Hero";
import "../styles/Home.css";
import About from "../components/Home/About";

export default function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="hero-section">
        <Hero />
      </section>

      {/* PRESENTATION */}

      <About />

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
