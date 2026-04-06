import { useState } from "react";
import Header from "./q6/Header";
import Search from "./q6/Search";
import Dashboard from "./q6/Dashboard";
import { getWeather } from "./q6/API";

function App() {
  const [weather, setWeather] = useState(null);

  const handleSearch = async (city) => {
    if (!city) return;

    const data = await getWeather(city);
    setWeather(data);
  };

  return (
    <div>
      <Header />
      <Search onSearch={handleSearch} />
      <Dashboard weather={weather} />
    </div>
  );
}

export default App;