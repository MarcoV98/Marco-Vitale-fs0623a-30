import React, { useState, useEffect } from 'react';
import './App.css';
import BookList from './components/BookList';
import CommentArea from './components/CommentArea';
import Data from './data/fantasy.json';

const App = () => {
  const [selectedBookAsin, setSelectedBookAsin] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async (asin) => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NTAyMGI1MjViYjAwMThlZDA4NDIiLCJpYXQiOjE3MDMxNzA0MTIsImV4cCI6MTcwNDM4MDAxMn0.oJx9SzQciRM50U-26TwxAacxQMYsKre1PbX0-ZJh4V0',
          },
        });

        if (!response.ok) {
          throw new Error(`Error fetching comments: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Comments Data:', data);
        setComments(data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    if (selectedBookAsin) {
      fetchComments(selectedBookAsin);
    }
  }, [selectedBookAsin]);

  const handleBookSelect = (asin) => {
    setSelectedBookAsin(asin);
  };

  return (
    <div className="App">
      <div className="left-column">
        <h1>Books</h1>
        <BookList books={Data} onBookSelect={handleBookSelect} />
      </div>
      <div className="right-column">
        {selectedBookAsin ? (
          <CommentArea asin={selectedBookAsin} comments={comments} />
        ) : (
          <p>Please select a book to view comments.</p>
        )}
      </div>
    </div>
  );
};

export default App;