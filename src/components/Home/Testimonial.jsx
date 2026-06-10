import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import "../../styles/Home/Testimonial.css";
import backgroundImg from "../../assets/Home/31-Autourdufauteuil-Aurore_PHOTOS_0009.webp";

const testimonialsData = [
  {
    id: 1,
    quote: "Excellent moment, super dégradé et couleur au top !",
    author: "Marie-Laure D.",
  },
  {
    id: 2,
    quote: "Accueil très agréable et cheveux brillants, je recommande !",
    author: "Laura LB.",
  },
  {
    id: 3,
    quote: "Toujours de bons conseils personnalisés, très satisfaite.",
    author: "Solène LB.",
  },
  {
    id: 4,
    quote: "Balayage magnifique pour mon mariage 😍",
    author: "Julie R.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonialsData.length - 1 ? 0 : prev + 1,
      );
    }, 9000);

    return () => clearInterval(timer);
  }, []);

  const testimonialsJsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "Autour du Fauteuil",
    review: testimonialsData.map((item) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: item.author,
      },
      reviewBody: item.quote,
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    })),
  };

  return (
    <section
      className="testimonials-section"
      style={{ backgroundImage: `url(${backgroundImg})` }}
      aria-label="Avis des clients"
    >
      {/* SEO CLEAN */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(testimonialsJsonLd)}
        </script>
      </Helmet>

      <div className="testimonials-overlay" />

      <div className="testimonials-content">
        <div className="testimonials-header">
          <span className="testimonials-script-title" aria-hidden="true">
            Témoignages
          </span>

          <h2 className="testimonials-main-title">LES RETOURS CLIENTS</h2>
        </div>

        <div className="testimonial-carousel" aria-live="polite">
          {testimonialsData.map((item, index) => (
            <div
              key={item.id}
              className={`testimonial-item ${
                index === currentIndex ? "active" : ""
              }`}
              aria-hidden={index !== currentIndex}
            >
              <blockquote className="testimonial-quote">
                <p>“{item.quote}”</p>
              </blockquote>

              <p className="testimonial-author">{item.author}</p>

              <div
                className="testimonial-stars"
                aria-label="Note 5 sur 5 étoiles"
              >
                <span aria-hidden="true">★★★★★</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
