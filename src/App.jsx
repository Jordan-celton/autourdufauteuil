import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";

/* Composants globaux */
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

/* Pages */
import Home from "./pages/Home.jsx";
import Salon from "./pages/Salon.jsx";
import Realisations from "./pages/Realisations.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import MentionsLegales from "./pages/MentionsLegales.jsx";

/* Prestations */
import Coupes from "./components/Prestations/Coupes.jsx";
import Colorations from "./components/Prestations/ColorationMeche.jsx";
import Vegetales from "./components/Prestations/ColorationVegetales.jsx";

/**
 * Composant de redirection vers Planity
 * Optimisé SEO pour indiquer aux robots de ne pas indexer cette route de transition
 */
const RedirectToPlanity = () => {
  useEffect(() => {
    window.location.replace(
      "https://www.planity.com/autour-du-fauteuil-29980-ile-tudy",
    );
  }, []);

  return (
    <Helmet>
      <title>Redirection vers Planity - Autour du Fauteuil</title>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
  );
};

export default function App() {
  return (
    <div className="app">
      {/* ScrollToTop fonctionne à merveille maintenant que le Router est dans main.jsx */}
      <ScrollToTop />

      <Header />

      <main>
        <Routes>
          {/* Accueil & Salon */}
          <Route path="/" element={<Home />} />
          <Route path="/le-salon" element={<Salon />} />

          {/* Prestations */}
          <Route path="/prestations/coupes" element={<Coupes />} />
          <Route path="/prestations/colorations" element={<Colorations />} />
          <Route path="/prestations/vegetales" element={<Vegetales />} />

          {/* Autres pages */}
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/contact" element={<Contact />} />

          {/* Lien externe vers la prise de RDV */}
          <Route path="/rendez-vous" element={<RedirectToPlanity />} />

          {/* Légales & 404 */}
          <Route path="/mentions" element={<MentionsLegales />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
