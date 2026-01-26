import React from "react";
import "../../styles/Realisations/Gallery.css";

const items = [
  { type: "image", src: "/images/img1.jpg", alt: "Coiffure bouclée" },
  { type: "service", title: "Shampoing + coiffage", icon: "✂️" },
  { type: "image", src: "/images/img2.jpg", alt: "Dégradé homme" },

  { type: "image", src: "/images/img3.jpg", alt: "Balayage blond" },
  { type: "image", src: "/images/img4.jpg", alt: "Coloration rousse" },
  { type: "image", src: "/images/img5.jpg", alt: "Carré ondulé" },

  { type: "image", src: "/images/img6.jpg", alt: "Longs cheveux ondulés" },
  { type: "image", src: "/images/img7.jpg", alt: "Coloration prune" },
  {
    type: "service",
    title: "Coloration végétale\n1 temps foncé + coupe",
    icon: "🌿",
  },

  { type: "image", src: "/images/img8.jpg", alt: "Boucles naturelles" },
  { type: "image", src: "/images/img9.jpg", alt: "Ombré hair" },
  { type: "image", src: "/images/img10.jpg", alt: "Lissage brillant" },
];

export default function Gallery() {
  return (
    <section className="gallery">
      <p className="gallery-intro">
        Découvrez à travers notre galerie un aperçu de notre savoir-faire.
        Coupes, balayages, colorations végétales réalisées avec soin, dans le
        respect du cheveu et de la personnalité de chacun.
      </p>

      <div className="gallery-grid">
        {items.map((item, index) => {
          if (item.type === "image") {
            return (
              <div key={index} className="gallery-item image-item">
                <img src={item.src} alt={item.alt} />
              </div>
            );
          }

          return (
            <div key={index} className="gallery-item service-item">
              <div className="service-content">
                <div className="service-icon">{item.icon}</div>
                <h3 className="service-title">
                  {item.title.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h3>
                <div className="service-plus">+</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
