# Visual E2E Testing

## TOC

* What is visual E2E testing?
* How to implement it using WebdriverIO + Screener

## How do we check to make sure that the app looks as expected on web and mobile?

[What is visual testing?](https://docs.google.com/presentation/d/13jYXXoKb36aFt1HLnNnAmsPqw9yaFhVrB4iFH_5_WkI/edit#slide=id.gcc181d5a54_0_284)

## A bit about webdriverIO

* [WebdrverIO](https://webdriver.io/)
* [Screener](https://screener.io/)

## Set up a visual test

1. Create a new file `src/test/specs/exercise.spec.js`
2. Add the following code

```js
describe('My React application', () => {
    it('should look correct', () => {
        browser.url(`/`);
        browser.execute('/*@visual.init*/', 'My React App');
        browser.execute('/*@visual.snapshot*/', 'Home Page');
    });
});
```
3. `npm run test:visual`
4. View your results in Screener.io 

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

### 🏋️‍♀️❓ Let's change our image, what tests should that break❓

We're going to update the React image to something better. What tests should break?

* Drag n drop a new image to the `/src`
* Fix the path to be correct here `import logo from './mia.jpg';` in `App.js`
* Save all files
* Stop the app
* Restart the app with `npm start`
* Rerun the visual tests with `npm run test:visual`
* Analyze the results in Screener dashboard

❓Is our app fully tested now❓

| Expected Behavior  | Tested? | Test Type  | Technologies  |
|---|---|---|---|
| Application renders  | ✅ | Component | React testing library, Jest |
| Learn React link goes to correct location | ✅ | Component | React testing library, Jest |
| Learn React link opens in new tab  | ✅ | Component | React testing library, Jest |
| App looks as expected on web and mobile  | ✅ | Visual  | Screener,WebdriverIO  |
| Front-end performance is at least a B  | 🙅‍♂️ |   |   |
| App is secure  | 🙅‍♂️ |   |   |

Instead of guessing our code coverage, wouldn't it be great to know it automatically?

[Let's setup up code coverage](./CODE-COVERAGE.md)