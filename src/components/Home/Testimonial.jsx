import React, { useState, useEffect } from "react";
import "../../styles/Home/Testimonial.css";
import backgroundImg from "../../assets/Home/31-Autourdufauteuil-Aurore_PHOTOS_0009.webp";

const testimonialsData = [
  {
    id: 1,
    quote:
      "Excellent moment, de l'accueil (on patiente sur une jolie petite terrasse) à la fin. La prestation est vraiment réussie, super dégradé, couleur au top, merci!",
    author: "Marie-Laure D.",
  },
  {
    id: 2,
    quote:
      "Ravie de mon expérience dans ce salon ! L’accueil y est très agréable, le salon est très joli et mes cheveux brillent de mille feux. Merci beaucoup !",
    author: "Laura LB.",
  },
  {
    id: 3,
    quote:
      "Des prestations de haute qualité. Toujours de bons conseils personnalisés et adaptés. Toujours très satisfaite ! Je recommande ce salon ! Et super accueil ! Merci !",
    author: "Solène LB.",
  },
  {
    id: 4,
    quote:
      "Ravie de mon expérience, un balayage clair magnifique 😍 Merci beaucoup pour ce beau travail juste avant mon mariage !",
    author: "Julie R.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1,
      );
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="testimonials-section"
      style={{ backgroundImage: `url(${backgroundImg})` }}
      aria-label="Avis des clients"
    >
      <div className="testimonials-overlay"></div>

      <div className="testimonials-content">
        <div className="testimonials-header">
          <span className="testimonials-script-title" aria-hidden="true">
            Témoignages
          </span>
          <h2 className="testimonials-main-title">LES RETOURS CLIENTS</h2>
        </div>

        <div className="testimonial-carousel" aria-live="polyline">
          {testimonialsData.map((item, index) => (
            <div
              key={item.id}
              className={`testimonial-item ${index === currentIndex ? "active" : ""}`}
              aria-hidden={index !== currentIndex}
            >
              <blockquote className="testimonial-quote">
                <p>“{item.quote}”</p>
              </blockquote>
              <p className="testimonial-author">{item.author}</p>
              <div
                className="testimonial-stars"
                aria-label="Note : 5 sur 5 étoiles"
              >
                <span aria-hidden="true">★</span>
                <span aria-hidden="true">★</span>
                <span aria-hidden="true">★</span>
                <span aria-hidden="true">★</span>
                <span aria-hidden="true">★</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
