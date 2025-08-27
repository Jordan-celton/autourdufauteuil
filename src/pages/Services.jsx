export default function Services() {
  const tarifs = [
    {
      cat: "Femme",
      items: [
        ["Shampooing + coupe + coiffage", "à partir de 35€"],
        ["Couleur végétale", "à partir de 45€"],
        ["Balayage / mèches", "à partir de 55€"],
        ["Soin profond", "15€"],
      ],
    },
    {
      cat: "Homme",
      items: [
        ["Shampooing + coupe", "22€"],
        ["Taille de barbe", "12€"],
      ],
    },
    { cat: "Enfant", items: [["Coupe (-12 ans)", "15€"]] },
  ];

  return (
    <section className="container section">
      <h1>Prestations & Tarifs</h1>
      <div className="cards">
        {tarifs.map((t) => (
          <div className="card" key={t.cat}>
            <h2>{t.cat}</h2>
            <ul className="price-list">
              {t.items.map(([name, price]) => (
                <li key={name}>
                  <span>{name}</span>
                  <strong>{price}</strong>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
