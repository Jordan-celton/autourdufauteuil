import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/components/Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((o) => !o);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          <img src="/favicon.svg" alt="" aria-hidden="true" />
          <span>Autour du Fauteuil</span>
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
          <NavLink to="/prestations" onClick={() => setOpen(false)}>
            PRESTATIONS
          </NavLink>
          <NavLink to="/realisations" onClick={() => setOpen(false)}>
            REALISATIONS
          </NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>
            CONTACT
          </NavLink>
          <NavLink
            to="/rendez-vous"
            className="cta"
            onClick={() => setOpen(false)}
          >
            PRENDRE RENDEZ-VOUS
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
