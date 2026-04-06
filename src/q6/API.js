const API_KEY = "c9b22f61201541af88884550260604";

export const getWeather = async (city) => {
  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};