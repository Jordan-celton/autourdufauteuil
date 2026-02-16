import React, { useState, useEffect } from "react";
import "../../styles/Home/Testimonial.css";
import backgroundImg from "../../assets/Home/31-Autourdufauteuil-Aurore_PHOTOS_0009 1.png";

const testimonialsData = [
  {
    id: 1,
    quote:
      "Je suis venu chez Autour du Fauteuil pour une permanente. Étant très satisfait du résultat et subjugué par l’accueil, j’ai demandé Aurore en mariage",
    author: "JORDAN C.",
  },
  {
    id: 2,
    quote:
      "Un accueil chaleureux et une expertise technique au top. Je suis ressortie ravie de ma nouvelle coupe !",
    author: "MARIE L.",
  },
  {
    id: 3,
    quote:
      "Le meilleur salon de la région. L'ambiance est apaisante et le résultat est toujours parfait.",
    author: "LUCAS M.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play : change d'avis toutes les 5 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="testimonials-section"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="testimonials-overlay"></div>

      <div className="testimonials-content">
        <div className="testimonials-header">
          <span className="testimonials-script-title">Témoignages</span>
          <h2 className="testimonials-main-title">LES RETOURS CLIENTS</h2>
        </div>

        <div className="testimonial-carousel">
          {testimonialsData.map((item, index) => (
            <div
              key={item.id}
              className={`testimonial-item ${index === currentIndex ? "active" : ""}`}
            >
              <blockquote className="testimonial-quote">
                “{item.quote}”
              </blockquote>
              <p className="testimonial-author">{item.author}</p>
              <div className="testimonial-stars">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
