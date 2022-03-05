import './App.css';
import React, { useState, useEffect } from 'react';
import Card from './Components/Card/Card';
import fetchBooks from './fetch-books';

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
    console.log('Button Clicked');
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
