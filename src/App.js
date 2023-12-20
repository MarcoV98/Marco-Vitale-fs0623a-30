import React from 'react';
import './App.css';
import BookList from './components/BookList';
import Data from './data/fantasy.json';


function App() {
  return (
    <div className="App">
      <h1>Books</h1>
      <BookList books={Data}></BookList>
    </div>
  );
}

export default App;
