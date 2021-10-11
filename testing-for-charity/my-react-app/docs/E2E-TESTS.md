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

---

❓What if we wanted to test that the link opens in a new tab❓

---

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

✅E2E UI teting with Cypress allows us to do functional testing of the web app

✅However, it's inneficient and there are better alternatives

Wouldn't it be great to have this tested automatically through CI?

[Let's setup up CI](./CICD.md)






| Expected Behavior  | Tested? | Test Type  | Technologies  |
|---|---|---|---|
| Application renders  | ✅ | Component | React testing library, Jest |
| Learn React link goes to correct location | ✅ | Component | React testing library, Jest |
| Learn React link opens in new tab  | ✅ | Component | React testing library, Jest |
| App looks as expected on web and mobile  | 🙅‍♂️ |   |   |
| Front-end performance is at least a B  | 🙅‍♂️ |   |   |
| App is secure  | 🙅‍♂️ |   |   |


## Component tests

There are a few ways to test React components. Broadly, they divide into two categories:

* Rendering component trees in a simplified test environment and asserting on their output.
* Running a complete app in a realistic browser environment (also known as “end-to-end” tests)

[ReactJS.org](https://reactjs.org/docs/testing.html)

### What is a component test?

![Component tests](../graphics/../../graphics/component-diagram.jpeg)

Source: [Yoni Goldberg](https://github.com/nadvolod/component-tests-workshop/blob/main/graphics/component-diagram.jpg)

#### Advantages of component tests

❌ browser

❌ server

❌ network issues

✅Tests run in ms

❌ extra dependency (Cypress)

❌ extra dependency API


### 🏋️‍♀️ Code the component test

> Cypress doesn't support component tests yet. So we need to use other libraries.

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

1. Stop all servers
2. In your current directory (my-react-app), execute `npm run test`. 
3. The tests should pass, even though our app isn't running.

💡 'p' to filter tests down to a specific file

💡 'o' to run tests only in the changed files

### Testing links with component tests

💡We don't need a browser to actually test a link click, so why not use a fast component test?

1. Make sure that you run `npm test` if it's not running already
2. Go to `src/__tests__/Exercise.test.js` and write a test that looks like this

```js
test('link has correct url', () => {
  //render our App component in a virtual DOM
  render(<App />);
  const linkElement = screen.getByTestId('learn-link')
  expect(linkElement.href).toContain('ultimateqa');
})
```
1. Save and the test runs automatically


---
#### ❓What does the Cypress test validate that the component test does not❓
---

### 💡How to add a test id to our app

Ever wondered how easy it is to add an attribute to an HTML element? Let's provide a better locator for our app.

#### 🏋️‍♀️Add a `data-testid` attribute to our element
1. Open `my-react-app/src/App.js`
2. In the `<a>` of the App component add a `data-testid` property

```html
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
| Multiple other testing types...  | 🙅‍♂️ |   |   |



## 📝Summary

✅An e2e test (Cypress) tests the connection from the front-end to the back-en

✅Most of the functionality of a modern web app (React, Vue, Angular) can be tested with component tests in a virtual DOM. We did this by testing links, tabs, and correct HTML

### Let's go implement [visual testing](./docs/VISUAL.md)
