import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const pageTitle = screen.getByText(/Literary Map/i);
  const pageTitle2 = screen.getByText(/of England/i);
  expect(pageTitle).toBeInTheDocument();
  expect(pageTitle2).toBeInTheDocument();
});
