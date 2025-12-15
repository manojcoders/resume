import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app with main content', () => {
  render(<App />);
  const nameElement = screen.getByText(/KANDHULA MANOJ KUMAR/i);
  expect(nameElement).toBeInTheDocument();
});
