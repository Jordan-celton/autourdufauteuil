import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // 👈 On importe le Router ici
import { HelmetProvider } from "react-helmet-async"; // 👈 On importe Helmet ici
import App from "./App.jsx";
import "../src/styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        {" "}
        {/* 👈 Le Router englobe TOUTE l'application */}
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
