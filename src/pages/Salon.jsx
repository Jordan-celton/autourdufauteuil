import React from "react";
import HeroSection from "../components/HeroSection";
import heroImage from "../assets/Home/2023-03-21.webp";
import AutourDuFauteuil from "../components/Salon/AutourDuFauteuil";
import SoinsVegetaux from "../components/Salon/SoinsVegetaux";
import EmployeeProfile from "../components/Salon/EmployeeProfile";

export default function Salon() {
  return (
    <section className="container section">
      <HeroSection
        image={heroImage}
        subtitle="LE SALON"
        title="NOTRE UNIVERS"
      />

      <AutourDuFauteuil />
      <SoinsVegetaux />
      <EmployeeProfile />
    </section>
  );
}
