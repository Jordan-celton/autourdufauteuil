import { motion } from "framer-motion";
import Hero from "../components/Home/Hero";
import "../styles/Home.css";
import About from "../components/Home/About";
import ServicesSection from "../components/Home/ServicesSection";
import ServicesPresentation from "../components/Home/ServicesPresentation";
import TeamSection from "../components/Home/TeamSection";
import Testimonial from "../components/Home/Testimonial";
import Gallery from "../components/Home/Gallery";

// On l'appelle ici !
import ScrollReveal from "../components/ScrollReveal";

const MotionDiv = motion.div;

export default function Home() {
  return (
    <div className="home">
      {/* Animation d'intro pour le Hero */}
      <MotionDiv
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
      >
        <Hero />
      </MotionDiv>

      {/* On utilise le composant importé pour chaque section */}
      <ScrollReveal variant="fadeUp">
        <About />
      </ScrollReveal>

      <ScrollReveal variant="fadeLeft">
        <ServicesSection />
      </ScrollReveal>

      <ScrollReveal variant="fadeRight">
        <ServicesPresentation />
      </ScrollReveal>

      <ScrollReveal variant="scaleUp">
        <TeamSection />
      </ScrollReveal>

      <ScrollReveal variant="fadeUp">
        <Testimonial />
      </ScrollReveal>

      <ScrollReveal variant="scaleUp">
        <Gallery />
      </ScrollReveal>
    </div>
  );
}
