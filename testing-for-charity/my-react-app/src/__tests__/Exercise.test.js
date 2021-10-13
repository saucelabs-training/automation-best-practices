import React from "react";
import { render, screen } from '@testing-library/react';
import App from '../App';

//Using Jest matchers: https://jestjs.io/docs/using-matchers
test('link has correct url', () => {
  /** Your code below */

  //1. render our App component in a virtual DOM
  render(<App />);
  //2. search for an element by text
  const linkElement = screen.getByText('Learn React')
  //3. search for href
  expect(linkElement.href).toContain('ultimateqa');

  /** Your code above */
})

test('link opens in new tab', () => {
  /** Your code below */

  //1. render our App component in a virtual DOM
  //2. get the link element
  //3. expect `linkElement.target` toBe('_blank')

  /** Your code above */
})

