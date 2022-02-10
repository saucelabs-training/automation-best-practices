# TESTING CROSS-PLATFORM AND CROSS-BROWSER

## 🧠You will learn

✅

✅

✅

## 🏋️‍♀️ Together, let's code your first WebdriverIO test!

1. Copy and create a new file `wdio.cross.platform.sauce.conf.js` in `/test/configs`

Our test will open the application and make sure it renders

1. Write the test in `localhost.spec.js`

Try to set the browser and os to Safari

```js
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

1. Look at `test/configs/wdio.localhost.sauce.conf.js`
2. Go to `package.json` and add a `script` `"test.local.sauce": "wdio test/configs/wdio.localhost.sauce.conf.js"`
3. Now run your tests with `npm run test.local.sauce` in a new terminal. **Do not stop your app server!**

**🚀 Congratulations, on your first WebdriverIO functional test!💃**

## 📝Summary

1. Use WebdriverIO to do functional testing on your apps
2. Use [Sauce Connect](https://docs.saucelabs.com/secure-connections/sauce-connect/) to test an app on an internal environment
3. A `conf.js` file is used to configure WebdriverIO
4. A `package.json` is where we put our scripts to easily run different things

## ⏭️ Let's understand what happened in Sauce when we ran the test
