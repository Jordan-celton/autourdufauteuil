import React from "react";
import HeroSection from "../components/HeroSection";
import heroImage from "../assets/Salon/31-Autourdufauteuil-Aurore_PHOTOS_0068 1.png";
import AutourDuFauteuil from "../components/Salon/AutourDuFauteuil";
import SoinsVegetaux from "../components/Salon/SoinsVegetaux";
import Engagements from "../components/Salon/Engagements";
import EmployeeProfile from "../components/Salon/EmployeeProfile";

export default function Salon() {
  return (
    <section className="container section">
      <HeroSection
        image={heroImage}
        subtitle="Le Salon"
        title="NOTRE UNIVERS"
      />

      <AutourDuFauteuil />
      <SoinsVegetaux />
      <Engagements />
      <EmployeeProfile />
    </section>
  );
}
