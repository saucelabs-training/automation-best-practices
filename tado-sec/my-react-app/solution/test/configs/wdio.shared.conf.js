exports.config = {
	// ====================
	// Runner Configuration
	// ====================
	runner: 'local',
	// ==================
	// Specify Test Files
	// ==================
	specs: ['./test/specs/**/login.spec.js'],
	exclude: ['./test/specs/**/sanity.spec.js'],
	// ============
	// Capabilities
	// ============
	maxInstances: 100,
	// capabilities can be found in the `wdio.saucelabs.conf.js`
	// ===================
	// Test Configurations
	// ===================
	logLevel: 'error',
	bail: 0,
	baseUrl: 'http://localhost:3000',
	waitforTimeout: 10000,
	connectionRetryTimeout: 90000,
	connectionRetryCount: 3,
	framework: 'jasmine',
	reporters: ['spec'],
	jasmineOpts: {
		defaultTimeoutInterval: 60000,
	},
	services: [],
};
