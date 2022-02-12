# TESTING CROSS-PLATFORM AND CROSS-BROWSER

## 🧠You will learn

✅

✅

✅

## 🏋️‍♀️ Work to run tests cross-browser and cross-platform

1. Create a new test file `cross.platform.spec.js` in `/test/specs` and paste the code below

```js
describe('Sauce Demo home page', () => {
	it('loads', async () => {
		// 1. Go to the home page
		await browser.url('');
		// 2. Create an element variable
		const elem = await $('#login-button');
		// 3. Verify the element is displayed
		await elem.waitForDisplayed();
	});
});
```

2. Create a new config file `wdio.cross.platform.sauce.conf.js` in `/test/configs`
3. Copy the content from [here](../../solution/test/configs/wdio.cross.platform.sauce.conf.js) into your new file
4. Let's understand the new config
5. Add a script to `package.json` `"test.sauce.all": "wdio test/configs/wdio.cross.platform.sauce.conf.js"`
6. Run the tests

---

## ❓How would you also run this test on Safari?

---

---

## ❓ What about on a real mobile device like iPhone XS?

---

---

## ❓ What about on a real mobile device like Samsung Galaxy S10?

---

**🚀 Congratulations, on your first WebdriverIO functional test!💃**

## 📝Summary

1. Use WebdriverIO to do functional testing on your apps
2. Use [Sauce Connect](https://docs.saucelabs.com/secure-connections/sauce-connect/) to test an app on an internal environment
3. A `conf.js` file is used to configure WebdriverIO
4. A `package.json` is where we put our scripts to easily run different things

## ⏭️ Let's understand what happened in Sauce when we ran the test
