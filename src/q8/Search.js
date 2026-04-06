import { useState } from "react";

function Search({ onSearch }) {
  const [country, setCountry] = useState("");

  return (
    <div style={{ textAlign: "center" }}>
      <input
        placeholder="Enter country name"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <button onClick={() => onSearch(country)} disabled={!country}>
        Search
      </button>
    </div>
  );
}

export default Search;