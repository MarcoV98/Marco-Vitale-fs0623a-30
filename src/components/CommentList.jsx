import React from 'react';
import SingleComment from './SingleComment';

const CommentList = ({ comments }) => {
  return (
    <div>
      <h2>Your Comments:</h2>
      {comments.map((comment, index) => (
        <SingleComment key={index} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;