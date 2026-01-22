import React from "react";
import HeroSection from "../components/HeroSection";
import heroImage from "../assets/Home/2023-03-21.webp";
import ConseilLongueurCheveux from "../components/Prestations/ConseilLongueurCheveux";
import ColorationVegetales from "../components/Prestations/ColorationVegetales";
import Coupes from "../components/Prestations/Coupes";
import ColorationMeche from "../components/Prestations/ColorationMeche";

export default function Salon() {
  return (
    <section className="container section">
      <HeroSection
        image={heroImage}
        subtitle="Nos Services"
        title="PRESTATIONS"
      />
      <ConseilLongueurCheveux />
      <Coupes />
      <ColorationMeche />
      <ColorationVegetales />
    </section>
  );
}
