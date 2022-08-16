import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import HomePage from './containers/HomePage/HomePage';

test('renders correct time of day', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


