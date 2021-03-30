import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  //render our App component in a virtual DOM
  render(<App />);
  //search for an element by text
  const linkElement = screen.getByTestId('learn-link');
  //expect this element to be present in the HTML
  expect(linkElement).toBeInTheDocument();
});
