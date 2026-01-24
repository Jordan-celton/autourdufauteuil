import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Salon from "./pages/Salon.jsx";
import Realisations from "./pages/Realisations.jsx";
import Contact from "./pages/Contact.jsx";
import Booking from "./pages/Booking.jsx";
import NotFound from "./pages/NotFound.jsx";

/* 🔽 pages prestations */
import Coupes from "./components/Prestations/Coupes.jsx";
import Colorations from "./components/Prestations/ColorationMeche.jsx";
import Vegetales from "./components/Prestations/ColorationVegetales.jsx";

export default function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/le-salon" element={<Salon />} />

          {/* page principale Prestations */}
          <Route path="/prestations" element={<Services />} />

          {/* sous-pages Prestations */}
          <Route path="/prestations/coupes" element={<Coupes />} />
          <Route path="/prestations/colorations" element={<Colorations />} />
          <Route path="/prestations/vegetales" element={<Vegetales />} />

          <Route path="/realisations" element={<Realisations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rendez-vous" element={<Booking />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
