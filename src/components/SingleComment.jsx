import React from "react";

const SingleComment = ({ comment }) => {
  return (
    <div>
      <h3>{comment.comment}</h3>
      <p>Ratings: {comment.rate}</p>
    </div>
  );
};

export default SingleComment;