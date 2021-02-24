# automation-best-practices
This is an Automation Best Practices workshop designed to teach testing through cross-functional automation

# ⚙️ Pre-requisites

* Run `npm install` in root directory
* `npm run start:react` to start react app
* Open application at http://localhost:3000/

## What is the most basic test that we can write for our application?
* How about making sure that our app renders?

`npm run cy:open`

* Delete the content in the the integration folder 
* Add e2e folder
* Create a new test

```js
/// <reference types="cypress" />
it('loads', ()=> {
    cy.visit('http://localhost:3000')
    cy.get('.App-link').should('be.visible')
})
```

## Does this test guarantee that our app works as expected?

✅ App has corresponding class visible

✅ App renders in UI

❓ Does the app look as intended

❓ Does the app work as intended

🏋️‍♀️ Stop the application and rerun the test
Confirms rendering works as expected

## Can we test the same thing through a component test?

```js
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```