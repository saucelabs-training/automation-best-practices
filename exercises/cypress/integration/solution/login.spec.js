import LoginPage from '../../../page-objects/LoginPage';
import ProductsPage from '../../../page-objects/ProductsPage';
import { LOGIN_USERS } from '../../../support/e2eConstants';

describe('Login page', () => {
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
