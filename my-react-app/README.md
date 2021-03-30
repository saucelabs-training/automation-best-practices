#Full Coverage Testing

Open application at http://localhost:3000/

## 🧪Testing Strategy

| Expected Behavior  | Test Type  | Test Name  |
|---|---|---|
| Application renders  |  |   |
| App looks as expected on web and mobile  |   |   |
| Learn React link works  |   |   |
| Front-end performance is at least a B  |   |   |

## What is the most basic test that we can write for our application?
* How about making sure that our app renders?

`npm run cy:open`

* Delete the content in the the integration folder 
* Add `ui` folder
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

✅Confirms rendering works as expected

### What is the disadvantage of this test?

1. Need a browser
2. Need a server`
3. Need to deal with network issues
4. Test will be slower
5. Need an extra dependency (Cypress)
6. Need to learn extra dependency API

## Can we test the same thing more efficiently❓

1. Stop the server
2. Rerun Cypress test
3. ❓Why does the test fail?
4. ❓Does our app still work?

## Let's try with a component test

There are a few ways to test React components. Broadly, they divide into two categories:

* Rendering component trees in a simplified test environment and asserting on their output.
* Running a complete app in a realistic browser environment (also known as “end-to-end” tests)

[ReactJS.org](https://reactjs.org/docs/testing.html)

Our app was created using `create-react-app`. With this method, we automatically get a few cool things for testing:
* @testing-library
* And we get an automatic component test in `src/App.test.js`

```js
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

### Run the component test

In your current directly, execute `npm run test`. The test should pass, even though our app isn't running.

#### ❓What does the component test not validate that our E2E Cypress test did❓

### Create a better locator for the link

We all know that finding something by text sucks. Let's provide a better locator for our app.

1. Go to `App.js`
2. In the <a> of the App component add a `data-testid` property

```js
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="learn-link"
        >
```
3. Update the test to have this line of code instead `const linkElement = screen.getByTestId('learn-link');`
4. Save and the test will automatically rerun

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

### 🤔🏋️‍♀️🛑 Let's change our image, what tests should that break?

We're going to update the React image to something better. What tests should break?

* Drag n drop a new image to the `/src`
* Fix the path to be correct here `import logo from './mia.jpg';` in `App.js`
* Save all files
* Stop the app
* Restart the app with `npm start`
* Rerun the visual tests with `npm run test:visual`
* Analyze the results in Screener dashboard

## How setup CI

Let's add this code to our CI system.

## How to check code coverage

https://create-react-app.dev/docs/running-tests
`npm test -- --coverage`

## Front-end performance

* Use the task tracker application that we build in React JS crash course
* Get the performance metrics by using <a> in the About and Footer components
* Then change those to a Link component
* Then recapture the front-end perf metrics
* The expected result is that with the instant DOM refresh, the latter will be faster






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
