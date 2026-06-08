import React from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import heroImage from "../assets/Salon/31-Autourdufauteuil-Aurore_PHOTOS_0068 1.png";
import AutourDuFauteuil from "../components/Salon/AutourDuFauteuil";
import SoinsVegetaux from "../components/Salon/SoinsVegetaux";
import Engagements from "../components/Salon/Engagements";
import EmployeeProfile from "../components/Salon/EmployeeProfile";
import ScrollReveal from "../components/ScrollReveal"; // On importe notre composant magique

const MotionDiv = motion.div;

export default function Salon() {
  return (
    <section className="container section">
      {/* Animation d'introduction pour le Hero */}
      <MotionDiv
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
      >
        <HeroSection
          image={heroImage}
          subtitle="Le Salon"
          title="NOTRE UNIVERS"
        />
      </MotionDiv>

      {/* Les sections suivantes s'animent au scroll avec le timing parfait */}
      <ScrollReveal variant="fadeUp">
        <AutourDuFauteuil />
      </ScrollReveal>

      {/* On fait venir les soins végétaux par la gauche */}
      <ScrollReveal variant="fadeLeft">
        <SoinsVegetaux />
      </ScrollReveal>

      {/* On fait venir les engagements par la droite pour casser la monotonie */}
      <ScrollReveal variant="fadeRight">
        <Engagements />
      </ScrollReveal>

      {/* Un effet de focus/zoom très doux pour la fiche de l'employé */}
      <ScrollReveal variant="scaleUp">
        <EmployeeProfile />
      </ScrollReveal>
    </section>
  );
}
