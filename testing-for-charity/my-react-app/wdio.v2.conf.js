const visualOptions = {
    apiKey: 'd04ef66f-0046-42a3-960a-b9fcdeb7bc4c',
    projectName: 'lululemon Chrome'
};
const sauceOptions = {
    username: 'Oleksandr_Yuzhnyi',
    accesskey: 'b3d08698-2412-49d7-9d87-db6fab7e411b'
};
exports.config = {
	region: process.env.REGION || 'us',
	services: [['sauce']],
	specs: [
		'./test/specs/**/us.v2.spec.js',
		'./test/specs/**/uk.v2.spec.js'
	],
	// Patterns to exclude.
	exclude: [
		// 'path/to/excluded/files'
	],
	maxInstances: 10,
	hostname: 'hub.screener.io',
	port: 443,
	protocol: 'https',
	path: '/wd/hub',
	capabilities: [
		//Desktop A 28%: https://www.w3schools.com/browsers/browsers_display.asp
		{
			browserName: 'chrome',
			platformName: 'windows 10',
			browserVersion: 'latest',
			'sauce:options': {
				...sauceOptions,
			},
			'sauce:visual': {
				...visualOptions,
				viewportSize: '1366x768',
			},
		},
	],
	//
	// ===================
	// Test Configurations
	// ===================
	// Level of logging verbosity: trace | debug | info | warn | error | silent
	logLevel: 'error',
	bail: 0,
	baseUrl: '',
	waitforTimeout: 10000,
	connectionRetryTimeout: 120000,
	connectionRetryCount: 3,
	framework: 'mocha',
	reporters: ['spec'],
	mochaOpts: {
		ui: 'bdd',
		timeout: 200000,
	},
	before: function (browser) {
		browser.overwriteCommand('click', async function (origClickFunction, { force = false } = {}) {
			if (!force) {
				try {
					return origClickFunction()
				} catch (err) {
					if (err.message.includes('not clickable at point')) {
						await this.scrollIntoView()
						return origClickFunction()
					}
					throw err
				}
			}
			await browser.execute((el) => {
				el.click()
			}, this)
		}, true)
    },
};
