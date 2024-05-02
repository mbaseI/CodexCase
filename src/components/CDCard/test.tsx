import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CDCard from './index';

describe('CDCard component', () => {
  test('renders CDCard', () => {
    // Mock props
    const book = {
      id: '1',
      bookName: 'Test Book',
      author: 'Test Author',
      description: 'Test Description',
      image: 'test-image.jpg',
      price: '10',
      isOnSale: false,
    };
    const onButtonClick = jest.fn();

    render(
      <Router>
        <CDCard {...book} onButtonClick={onButtonClick} />
      </Router>,
    );

    // Assertions
    expect(screen.getByText(book.bookName)).toBeInTheDocument();
    expect(screen.getByText(book.author)).toBeInTheDocument();
    expect(screen.getByText(book.description)).toBeInTheDocument();
    expect(screen.getByAltText('book')).toBeInTheDocument();
    expect(screen.getByText(`$${book.price}`)).toBeInTheDocument();
  });
});
