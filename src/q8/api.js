export const searchCountries = async (name) => {
  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${name}`
    );

    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};