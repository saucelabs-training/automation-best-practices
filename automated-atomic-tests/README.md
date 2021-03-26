# Automated Atomic Tests


An automated atomic test (AAT) is one that tests only a single feature or component. An AAT shod form a single irreducible unit. An automated test shod not do something ke end-to-end automation. As an aside, this concept is already well understood in unit and integration tests, but UI tests continue to lag behind.

We can usually tell that a test is atomic when:
1. The test will only have one assertion or two assertions at most. Because sometimes we need one assertion to make sure our state is correct. 
2. Atomic tests have very few UI interactions and they’re only on a maximum of two screens.  

## Is this test atomic?

```js
/// <reference types="cypress" />

import ProductsPage from '../page-objects/SwagOverviewPage';
import LoginPage from '../page-objects/LoginPage';
import AppHeader from '../page-objects/AppHeaderPage';
import {LOGIN_USERS} from "../support/e2eConstants";

describe('Shopping cart', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1');
        cy.window().then((win) => {
            win.sessionStorage.clear()
          });
      });

    it('should add item to cart', () => {
        LoginPage.signIn(LOGIN_USERS.STANDARD);
        //an implicit assertion here that we are logged in
        ProductsPage.addItemToCart(0);
        AppHeader.cart.should('have.text', '1');
    });
});
```

### 🏋️‍♀️ Breaking up the test

We're going to break down this test into atomic ones.

❓So how many tests is this really❓

🏋️‍♀️ Code a suite of atomic tests

1. cd `automated-atomic-tests` and `npm install`
2. Go to the `cypress/integration/automated-atomic-tests/exercise` directory
3. Create spec files to cover all of the features
4. There's a hint for how to handle the login in `spec.js`

