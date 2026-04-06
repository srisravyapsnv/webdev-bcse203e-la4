import CountryCard from "./CountryCard";

function CountryList({ countries }) {
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      justifyContent: "center",
      marginTop: "20px"
    }}>
      {countries.map((c, i) => (
        <CountryCard key={i} c={c} />
      ))}
    </div>
  );
}

export default CountryList;