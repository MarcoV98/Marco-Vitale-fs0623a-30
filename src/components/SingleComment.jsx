import React from "react";

const SingleComment = ({ comment }) => {
  return (
    <div>
      <h3>{comment.comment}</h3>
      <p>Rating: {comment.rate}</p>
    </div>
  );
};

export default SingleComment;