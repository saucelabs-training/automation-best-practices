# Visual E2E Testing

## 🧠You will learn

✅What is visual E2E testing? 

✅How to implement visual e2e using WebdriverIO + Screener

## 🧪Current Test Coverage

| Expected Behavior  | Tested? | Test Type  | Technologies  |
|---|---|---|---|
| Application renders  | ✅ | Functional UI | Cypress |
| Learn React link goes to correct location | ✅ | Functional UI | Cypress |
| Learn React link opens in new tab  | ✅ | Functional UI | Cypress |
| App looks as expected on Chrome + Safari on most popular resolution  | 🙅‍♂️ |   |   |
| App looks as expected on iPhone 12, 12 Pro Max  | 🙅‍♂️ |   |   |

---

## ❓How do we check to make sure that the app looks as expected on web and mobile?

---

[What is visual testing?](https://docs.google.com/presentation/d/13jYXXoKb36aFt1HLnNnAmsPqw9yaFhVrB4iFH_5_WkI/edit#slide=id.gcc181d5a54_0_284)

## Our tools

### [WebdrverIO](https://webdriver.io/)
Next-gen browser and mobile automation test framework for Node.js

### [Screener](https://screener.io/)
Automatically detect visual regressions across your UI

## Set up a visual test

follow along

1. Create a new file `my-react-app/test/specs/exercise.spec.js`
2. Paste the following code

```javascript

describe('My app', () => {
    it('should look correct', async () => {
        await browser.url('');
        await browser.execute('/*@visual.init*/', 'My React App');
        await browser.execute('/*@visual.snapshot*/', 'Home Page');

        const result = await browser.execute('/*@visual.end*/');
        expect(result.message).toBeNull();
    });
});

```
3. `cd testing-for-charity/my-react-app`
4. `npm run test:visual`
5. View your results in Screener.io 

[Let's fill out the Test coverage](./TEST-COVERAGE.md)

---

### 🏋️‍♀️❓ Let's change our image, what tests should that break❓

---

We're going to update the React image to something better. What tests should break?

* Drag n drop a new image to the `/src`
* Fix the path to be correct here `import logo from './mia.jpg';` in `App.js`
* Save all files
* Stop the app `ctrl + C`
* Restart the app with `npm start`
* Rerun the visual tests with `npm run test:visual`
* Analyze the results in Screener dashboard

## 📝Summary

✅Visual e2e testing is a simple and efficient way to test your web app cross-platform

✅We used WebdriverIO + Screener.io to write our visual e2e tests

Wouldn't it be great to have this tested automatically through CI?

[Let's setup up CI](./CICD.md)