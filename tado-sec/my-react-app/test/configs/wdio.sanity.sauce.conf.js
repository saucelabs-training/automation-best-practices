// const sauceOptions = {
// 	username: process.env.SAUCE_USERNAME,
// 	accesskey: process.env.SAUCE_ACCESS_KEY,
// };

exports.config = {
	runner: 'local',
	user: process.env.SAUCE_USERNAME,
	key: process.env.SAUCE_ACCESS_KEY,
	region: 'us',
	services: [['sauce']],
	specs: ['./test/specs/**/sanity.spec.js'],
	// Patterns to exclude.
	exclude: [
		// 'path/to/excluded/files'
	],
	//
	// ============
	// Capabilities
	// ============
	maxInstances: 100,
	capabilities: [
		//Desktop A 28%: https://www.w3schools.com/browsers/browsers_display.asp
		{
			browserName: 'chrome',
			platformName: 'windows 10',
			browserVersion: 'latest',
			// 'sauce:options': {
			// 	...sauceOptions,
			// },
		},
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
	jasmineOpts: {
		defaultTimeoutInterval: 120000,
	},
};
