import React from "react";
import HeroSection from "../components/HeroSection";
import heroImage from "../assets/Home/2023-03-21.webp";
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
