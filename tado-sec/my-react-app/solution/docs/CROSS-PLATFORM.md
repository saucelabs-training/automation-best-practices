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
		const elem = await $('#log-button');
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

## ❓ Why are the tests failing?

---

---

## ❓How would you also run this test on Safari?

---

---

## ❓ What about on a real mobile device like iPhone XS?

---

---

## ❓ What about on a real mobile device like Samsung Galaxy S10?

---

---

## What if you wanted devices matching a certain criteria?

---

```js
		{
			name: 'Run on deviceName regex iOS - iPhone [678]?.*',
			browserName: 'safari',
			deviceName: 'iPhone [678]?.*',
			platformName: 'iOS',
			// https://docs.saucelabs.com/dev/test-configuration-options/#cacheid
			cacheId: 'vvqb5g7lr3', // See the capabilities url as mentioned above
			// Specs are not mentioned here so it will run all tests
			// from ./test/specs/
			build,
		},
		{
			name: 'Run on major iOS version - 13',
			browserName: 'safari',
			platformName: 'iOS',
			platformVersion: '13',
			// Extra caps
			cacheId: 'bq9jvoctq7', // See the capabilities url as mentioned above
			build,
		},
		{
			name: 'Run iOS phone only',
			browserName: 'safari',
			platformName: 'iOS',
			phoneOnly: true,
			// Extra caps
			cacheId: 'q96a2zipwp', // See the capabilities url as mentioned above
			build,
		},
```

Run the tests with `npm run test.sauce.all`

## 🏋️‍♀️ Let's run in parallel

1. Duplicate `cross.platform.spec`
2. Leave only the passing test
3. Update the appropriate `.conf.js`
4. Run tests using `npm run test.sauce.all`

**🚀 Congratulations, on your journey! 💃**

<img src="https://media.giphy.com/media/xTiTne6OaK0fQAxXYk/giphy.gif" alt="congrats" width="400"/>

## 📝Summary

1.

## ⏭️ Let's finish up
