export const searchBooks = async (query) => {
  try {
    await new Promise((res) => setTimeout(res, 500)); // 👈 delay

    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}`
    );

    if (!res.ok) {
      throw new Error("API Error: " + res.status);
    }

    const data = await res.json();
    return data.items || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};