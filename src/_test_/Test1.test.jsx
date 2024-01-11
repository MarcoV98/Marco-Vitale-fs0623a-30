import React from 'react';
import { render, screen } from '@testing-library/react';
import BookList from '../components/BookList';


describe('BookList Component', () => {
  it('render corretto per ogni libro del json', () => {
    const mockBooks = Array.from({ length: 150 }, (_, index) => ({
      asin: index.toString(),
      title: `Book ${index + 1}`,
      img: `url${index + 1}`,
    }));

    render(<BookList books={mockBooks} />);

    expect(mockBooks.length).toEqual(screen.getAllByRole('img').length);

    mockBooks.forEach((book) => {
      expect(screen.getByText(book.title)).toBeInTheDocument();
    });
  });
});
