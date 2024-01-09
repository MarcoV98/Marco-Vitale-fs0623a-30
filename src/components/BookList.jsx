import React from 'react';
import SingleBook from './SingleBook';

const BookList = ({ books }) => {
  return (
    <div className="d-flex flex-wrap justify-content">
      {books.map((book) => (
        <SingleBook key={book.asin} {...book} />
      ))}
    </div>
  );
};

export default BookList;