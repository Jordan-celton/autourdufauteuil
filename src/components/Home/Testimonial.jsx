import "../../styles/Home/Testimonial.css";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-overlay">
        <span className="testimonials-subtitle">LES RETOURS CLIENTS</span>

        <h2 className="testimonials-title">Témoignages</h2>

        <blockquote className="testimonials-quote">
          “Je suis venu chez Autour du Fauteuil pour une permanente. Étant très
          satisfait du résultat et subjugué par l’accueil, j’ai demandé Aurore
          en mariage”
        </blockquote>

        <p className="testimonials-author">JORDAN C.</p>

        <div className="testimonials-stars">★★★★★</div>
      </div>
    </section>
  );
}
