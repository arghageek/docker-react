import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Learning CICD link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learning CICD/i);
  expect(linkElement).toBeInTheDocument();
});
