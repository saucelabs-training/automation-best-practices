/// <reference types="cypress" />
import ProductsPage from '../page-objects/ProductsPage';
import AppHeader from '../page-objects/AppHeaderPage';
import LoginPage from '../page-objects/LoginPage'
import {LOGIN_USERS} from "../support/e2eConstants";

//using Mocha test runner: https://mochajs.org/
describe('Shopping cart', () => {
  beforeEach(() => {
      cy.visit('https://www.saucedemo.com/v1');
      cy.window().then((win) => {
          win.sessionStorage.clear()
        });
    });

  it('should add item to cart', () => {
      LoginPage.signIn(LOGIN_USERS.STANDARD);
      ProductsPage.screen.should('be.visible');
      ProductsPage.addItemToCart(0);
      AppHeader.cart.should('have.text', '1');
  });
});
