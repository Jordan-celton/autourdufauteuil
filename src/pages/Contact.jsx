import React from "react";
import HeroSection from "../components/HeroSection";
import heroImage from "../assets/Contact/31-Autourdufauteuil-Aurore_PHOTOS_0068 1.png";
import ContactSection from "../components/Contact/ContactSection";

export default function Salon() {
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
