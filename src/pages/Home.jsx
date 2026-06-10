import { Helmet } from "react-helmet-async";
import React, { lazy, Suspense } from "react";
import "../styles/Home.css";

const Hero = lazy(() => import("../components/Home/Hero"));
const About = lazy(() => import("../components/Home/About"));
const ServicesSection = lazy(
  () => import("../components/Home/ServicesSection"),
);
const ServicesPresentation = lazy(
  () => import("../components/Home/ServicesPresentation"),
);
const TeamSection = lazy(() => import("../components/Home/TeamSection"));
const Testimonial = lazy(() => import("../components/Home/Testimonial"));
const Gallery = lazy(() => import("../components/Home/Gallery"));

const SectionLoader = () => <div style={{ minHeight: "200px" }} />;

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Autour du Fauteuil | Salon de Coiffure à l'Île-Tudy</title>
        <meta
          name="description"
          content="Bienvenue chez Autour du Fauteuil, votre coiffeur visagiste à l'Île-Tudy. Profitez de coupes tendances, colorations végétales et soins sur-mesure."
        />
        <meta
          property="og:title"
          content="Autour du Fauteuil - Salon de Coiffure Île-Tudy"
        />
        <meta
          property="og:description"
          content="Salon de coiffure visagiste, colorations végétales et soins sur-mesure."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.autourdufauteuil-iletudy.fr/"
        />
        <link rel="canonical" href="https://www.autourdufauteuil-iletudy.fr/" />
      </Helmet>

      <div className="home">
        <Suspense fallback={<SectionLoader />}>
          <Hero />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <ServicesSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <ServicesPresentation />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <TeamSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Testimonial />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Gallery />
        </Suspense>
      </div>
    </>
  );
}
