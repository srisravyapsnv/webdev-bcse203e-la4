import { useState } from "react";

function Search({ onSearch }) {
  const [city, setCity] = useState("");

  return (
    <div style={{ textAlign: "center" }}>
      <input
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={() => onSearch(city)} disabled={!city}>
        Search
      </button>
    </div>
  );
}

export default Search;