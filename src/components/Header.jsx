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

  // Bloque le scroll du corps de la page quand le menu mobile est ouvert
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
  }, [open]);

  // Ferme le menu et le sous-menu automatiquement lors d'un changement de page
  useEffect(() => {
    setOpen(false);
    setSubOpen(false);
  }, [location]);

  /**
   * Gestion du clic sur "PRESTATIONS"
   * - Sur Mobile (<= 1024px) : On empêche la navigation pour ouvrir/fermer le sous-menu
   * - Sur Desktop : Le lien vers "/prestations/coupes" fonctionne normalement
   */
  const handlePrestationsClick = (e) => {
    if (window.innerWidth <= 1024) {
      e.preventDefault(); // Empêche d'aller sur la page directement sur mobile
      setSubOpen((s) => !s);
    }
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Logo */}
        <Link to="/" className="brand">
          <img src={logo} alt="Logo Salon" aria-hidden="true" />
        </Link>

        {/* Bouton Burger (Mobile) */}
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

        {/* Navigation principale */}
        <nav className={open ? "nav open" : "nav"}>
          <NavLink to="/le-salon">LE SALON</NavLink>

          <div className={`nav-item dropdown ${subOpen ? "sub-open" : ""}`}>
            {/* Le lien principal pointe maintenant vers /coupes. 
              La fonction handlePrestationsClick gère la différence Mobile/Desktop.
            */}
            <NavLink
              to="/prestations/coupes"
              onClick={handlePrestationsClick}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              PRESTATIONS
            </NavLink>

            {/* Sous-menu */}
            <div className="dropdown-menu">
              <NavLink to="/prestations/coupes" end>
                Coupes
              </NavLink>
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

          {/* Bouton de réservation */}
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
