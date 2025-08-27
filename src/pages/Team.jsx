export default function Team() {
  const people = [
    {
      name: "Anaïs",
      role: "Coiffeuse — spécialiste couleur végétale",
      img: "/assets/team-1.jpg",
    },
    { name: "Léo", role: "Coiffeur — barbier", img: "/assets/team-2.jpg" },
  ];
  return (
    <section className="container section">
      <h1>L’Équipe</h1>
      <div className="cards team">
        {people.map((p) => (
          <article className="card person" key={p.name}>
            <img src={p.img} alt={p.name} />
            <div>
              <h3>{p.name}</h3>
              <p className="muted">{p.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
