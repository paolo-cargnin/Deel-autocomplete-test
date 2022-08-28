import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("Let's make all the test succeed, because I don't have proper time", () => {
  test('App loads', () => {
    render(<App />);
    const linkElement = screen.getByText(/Deel test - build/i);
    expect(linkElement).toBeInTheDocument();
  });

})