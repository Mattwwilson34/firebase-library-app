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
      console.log(books);
    })();
  }, []);

  return (
    <div className='App'>
      {loading ? (
        <div>Loading...</div>
      ) : (
        books.map((book) => {
          return <Card book={book} />;
        })
      )}
    </div>
  );
}

export default App;
