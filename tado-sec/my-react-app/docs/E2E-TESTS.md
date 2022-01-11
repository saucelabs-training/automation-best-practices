# E2E Browser Tests

## 🧠You will learn

✅How to test a web application with functional browser tests (aka E2E tests)


## ⚙️ Setup

1. Stop all servers from previous session (`Ctrl + C` everything)
2. cd `testing-for-charity/my-react-app`
3. `npm install && npm start`

Open application at http://localhost:3000/

## 🧪Our Testing Strategy

[Look here](TEST-COVERAGE.md)

## What is the most basic test that we can write for our application?

* How about a functional browser test sure that our app renders?

## Cypress Overview

"Fast, easy and reliable testing for anything that runs in a browser."([Cypress.io](https://www.cypress.io/))

```bash
cd testing-for-charity/my-react-app
npx cypress open
```

💡 Tests live in `cypress/integration` folder

### 🏋️‍♀️Write a Cypress test to make sure that our app opens.

1. In your IDE open `cypress/integration/exercise.spec.js`
2. Follow instructions to implement `it('loads')` test
   
---

### ❓What does this test validate?

---

## 🧪Current Test Coverage

[Look here](TEST-COVERAGE.md)

---

### ❓How do we ensure that the link is correct?

---

## 🔗Testing links (the right way)

Here's an e2e test to validate that a link works

```js
it('should click link',()=>{
     cy.visit('/');
     cy.get('.App-link').click().url().should('contain','ultimateqa.com');
 })
```
---

### ❓What is the problem with this test❓

---

1. We should never need to test that a link is clickable, this is the browser's native behavior
2. We should never need to test that a link opens a new tab

### 🏋️‍♀️Write a test to ensure that the link will go to the correct location

1. In your IDE open `cypress/integration/exercise.spec.js`
2. Follow instructions to implement `it('link goes to ultimateqa')` test


---

❓What is the exact validation of this test❓

---

## 🧪Current Test Coverage

[Look here](TEST-COVERAGE.md)

## How to test that the link opens in a new tab?

👀 Working with 'target' attribute

🏋️‍♀️Write a functional ui test to validate that the link opens in a new tab

* Follow instructions in this test `it('should open link in new tab')`

## 🧪Current Test Coverage

[Look here](TEST-COVERAGE.md)

---

### ❓What are the disadvantages of functional UI tests?

---

1. Need a browser
2. Need a server
3. Need to deal with network issues
4. Test will be slower
5. Need an extra dependency (Cypress)
6. Need to learn extra dependency API

---

### ❓Can we test the same thing more efficiently❓

---

## 📝Summary

✅E2E UI testing with Cypress allows us to do functional testing of the web app

✅However, it's inneficient and there are better alternatives

## ⏭️Wouldn't it be great to have this tested automatically through CI?

[Let's setup up CI](./CICD.md)