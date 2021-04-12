/// <reference types="cypress" />

import ProductsPage from '../page-objects/ProductsPage';
import AppHeader from '../page-objects/AppHeaderPage';
import {LOGIN_USERS} from "../support/e2eConstants";

describe('Shopping cart', () => {
    beforeEach(() => {
        // bypass the login screen by hitting the url directly
        cy.visit('/inventory.html');
        // clear session storage
        cy.window().then((win) => {
            win.sessionStorage.clear()
          });
        // reload to view the new state
        cy.reload();
      });

    it('should add item to cart', () => {
        // set user into session storage
        window.sessionStorage.setItem("session-username", LOGIN_USERS.STANDARD.username);
        //an implicit assertion here that we are logged in
        ProductsPage.addItemToCart(0);
        AppHeader.cart.should('have.text', '1');
    });
});
