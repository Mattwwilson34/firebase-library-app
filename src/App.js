import './App.css';
import React, { useState, useEffect } from 'react';
import Card from './Components/Card/Card';
import fetchBooks from './fetch-books';

function App() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await fetchBooks();
      setBooks(data);
      console.log(books);
    })();
  }, []);

  return (
    <div className='App'>
      <Card />
    </div>
  );
}

export default App;
