import { useState } from "react";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  return (
    <div style={{ textAlign: "center", margin: "10px"}}>
      <input
        placeholder="Search books"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => onSearch(query)} disabled={!query}>Search</button>
    </div>
  );
}

export default Search;