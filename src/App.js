import './App.css';
import React, { useState, useEffect } from 'react';
import Card from './Components/Card/Card';
import fetchBooks, { updateBook } from './fetch-books';

function App() {
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await fetchBooks();
      setBooks(data);
      setLoading(false);
    })();
  }, []);

  const handleReadButtonClick = (e) => {
    const bookTitle = e.target.parentElement.children[0].textContent;
    updateBook(bookTitle);
  };

  return (
    <div className='App'>
      {loading ? (
        <div>Loading...</div>
      ) : (
        books.map((book, i) => {
          return (
            <Card
              key={i}
              book={book}
              handleReadButtonClick={handleReadButtonClick}
            />
          );
        })
      )}
    </div>
  );
}

export default App;
