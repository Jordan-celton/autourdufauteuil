import React from "react";
import HeroSection from "../components/HeroSection";

const MentionsLegales = () => (
    <div className="container section">
        <HeroSection subtitle="Mentions Légales" title="MENTIONS LÉGALES" />
        <section>
            <h2>Éditeur du site</h2>
            <p>
                <strong>Nom de l'entreprise :</strong> Autour du Fauteuil<br />
                <strong>Adresse :</strong> [Votre adresse]<br />
                <strong>Téléphone :</strong> [Votre numéro]<br />
                <strong>Email :</strong> [Votre email]
            </p>
        </section>
        <section>
            <h2>Hébergement</h2>
            <p>
                <strong>Hébergeur :</strong> [Nom de l'hébergeur]<br />
                <strong>Adresse :</strong> [Adresse de l'hébergeur]<br />
                <strong>Téléphone :</strong> [Téléphone de l'hébergeur]
            </p>
        </section>
        <section>
            <h2>Propriété intellectuelle</h2>
            <p>
                Le contenu du site (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive de Autour du Fauteuil, sauf mention contraire.
            </p>
        </section>
        <section>
            <h2>Responsabilité</h2>
            <p>
                Autour du Fauteuil décline toute responsabilité quant à l'utilisation des informations fournies sur ce site.
            </p>
        </section>
        <section>
            <h2>Contact</h2>
            <p>
                Pour toute question, vous pouvez nous contacter à l'adresse suivante : [Votre email]
            </p>
        </section>
    </div>
);

export default MentionsLegales;