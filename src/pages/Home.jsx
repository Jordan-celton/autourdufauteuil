import Hero from "../components/Home/Hero";
import "../styles/Home.css";
import About from "../components/Home/About";
import ServicesSection from "../components/Home/ServicesSection";
import ServicesPresentation from "../components/Home/ServicesPresentation";

export default function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <Hero />

      {/* PRESENTATION */}
      <About />

      {/* SERVICES EN AVANT */}
      <ServicesSection />

      {/* SERVICESPRESENTATION */}
      <ServicesPresentation />

      {/* CTA FINAL */}
    </div>
  );
}
