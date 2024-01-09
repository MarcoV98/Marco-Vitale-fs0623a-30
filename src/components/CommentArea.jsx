import React, { useState, useEffect } from 'react';

const Comments = ({ movieTitle, imageUrl }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
          headers: {
            'Authorization':
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NTAyMGI1MjViYjAwMThlZDA4NDIiLCJpYXQiOjE3MDMxNzA0MTIsImV4cCI6MTcwNDM4MDAxMn0.oJx9SzQciRM50U-26TwxAacxQMYsKre1PbX0-ZJh4V0',
          },
        });

        if (!response.ok) {
          throw new Error(`Error fetching comments: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Comments Data:', data);

        const movieComments = data.filter(comment => comment.elementId === movieTitle.imdbID);
        console.log('Filtered Comments:', movieComments);

        setComments(movieComments);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [movieTitle.imdbID]);

  return (
    <div>
      <img src={imageUrl} alt="Movie Poster" />
      <h3>Comments:</h3>
      {comments.length === 0 ? (
        <p style={{ color: 'white' }}>No comments available.</p>
      ) : (
        <ul>
          {comments.map((comment) => (
            <li key={comment._id}>
              <p style={{ color: 'white' }}>{comment.comment}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Comments;