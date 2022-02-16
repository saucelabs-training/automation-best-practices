// https://webdriver.io/docs/gettingstarted

//add a build name to the sauce labs jobs
const build = `WebdriverIO cross platform build-${new Date().getTime()}`;

exports.config = {
	runner: 'local',
	user: process.env.SAUCE_USERNAME,
	key: process.env.SAUCE_ACCESS_KEY,
	//default region is US unless set in command line
	region: process.env.REGION || 'us',
	specs: ['./test/specs/**/cross.platform.*'],
	// Patterns to exclude.
	exclude: ['./test/specs/**/sanity.spec.js'],
	//
	// ============
	// Capabilities
	// ============
	maxInstances: 100,
	// ===================================================================================
	// Capabilities
	// You can find more about constructing the capabilities for real device testing here
	// https://docs.saucelabs.com/dev/test-configuration-options/
	// https://saucelabs.com/platform/platform-configurator
	// ===================================================================================
	capabilities: [
		{
			browserName: 'chrome',
			platformName: 'windows 10',
			browserVersion: 'latest',
		},
		// {
		// 	name: 'Run on device description for iOS',
		// 	browserName: 'safari',
		// 	deviceName: 'iPhone XS',
		// 	platformName: 'iOS',
		// 	build,
		// },
		// {
		// 	name: 'Run on device description for Android',
		// 	browserName: 'chrome',
		// 	deviceName: 'Samsung Galaxy S10',
		// 	platformName: 'Android',
		// 	build,
		// },
		// /**
		//  * Capabilities to run on a 'random' device based on a regular expression
		//  * This will give a device based on:
		//  * - matching regular expression
		//  * - direct availability
		//  */
		// {
		// 	name: 'Run on deviceName regex iOS - iPhone [678]?.*',
		// 	browserName: 'safari',
		// 	deviceName: 'iPhone [678]?.*',
		// 	platformName: 'iOS',
		// 	// https://docs.saucelabs.com/dev/test-configuration-options/#cacheid
		// 	cacheId: 'vvqb5g7lr3', // See the capabilities url as mentioned above
		// 	// Specs are not mentioned here so it will run all tests
		// 	// from ./test/specs/
		// 	build,
		// },
		// {
		// 	name: 'Run on major iOS version - 13',
		// 	browserName: 'safari',
		// 	platformName: 'iOS',
		// 	platformVersion: '13',
		// 	// Extra caps
		// 	cacheId: 'bq9jvoctq7', // See the capabilities url as mentioned above
		// 	build,
		// },
		// {
		// 	name: 'Run iOS phone only',
		// 	browserName: 'safari',
		// 	platformName: 'iOS',
		// 	phoneOnly: true,
		// 	// Extra caps
		// 	cacheId: 'q96a2zipwp', // See the capabilities url as mentioned above
		// 	build,
		// },
	],
	// Level of logging verbosity: trace | debug | info | warn | error | silent
	logLevel: 'error',
	// bail (default is 0 - don't bail, run all tests).
	bail: 0,
	baseUrl: 'https://www.saucedemo.com',
	//
	// Default timeout for all waitFor* commands.
	waitforTimeout: 10000,
	//
	// Default timeout in milliseconds for request
	// if browser driver or grid doesn't send response
	connectionRetryTimeout: 120000,
	//
	// Default request retries count
	connectionRetryCount: 3,

	framework: 'jasmine',
	reporters: ['spec'],
	services: ['sauce'],
	jasmineOpts: {
		defaultTimeoutInterval: 120000,
	},
};
