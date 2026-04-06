function BookCard({ book }) {
  const info = book.volumeInfo || {};

  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      width: "200px"
    }}>
      <img
        src={info.imageLinks?.thumbnail?.replace("http://", "https://")}
        alt="book"
        width="100%"
      />
      <h3>{info.title}</h3>
      <p>{info.authors?.join(", ")}</p>
      <p>{info.publisher}</p>
      <p>{info.publishedDate}</p>
    </div>
  );
}

export default BookCard;