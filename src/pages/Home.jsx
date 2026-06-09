import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async"; // 👈 Ajout de l'import pour le SEO
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
    <>
      {/* 👑 Section SEO : Modifie le titre et la description affichés sur Google */}
      <Helmet>
        <title>Autour du Fauteuil | Salon de Coiffure à l'Île-Tudy</title>
        <meta
          name="description"
          content="Bienvenue chez Autour du Fauteuil, votre coiffeur visagiste à l'Île-Tudy. Profitez de coupes tendances, colorations végétales et soins sur-mesure dans un cadre relaxant."
        />
        {/* L'URL canonique évite le contenu dupliqué si ton site est accessible via plusieurs adresses */}
        <link rel="canonical" href="https://www.autourdufauteuil-iletudy.fr/" />
      </Helmet>

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
    </>
  );
}
