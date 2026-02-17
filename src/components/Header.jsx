import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../styles/components/Header.css";
import logo from "../assets/logo.png";
import phoneIcon from "../assets/icons/icon_phone.svg";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const location = useLocation();

  const toggle = () => setOpen((o) => !o);

  // bloque scroll
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
  }, [open]);

  // ferme menu quand on change de page
  useEffect(() => {
    setOpen(false);
    setSubOpen(false);
  }, [location]);

  // clic sur prestations en mobile
  const toggleSub = (e) => {
    if (window.innerWidth <= 1024) {
      e.preventDefault();
      setSubOpen((s) => !s);
    }
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          <img src={logo} alt="" aria-hidden="true" />
        </Link>

        <button
          className={`nav-toggle ${open ? "active" : ""}`}
          aria-expanded={open}
          onClick={toggle}
          aria-label="Menu"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <nav className={open ? "nav open" : "nav"}>
          <NavLink to="/le-salon">LE SALON</NavLink>

          <div className={`nav-item dropdown ${subOpen ? "sub-open" : ""}`}>
            <NavLink
              to="/prestations"
              end
              className="dropdown-trigger"
              onClick={toggleSub}
            >
              PRESTATIONS
            </NavLink>

            <div className="dropdown-menu">
              <NavLink to="/prestations/coupes">Coupes</NavLink>
              <NavLink to="/prestations/colorations">
                Colorations, balayage
              </NavLink>
              <NavLink to="/prestations/vegetales" className="highlight">
                Colorations végétales
              </NavLink>
            </div>
          </div>

          <NavLink to="/realisations">REALISATIONS</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>

          <NavLink to="/rendez-vous" className="cta">
            <span className="icon_phone">
              <img src={phoneIcon} alt="Téléphone" />
            </span>
            PRENDRE RENDEZ-VOUS
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
