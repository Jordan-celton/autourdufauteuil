import "../../styles/Home/Hero.css";
import { Link } from "react-router-dom";

/* import image1 from "../../assets/Home/2023-03-21.webp"; */

const Hero = () => {
  return (
    <div className="container-hero-inner">
      <span className="hero-script">Autour du Fauteuil</span>
      <h1>COIFFURE, COLORATION, SOINS VÉGÉTAUX</h1>
      <div className="hero-cta">
        <Link to="/rendez-vous" className="btn">
          PRENDRE RENDEZ-VOUS
        </Link>
      </div>
      <div className="hero-img">
        {/* <img src={image1} alt="Salon de coiffure" /> */}
      </div>
    </div>
  );
};

export default Hero;
