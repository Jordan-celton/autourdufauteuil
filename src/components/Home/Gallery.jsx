import "../../styles/Home/Gallery.css";

const images = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
];

export default function Gallery() {
  return (
    <section className="gallery">
      <div className="gallery-header">
        <span className="gallery-subtitle">UN APERÇU DE NOS CRÉATIONS</span>
        <h2 className="gallery-title">Nos Services</h2>
      </div>

      <div className="gallery-grid">
        {images.map((src, index) => (
          <div className="gallery-card" key={index}>
            <img src={src} alt={`Création ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="gallery-indicators">
        <span />
        <span />
        <span className="active" />
      </div>
    </section>
  );
}
