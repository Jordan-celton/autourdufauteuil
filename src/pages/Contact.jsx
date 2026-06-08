import React from "react";
import { motion } from "framer-motion"; // 1. On importe motion
import HeroSection from "../components/HeroSection";
import heroImage from "../assets/Contact/31-Autourdufauteuil-Aurore_PHOTOS_0042.webp";
import ContactSection from "../components/Contact/ContactSection";
import ScrollReveal from "../components/ScrollReveal"; // 2. On appelle notre composant magique

const MotionDiv = motion.div;

export default function Contact() {
  // Renommé en Contact pour la cohérence
  return (
    <>
      <section className="container section">
        {/* Animation douce pour le Hero au chargement */}
        <MotionDiv
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroSection
            image={heroImage}
            subtitle="Un Conseil?"
            title="NOUS CONTACTER"
          />
        </MotionDiv>
      </section>

      {/* La section contact apparaît au scroll de façon fluide */}
      <ScrollReveal variant="fadeUp">
        <ContactSection />
      </ScrollReveal>
    </>
  );
}
