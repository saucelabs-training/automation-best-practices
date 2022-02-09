import React from "react";
import { render, screen } from '@testing-library/react';
import App from '../App';

//Using Jest matchers: https://jestjs.io/docs/using-matchers

test('renders learn react link', () => {
  //render our App component in a virtual DOM
  render(<App />);
  //search for an element by text
  const linkElement = screen.getByText('Learn React')
  //expect this element to be present in the HTML
  expect(linkElement).toBeInTheDocument();
})