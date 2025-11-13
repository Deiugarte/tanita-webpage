import { render, screen } from '@testing-library/react';
import App from './App';

test('renders InBody Report with user buttons', () => {
  render(<App />);
  const deividButton = screen.getByText(/Deivid/i);
  const yelbaButton = screen.getByText(/Yelba/i);
  expect(deividButton).toBeInTheDocument();
  expect(yelbaButton).toBeInTheDocument();
});
