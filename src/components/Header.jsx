import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
          <NavLink to="/" onClick={() => setOpen(false)}>
            Accueil
          </NavLink>
          <NavLink to="/prestations" onClick={() => setOpen(false)}>
            Prestations & Tarifs
          </NavLink>
          <NavLink to="/le-salon" onClick={() => setOpen(false)}>
            Le Salon
          </NavLink>
          <NavLink to="/equipe" onClick={() => setOpen(false)}>
            Équipe
          </NavLink>
          <NavLink to="/infos" onClick={() => setOpen(false)}>
            Infos pratiques
          </NavLink>
          <NavLink
            to="/rendez-vous"
            className="cta"
            onClick={() => setOpen(false)}
          >
            Prendre RDV
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
