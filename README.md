# automation-best-practices
This is an Automation Best Practices workshop designed to teach testing through cross-functional automation

# ⚙️ Pre-requisites

* Run `npm install` in root directory
* `npm run start:react` to start react app
* Open application at http://localhost:3000/
* Sign up for a free [Sauce account](https://saucelabs.com/sign-up)
* Sign up for a free [Screener account](https://screener.io/)

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

## How do we check to make sure that the app looks as expected on web and mobile?

* Using visual testing
* Add a wdio test

```js
describe('My React application', () => {
    it('should look correct', () => {
        browser.url(`/`);
        browser.execute('/*@visual.init*/', 'My React App');
        browser.execute('/*@visual.snapshot*/', 'Home Page');
    });
});
```
* Add Sauce Connect, Not working yet!

### 🏋️‍♀️ Expand the config to cover iOS and Android

In today's day and age, everything must be responsive, so let's make sure that our app looks good on iOS web.
Hint, use these capabilities:

```js
        //iphone X
        {
            browserName: 'safari',
            platformName: 'macOS 10.15',
            browserVersion: 'latest',
            'sauce:options': {
                ...sauceOptions,
            },
            'sauce:visual': {
                ...visualOptions,
                viewportSize: '375x812'
            }
        }
```