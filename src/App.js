import React, { Component } from 'react';
import './App.css';
import BookList from './components/BookList';
import CommentArea from './components/CommentArea';
import Data from './data/fantasy.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedBookAsin: null,
      comments: [],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedBookAsin !== prevState.selectedBookAsin) {
      if (this.state.selectedBookAsin) {
        this.fetchComments(this.state.selectedBookAsin);
      }
    }
  }

  fetchComments = async (asin) => {
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
      this.setState({ comments: data });
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  handleBookSelect = (asin) => {
    this.setState({ selectedBookAsin: asin });
  };

  render() {
    const { selectedBookAsin, comments } = this.state;

    return (
      <div className="App">
        <div className="left-column">
          <h1>Books</h1>
          <BookList books={Data} onBookSelect={this.handleBookSelect} />
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
  }
}

export default App;