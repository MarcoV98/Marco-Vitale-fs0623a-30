import React, { Component } from 'react';
import CommentList from './CommentList';

class CommentArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    this.fetchComments();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selected !== this.props.selected) {
      this.fetchComments();
    }
  }

  fetchComments() {
    const { selectedBook } = this.props;
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${selectedBook.asin}`, {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NTAyMGI1MjViYjAwMThlZDA4NDIiLCJpYXQiOjE3MDMxNzA0MTIsImV4cCI6MTcwNDM4MDAxMn0.oJx9SzQciRM50U-26TwxAacxQMYsKre1PbX0-ZJh4V0",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          comments: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  }

  render() {
    const { comments } = this.state;
    return (
      <div>
        <CommentList comments={comments} />
      </div>
    );
  }
}

export default CommentArea;