import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/components/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn React/i);
  expect(linkElement).toBeInTheDocument();
});
