import BookCard from "./BookCard";

function BookList({ books }) {
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      justifyContent: "center"
    }}>
      {books.map((b) => (
        <BookCard key={b.id} book={b} />
      ))}
    </div>
  );
}

export default BookList;