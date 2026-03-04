import React from "react";
import HeroSection from "../components/HeroSection";
import heroImage from "../assets/Realisation/31-Autourdufauteuil-Aurore_PHOTOS_0068 1.png";
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
