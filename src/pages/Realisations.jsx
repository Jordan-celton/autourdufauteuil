import React from "react";
import HeroSection from "../components/HeroSection";
import heroImage from "../assets/Home/2023-03-21.webp";
import Gallery from "../components/Realisations/Gallery";

export default function Salon() {
  return (
    <>
    <section className="container section">
      <HeroSection
        image={heroImage}
        subtitle="Nos photos"
        title="RÉALISATIONS"
      />
    </section>
    <Gallery />
    </>
  );
}
