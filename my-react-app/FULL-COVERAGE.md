# Full Coverage Testing

## 🧠You will learn

✅How to write a component test 

✅How to add a test id to our web app

✅How to correctly test a link and a tab

✅How to replace e2e tests with component tests

## ⚙️ Setup

1. Stop all servers from previous session
2. cd `my-react-app`
3. `npm install`
4. `npm start`

Open application at http://localhost:3000/

## 🧪Testing Strategy

| Expected Behavior  | Test Type  | Technologies  |
|---|---|---|
| Application renders  |  |   |
| Learn React link goes to correct location  |   |   |
| Learn React link opens in new tab  |   |   |
| App looks as expected on web and mobile  |   |   |
| Front-end performance is at least a B  |   |   |

## What is the most basic test that we can write for our application?
* How about making sure that our app renders?

### 🏋️‍♀️Write a cypress test to make sure that our app opens.

* `npm run cy:open`
* Delete the content in the the integration folder 
* Create a new test in `cypress/integration/exercise.spec.js` (might already be there)

## ❓Does this test guarantee that our app works as expected?

✅ App has corresponding class visible

✅ App renders in UI

❓ Does the app look as intended

❓ Does the app work as intended

🏋️‍♀️ Stop the application and rerun the test

✅ Confirms rendering works as expected

✅ Confirms server is running


### What is the disadvantage of this test?

1. Need a browser
2. Need a server
3. Need to deal with network issues
4. Test will be slower
5. Need an extra dependency (Cypress)
6. Need to learn extra dependency API

## Can we test the same thing more efficiently❓

1. Stop the server
2. Rerun Cypress test
3. ❓Why does the test fail?
4. ❓Does our app still work?


## Component tests

There are a few ways to test React components. Broadly, they divide into two categories:

* Rendering component trees in a simplified test environment and asserting on their output.
* Running a complete app in a realistic browser environment (also known as “end-to-end” tests)

[ReactJS.org](https://reactjs.org/docs/testing.html)

### What is a component test?

![Component tests](./../graphics/component-diagram.jpeg)

Source: [Yoni Goldberg](https://github.com/nadvolod/component-tests-workshop/blob/main/graphics/component-diagram.jpg)

Our app was created using `create-react-app`. With this method, we automatically get a few cool things for testing:
* @testing-library
* jest
* And we get an automatic component test in `src/App.test.js`

```js
//Exercise.test.js
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

**Testing Library** is an opinionated framework that helps with component rendering and interactions.

**Jest** is a test runner and provides a bunch of capabilities like matchers and snapshot testing

### Run the component test

* Stop Cypress
* In your current directory (my-react-app), execute `npm run test`. The test should pass, even though our app isn't running.

💡 'p' to filter tests down to a specific file
💡 'o' to run tests only in the changed files

#### ❓What does the Cypress test validate that the component test does not❓

### 💡How to add a test id to our app

Ever wondered how easy it is to add an attribute to an HTML element? Let's provide a better locator for our app.

#### 🏋️‍♀️Add a `data-testid` attribute to our element
1. Go to `App.js`
2. In the `<a>` of the App component add a `data-testid` property

```js
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="learn-link"
        >
```

3. Open `src/__tests__/Exercise.test.js`
4. Update the test to have this line of code instead `const linkElement = screen.getByTestId('learn-link');`
5. Save and the test will automatically rerun

#### ❓Is our app fully tested❓

| Expected Behavior  | Tested? | Test Type  | Technologies  |
|---|---|---|---|
| Application renders  | ✅ | Component | React testing library, Jest |
| Learn React link goes to correct location | 🙅‍♂️ |  |  |
| Learn React link opens in new tab  | 🙅‍♂️ |  |  |
| App looks as expected on web and mobile  | 🙅‍♂️ |   |   |
| Front-end performance is at least a B  | 🙅‍♂️ |   |   |
| App is secure  | 🙅‍♂️ |   |   |

### 🔗Testing links (the right way)

🏋️‍♀️Write a check to test the link
1. Go to `cypress/integration/exercise.spec.js`
2. Write a test for clicking the link

```js
it('should click link',()=>{
     cy.visit('/');
     cy.get('[data-testid=learn-link]').click().url().should('contain','reactjs.org');
 })
```

❓Why is this test bad❓

1. Cypress will never have multi-tab support
2. We should never need to test that a link is clickable, this is the browser's native behavior
3. We should never need to test that a link opens a new tab

🏋️‍♀️Write a test to validate link behavior

💡We don't need a browser to actually test a link click, so why not use a fast component test?

1. Make sure that you run `npm test` if it's not running already
2. Go to `src/__tests__/App.test.js` and write a test that looks like this

```js
test('link has correct url', () => {
  //render our App component in a virtual DOM
  render(<App />);
  //search for an element by text
  const linkElement = screen.getByTestId('learn-link');
  //Using Jest matchers: https://jestjs.io/docs/using-matchers
  expect(linkElement.href).toContain('ultimateqa');
})
```
1. Save and the test runs automatically

❓What does this check actually test❓

❓What if we wanted to test that the link opens in a new tab❓

👀 Working with 'target' attribute

🏋️‍♀️Write a component test to validate that link opens in a new tab

❓Is our app fully tested now❓

| Expected Behavior  | Tested? | Test Type  | Technologies  |
|---|---|---|---|
| Application renders  | ✅ | Component | React testing library, Jest |
| Learn React link goes to correct location | ✅ | Component | React testing library, Jest |
| Learn React link opens in new tab  | ✅ | Component | React testing library, Jest |
| App looks as expected on web and mobile  | 🙅‍♂️ |   |   |
| Front-end performance is at least a B  | 🙅‍♂️ |   |   |
| App is secure  | 🙅‍♂️ |   |   |

## 📝Summary

✅An e2e test (Cypress) tests the connection from the front-end to the back-en

✅Most of the functionality of a modern web app (React, Vue, Angular) can be tested with component tests in a virtual DOM. We did this by testing links, tabs, and correct HTML

### Let's go implement [visual testing](./docs/VISUAL.md)