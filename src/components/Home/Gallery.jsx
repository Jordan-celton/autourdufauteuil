import React from "react";
import "../../styles/Home/Gallery.css";

// 👉 remplace par tes vraies images
import img1 from "../../assets/Home/2023-03-21.webp";
import img2 from "../../assets/Home/2023-03-21.webp";
import img3 from "../../assets/Home/2023-03-21.webp";
import img4 from "../../assets/Home/2023-03-21.webp";
import img5 from "../../assets/Home/2023-03-21.webp";
import img6 from "../../assets/Home/2023-03-21.webp";

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <span className="gallery-script-title">Nos Réalisations</span>
        <h2 className="gallery-main-title">UN APERÇU DE NOS CRÉATIONS</h2>
      </div>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt={`Création ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Pagination décorative */}
      <div className="gallery-pagination">
        <span></span>
        <span></span>
        <span className="active"></span>
      </div>
    </section>
  );
};

export default Gallery;
