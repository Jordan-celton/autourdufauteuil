import React from "react";
import "../../styles/Home/Gallery.css";

// 👉 remplace par tes vraies images
import img1 from "../../assets/Home/gallery1.png";
import img2 from "../../assets/Home/gallery2.png";
import img3 from "../../assets/Home/gallery3.png";
import img4 from "../../assets/Home/gallery4.png";
import img5 from "../../assets/Home/gallery5.png";
import img6 from "../../assets/Home/gallery6.png";

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2 className="gallery-main-title">UN APERÇU DE NOS CRÉATIONS</h2>
        <span className="gallery-script-title">Nos Photos</span>
      </div>

      <div className="gallery-grid-home">
        {images.map((img, index) => (
          <div className="gallery-item-home" key={index}>
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
