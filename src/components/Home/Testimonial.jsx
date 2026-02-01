import React from "react";
import "../../styles/Home/Testimonial.css";

import backgroundImg from "../../assets/Home/2023-03-21.webp";
// 👉 remplace par ton image (bac / fauteuil)

const Testimonials = () => {
  return (
    <section
      className="testimonials-section"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="testimonials-overlay"></div>

      <div className="testimonials-content">
        {/* Header */}
        <div className="testimonials-header">
          <span className="testimonials-script-title">Témoignages</span>
          <h2 className="testimonials-main-title">LES RETOURS CLIENTS</h2>
        </div>

        {/* Quote */}
        <blockquote className="testimonial-quote">
          “Je suis venu chez Autour du Fauteuil pour une permanente.
          <br />
          Étant très satisfait du résultat et subjugué par l’accueil,
          <br />
          j’ai demandé Aurore en mariage”
        </blockquote>

        {/* Author */}
        <p className="testimonial-author">JORDAN C.</p>

        {/* Stars */}
        <div className="testimonial-stars">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
