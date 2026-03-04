import React from "react";
import "../../styles/Realisations/Gallery.css";

// Importation des images (ajuste le nombre selon tes fichiers réels)
import img1 from "../../assets/Home/gallery1.png";
import img2 from "../../assets/Home/gallery2.png";
import img3 from "../../assets/Home/gallery3.png";
import img4 from "../../assets/Home/gallery4.png";
import img5 from "../../assets/Home/gallery5.png";
import img6 from "../../assets/Home/gallery6.png";
// import img7 from "../../assets/Home/gallery7.png";

const items = [
  { type: "image", src: img1, alt: "Coiffure bouclée" },
  {
    type: "service",
    title: "Shampoing + coiffage",
    icon: "✂️",
  },
  { type: "image", src: img2, alt: "Dégradé homme" },
  { type: "image", src: img3, alt: "Balayage blond" },
  { type: "image", src: img4, alt: "Coloration rousse" },
  { type: "image", src: img5, alt: "Carré ondulé" },
  { type: "image", src: img6, alt: "Longs cheveux ondulés" },
  {
    type: "service",
    title: "Coloration végétale\n1 temps foncé + coupe",
    icon: "🌿",
  },
];

export default function Gallery() {
  return (
    <section className="gallery-realisations">
      <p className="gallery-realisations-intro">
        Découvrez à travers notre galerie un aperçu de notre savoir-faire.
        Coupes, balayages, colorations végétales réalisées avec soin, dans le
        respect du cheveu et de la personnalité de chacun.
      </p>

      <div className="gallery-realisations-grid">
        {items.map((item, index) => {
          if (item.type === "image") {
            return (
              <div key={index} className="gallery-realisations-item image-item">
                <img src={item.src} alt={item.alt} />
              </div>
            );
          }

          return (
            <div key={index} className="gallery-realisations-item service-item">
              <div className="service-realisations-content">
                <div className="service-realisations-icon">{item.icon}</div>
                <h3 className="service-realisations-title">
                  {item.title.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < item.title.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </h3>
                <div className="service-realisations-plus">+</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
