import React from 'react';
import SingleComment from './SingleComment';

const CommentList = ({ comments }) => {
  return (
    <div>
      <h2>Your Comments:</h2>
      {comments.length === 0 ? (
        <p style={{ color: 'white' }}>No comments available.</p>
      ) : (
        <ul>
          {comments.map((comment, index) => (
            <SingleComment key={index} comment={comment} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentList;