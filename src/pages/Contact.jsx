import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import heroImage from "../assets/Contact/31-Autourdufauteuil-Aurore_PHOTOS_0042.webp";
import ContactSection from "../components/Contact/ContactSection";

export default function Contact() {
  // 👑 AJOUT SEO : Métadonnées dynamiques pour la page de contact
  useEffect(() => {
    document.title =
      "Contact, Prendre Rendez-vous & Horaires | Autour du Fauteuil";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content =
      "Une question ou besoin d'un conseil ? Contactez le salon Autour du Fauteuil à l'Île-Tudy ou réservez directement votre créneau en ligne via Planity.";
  }, []);

  return (
    <>
      <section className="container section">
        <HeroSection
          image={heroImage}
          subtitle="Un Conseil?"
          title="NOUS CONTACTER"
        />
      </section>

      <ContactSection />
    </>
  );
}
