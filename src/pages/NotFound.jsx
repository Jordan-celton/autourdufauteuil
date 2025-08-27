import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <section className="container section">
      <h1>Page introuvable</h1>
      <p>La page que vous cherchez n’existe pas.</p>
      <p>
        <Link to="/" className="btn">
          Retour à l’accueil
        </Link>
      </p>
    </section>
  );
}
