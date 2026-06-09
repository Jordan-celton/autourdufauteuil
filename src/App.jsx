import React, { useEffect, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";

/* Composants globaux (Toujours critiques, donc importés normalement) */
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

/* 🚀 OPTIMISATION MOBILE : Chargement à la demande (Lazy Loading) des pages */
const Home = lazy(() => import("./pages/Home.jsx"));
const Salon = lazy(() => import("./pages/Salon.jsx"));
const Realisations = lazy(() => import("./pages/Realisations.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales.jsx"));

/* 🚀 OPTIMISATION MOBILE : Lazy Loading des sous-composants de prestations */
const Coupes = lazy(() => import("./components/Prestations/Coupes.jsx"));
const Colorations = lazy(
  () => import("./components/Prestations/ColorationMeche.jsx"),
);
const Vegetales = lazy(
  () => import("./components/Prestations/ColorationVegetales.jsx"),
);

/**
 * Composant de redirection vers Planity
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

// 🎨 Petit loader épuré le temps qu'une page se charge (très rapide)
const PageLoader = () => (
  <div
    style={{
      minHeight: "50vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <span
      style={{
        color: "var(--color-primary)",
        fontFamily: "var(--font-tertiary)",
      }}
    >
      Chargement...
    </span>
  </div>
);

export default function App() {
  return (
    <div className="app">
      <ScrollToTop />

      <Header />

      <main>
        {/* 👑 Le Suspense intercepte le chargement asynchrone pour éviter que l'app crash */}
        <Suspense fallback={<PageLoader />}>
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
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
