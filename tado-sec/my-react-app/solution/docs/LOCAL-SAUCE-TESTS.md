# TESTING AN APP INSIDE OF YOUR NETWORK

## 🧠You will learn

✅ How to test a local web application with functional browser tests (aka E2E tests)

✅ Use WebdriverIO

✅ Use Sauce Connect

## ⚙️ Setup

1. Stop all servers from previous session (`Ctrl + C` everything)
2. cd `my-react-app`
3. `npm start`

Open application at http://localhost:3000/

Explore the functionality of the app

## 🏋️‍♀️ Together, let's code your first WebdriverIO test!

Our test will open the application and make sure it renders

1. Write the test in `test/specs/localhost.spec.js`

```js
// https://webdriver.io/docs/api
describe('My local react app', () => {
	it('renders', async () => {
		// navigate to the default url found in wdio.conf.js
		await browser.url('/');
		// create image variable
		const image = await $('[data-testid="main-img"]');
		// check if image is displayed
		await image.waitForDisplayed();
	});
});
```

2. Look at `test/configs/wdio.localhost.sauce.conf.js`
3. Go to `package.json` and add a `script` `"test.local.sauce": "wdio test/configs/wdio.localhost.sauce.conf.js"`
4. Now run your tests with `npm run test.sauce.local` in a new terminal. **Do not stop your app server!**

**🚀 Congratulations, on your WebdriverIO functional test!💃**

## 📝Summary

1. Use WebdriverIO to do functional testing on your apps
2. Use [Sauce Connect](https://docs.saucelabs.com/secure-connections/sauce-connect/) to test an app on an internal environment
3. A `conf.js` file is used to configure WebdriverIO
4. A `package.json` is where we put our scripts to easily run different things

## ⏭️ Let's understand what happened in Sauce when we ran the test
