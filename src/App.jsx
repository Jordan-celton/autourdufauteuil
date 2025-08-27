import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Salon from "./pages/Salon.jsx";
import Team from "./pages/Team.jsx";
import Infos from "./pages/Infos.jsx";
import Booking from "./pages/Booking.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prestations" element={<Services />} />
          <Route path="/le-salon" element={<Salon />} />
          <Route path="/equipe" element={<Team />} />
          <Route path="/infos" element={<Infos />} />
          <Route path="/rendez-vous" element={<Booking />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
