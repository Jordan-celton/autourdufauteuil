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

  const handlePrestationsClick = (e) => {
    if (window.innerWidth <= 1024) {
      e.preventDefault(); // Empêche la navigation directe sur mobile
      setSubOpen((s) => !s);
    }
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* 👑 CORRECTION LOGO : Le label explicite est porté par le lien parent */}
        <Link
          to="/"
          className="brand"
          aria-label="Accueil - Autour du Fauteuil"
        >
          <img src={logo} alt="" aria-hidden="true" width="180" height="60" />
        </Link>

        {/* 👑 CORRECTION BURGER : aria-label dynamique + gestion sémantique de l'état */}
        <button
          className={`nav-toggle ${open ? "active" : ""}`}
          aria-expanded={open}
          onClick={toggle}
          aria-label={
            open
              ? "Fermer le menu de navigation"
              : "Ouvrir le menu de navigation"
          }
          aria-controls="main-navigation"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        {/* Navigation principale */}
        <nav
          id="main-navigation"
          className={open ? "nav open" : "nav"}
          aria-label="Navigation principale"
        >
          <NavLink to="/le-salon">LE SALON</NavLink>

          {/* 👑 CORRECTION DROPDOWN : Indication sémantique de contrôle du sous-menu */}
          <div className={`nav-item dropdown ${subOpen ? "sub-open" : ""}`}>
            <NavLink
              to="/prestations/coupes"
              onClick={handlePrestationsClick}
              aria-expanded={window.innerWidth <= 1024 ? subOpen : undefined}
              aria-haspopup="true"
              className={({ isActive }) =>
                `dropdown-trigger ${
                  isActive || location.pathname.startsWith("/prestations")
                    ? "active"
                    : ""
                }`
              }
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

          {/* Bouton de réservation version MOBILE */}
          <div className="cta-mobile">
            <NavLink to="/rendez-vous" className="cta-resa">
              {/* 👑 CORRECTION ICÔNE : Passée en aria-hidden car le texte à côté suffit largement */}
              <span className="icon_phone" aria-hidden="true">
                <img src={phoneIcon} alt="" />
              </span>
              PRENDRE RENDEZ-VOUS
            </NavLink>
          </div>
        </nav>

        {/* Bouton de réservation version DESKTOP */}
        <div className="cta-desktop">
          <NavLink to="/rendez-vous" className="cta-resa">
            <span className="icon_phone" aria-hidden="true">
              <img src={phoneIcon} alt="" />
            </span>
            PRENDRE RENDEZ-VOUS
          </NavLink>
        </div>
      </div>
    </header>
  );
}
