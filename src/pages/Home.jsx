import { motion } from "framer-motion";
import Hero from "../components/Home/Hero";
import "../styles/Home.css";
import About from "../components/Home/About";
import ServicesSection from "../components/Home/ServicesSection";
import ServicesPresentation from "../components/Home/ServicesPresentation";
import TeamSection from "../components/Home/TeamSection";
import Testimonial from "../components/Home/Testimonial";
import Gallery from "../components/Home/Gallery";

const MotionDiv = motion.div;

const animationVariants = {
  fadeUp: { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 } },
  fadeLeft: {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
  },
  fadeRight: {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
  },
  scaleUp: {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
  },
};

const ScrollReveal = ({ children, variant = "fadeUp" }) => {
  const selectedAnimation = animationVariants[variant];

  return (
    <MotionDiv
      initial={selectedAnimation.initial}
      whileInView={selectedAnimation.whileInView}
      // CONFIGURATION CRUCIALE ICI :
      // "amount: 0.3" signifie que l'animation commence SEULEMENT quand 30% du composant est visible à l'écran.
      // "margin: -150px" crée une zone tampon en bas pour retarder encore plus le départ.
      viewport={{ once: true, amount: 0.3, margin: "0px 0px -150px 0px" }}
      transition={{
        duration: 3, // Version ULTRA lente (3 secondes entières)
        ease: [0.16, 1, 0.3, 1], // Freinage ultra progressif
      }}
    >
      {children}
    </MotionDiv>
  );
};

export default function Home() {
  return (
    <div className="home">
      <MotionDiv
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
      >
        <Hero />
      </MotionDiv>

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
