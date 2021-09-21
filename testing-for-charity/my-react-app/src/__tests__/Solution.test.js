import React from "react";
import { render, screen } from '@testing-library/react';
import App from '../App';

//Using Jest matchers: https://jestjs.io/docs/using-matchers

test('renders learn react link', () => {
  //render our App component in a virtual DOM
  render(<App />);
  //search for an element by text
  const linkElement = screen.getByText('Learn Testing with Mia')

  //Search for element by test id
  //const linkElement = screen.getByTestId('learn-link');

  //Using Jest matchers: https://jestjs.io/docs/using-matchers
  //expect this element to be present in the HTML
  expect(linkElement).toBeInTheDocument();
})

test('link has correct url', () => {
  //render our App component in a virtual DOM
  render(<App />);
  const linkElement = screen.getByText('Learn Testing with Mia')
  expect(linkElement.href).toContain('ultimateqa');
})

test('link opens in new tab', () => {
  //render our App component in a virtual DOM
  render(<App />);
  const linkElement = screen.getByText('Learn Testing with Mia')
  //Link should open a new tab
  expect(linkElement.target).toBe('_blank')
})
