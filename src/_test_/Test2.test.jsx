import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SingleBook from '../components/SingleBook';

describe('SingleBook Component', () => {
  it('cambia colore del bordo', () => {
    const bookData = {
      img: 'book-image-url',
      title: 'Book Title',
    };

    render(<SingleBook {...bookData} />);

    const card = screen.getByTestId('single-book-card'); 

    expect(card).toHaveStyle({ border: 'none' });

    fireEvent.click(card);

    expect(card).toHaveStyle({ border: '3px solid red' });
  });
});

