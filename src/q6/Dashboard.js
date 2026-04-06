function Dashboard({ weather }) {
  if (!weather || weather.cod !== 200) {
    return <p style={{ textAlign: "center" }}>No Data Found</p>;
  }

  return (
    <div style={{
      textAlign: "center",
      marginTop: "20px",
      border: "1px solid #ccc",
      padding: "20px",
      width: "300px",
      margin: "20px auto"
    }}>
      <h2>{weather.name}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>{weather.weather[0].description}</p>
      <p>Humidity: {weather.main.humidity}</p>
      <p>Wind Speed: {weather.wind.speed}</p>
    </div>
  );
}

export default Dashboard;