import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CommentArea from './CommentArea';

const SingleBook = ({ img, title }) => {
  const [selected, setSelected] = useState(false);

  const toggle = () => {
    setSelected((prevSelected) => !prevSelected);
  };

  return (
    <div>
      <Card
        style={{
          width: '50%',
          border: selected ? '3px solid red' : 'none',
        }}
        onClick={toggle}
        data-testid="single-book-card" // Aggiunto il data-testid
      >
        <Card.Img src={img} alt={title} style={{ maxWidth: '50%' }} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>

      {selected && <CommentArea selectedBook={{ img, title }} />}
    </div>
  );
};

export default SingleBook;


