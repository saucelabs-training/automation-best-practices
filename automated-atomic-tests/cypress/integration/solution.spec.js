/// <reference types="cypress" />
import LoginPage from '../page-objects/LoginPage';
import ProductsPage from '../page-objects/ProductsPage';
import AppHeader from '../page-objects/AppHeaderPage';
import { LOGIN_USERS, PAGES } from '../support/e2eConstants';

describe('Solution for automated atomic tests', () => {
  context('Home page', ()=>{
    beforeEach(() => {
      // the url comes from cypress.json
      cy.visit('');
      // it's important to clear session storage so that it doesn't persist
      // between tests
      cy.window().then((win) => {
        win.sessionStorage.clear()
      });
    });
  
    it('should be visible', () => {
      LoginPage.screen.should('be.visible');
    });
  
    it('allows login with a standard user', () => {
      LoginPage.signIn(LOGIN_USERS.STANDARD);
      ProductsPage.screen.should('be.visible');
    });
  });

  // typically we would actually put this into a separate file
  // and have another context(). However, we put it here for demonstration
  context('Product items', () => {
    it('should be added to cart without UI login', () => {
      //setTestContext() defined in support/commands.js
      cy.setTestContext({
        user: LOGIN_USERS.STANDARD,
        path: PAGES.INVENTORY
      });
        ProductsPage.addItemToCart(0);
        AppHeader.cart.should('have.text', '1');
    });
  });
});
