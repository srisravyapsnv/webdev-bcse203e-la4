function CountryCard({ c }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      width: "200px"
    }}>
      <img src={c.flags?.png} alt="flag" width="100%" />
      <h3>{c.name?.common}</h3>
      <p>Capital: {c.capital?.[0]}</p>
      <p>Population: {c.population}</p>
      <p>Region: {c.region}</p>
    </div>
  );
}

export default CountryCard;