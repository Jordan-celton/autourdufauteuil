import { Routes, Route } from "react-router-dom";
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

/** * Composant de redirection vers Planity
 */
const RedirectToPlanity = () => {
  window.location.replace(
    "https://www.planity.com/autour-du-fauteuil-29980-ile-tudy",
  );
  return null;
};

export default function App() {
  return (
    <div className="app">
      <ScrollToTop />

      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/le-salon" element={<Salon />} />

          <Route path="/prestations/coupes" element={<Coupes />} />
          <Route path="/prestations/colorations" element={<Colorations />} />
          <Route path="/prestations/vegetales" element={<Vegetales />} />

          <Route path="/realisations" element={<Realisations />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/rendez-vous" element={<RedirectToPlanity />} />

          <Route path="/mentions" element={<MentionsLegales />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
