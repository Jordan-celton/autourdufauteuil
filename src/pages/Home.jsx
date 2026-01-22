import Hero from "../components/Home/Hero";
import "../styles/Home.css";
import About from "../components/Home/About";
import ServicesSection from "../components/Home/ServicesSection";
import ServicesPresentation from "../components/Home/ServicesPresentation";
import TeamSection from "../components/Home/TeamSection";
import Testimonial from "../components/Home/Testimonial";
import Gallery from "../components/Home/Gallery";

export default function Home() {
  return (
    <div className="home">
      <Hero />

      <About />

      <ServicesSection />

      <ServicesPresentation />

      <TeamSection />

      <Testimonial />

      <Gallery />
    </div>
  );
}
