import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/components/Header.css";
import logo from "../assets/logo.png";
import phoneIcon from "../assets/icons/icon_phone.svg";

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((o) => !o);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          <img src={logo} alt="" aria-hidden="true" />
        </Link>

        <button
          className="nav-toggle"
          aria-expanded={open}
          onClick={toggle}
          aria-label="Menu"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <nav className={open ? "nav open" : "nav"}>
          <NavLink to="/le-salon" onClick={() => setOpen(false)}>
            LE SALON
          </NavLink>

          {/* 🔽 PRESTATIONS avec sous-menu */}
          <div className="nav-item dropdown">
            <NavLink to="/prestations" className="dropdown-trigger">
              PRESTATIONS
            </NavLink>

            <div className="dropdown-menu">
              <NavLink to="/prestations/coupes" onClick={() => setOpen(false)}>
                Coupes
              </NavLink>

              <NavLink
                to="/prestations/colorations"
                onClick={() => setOpen(false)}
              >
                Colorations, balayage
              </NavLink>

              <NavLink
                to="/prestations/vegetales"
                className="highlight"
                onClick={() => setOpen(false)}
              >
                Colorations végétales
              </NavLink>
            </div>
          </div>

          <NavLink to="/realisations" onClick={() => setOpen(false)}>
            REALISATIONS
          </NavLink>

          <NavLink to="/contact" onClick={() => setOpen(false)}>
            CONTACT
          </NavLink>
        </nav>
        <NavLink
          to="/rendez-vous"
          className="cta"
          onClick={() => setOpen(false)}
        >
          <span className="icon_phone">
            <img src={phoneIcon} alt="Téléphone" />
          </span>
          PRENDRE RENDEZ-VOUS
        </NavLink>
      </div>
    </header>
  );
}
