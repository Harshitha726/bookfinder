import React, { useState } from "react";
import "./App.css";   

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const CSEBooks = [
    { title: "Data Structures and Algorithms", author: "Narasimha Karumanchi", year: "2011" },
    { title: "DBMS", author: "Raghu Ramakrishnan", year: "2002" },
    { title: "Computer Networks", author: "Andrew S. Tanenbaum", year: "2010" },
    { title: "Programming in C", author: "E. Balagurusamy", year: "2009" },
    { title: "Java", author: "Herbert Schildt", year: "2017" },
    { title: "Software Engineering", author: "Ian Sommerville", year: "2011" },
    { title: "Compiler Design", author: "Alfred V. Aho", year: "2006" },
  ];
  
  // 🔎 Search function (title + author)
  const searchBooks = () => {
    if (query === "") {
      setBooks([]);
      return;
    }

    // Split input into words
    const searchWords = query.toLowerCase().split(" ");

    const filtered = CSEBooks.filter((book) =>
      searchWords.some((word) =>
        book.title.toLowerCase().includes(word) ||
        book.author.toLowerCase().includes(word)   // ✅ also check author
      )
    );

    setBooks(filtered);
  };

  return (
    <div className="container">
      <h1>📘 CSE BOOK FINDER </h1>

      <div className="search-box">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title or author... e.g. Java / Herbert"
        />
        <button onClick={searchBooks}>Search</button>
      </div>

      <div className="results">
        {books.length === 0 && <p className="no-books"> No books found.</p>}
        {books.map((book, index) => (
          <div key={index} className="book-card">
            <h3>{book.title}</h3>
            <p><b>Author:</b> {book.author}</p>
            <p><b>Year:</b> {book.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
