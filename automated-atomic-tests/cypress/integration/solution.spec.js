import LoginPage from '../page-objects/LoginPage';
import ProductsPage from '../page-objects/ProductsPage';
import AppHeader from '../page-objects/AppHeaderPage';
import { LOGIN_USERS, PAGES } from '../support/e2eConstants';

describe('Solution for automated atomic tests', () => {
  context('Login page', ()=>{
    beforeEach(() => {
      // comes from cypress.json
      cy.visit('');
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

  context('Shopping cart', () => {
    beforeEach(() => {
        cy.setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.INVENTORY
        });
      });

    it('should add item to cart', () => {
        // set user into session storage
        window.sessionStorage.setItem("session-username", LOGIN_USERS.STANDARD.username);
        //an implicit assertion here that we are logged in
        ProductsPage.addItemToCart(0);
        AppHeader.cart.should('have.text', '1');
    });
  });
});
