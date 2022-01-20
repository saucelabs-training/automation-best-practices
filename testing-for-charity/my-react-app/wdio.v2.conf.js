const visualOptions = {
	apiKey: process.env.SCREENER_API_KEY,
	projectName: 'lululemonv2',
};
const sauceOptions = {
	username: process.env.SAUCE_USERNAME,
	accesskey: process.env.SAUCE_ACCESS_KEY,
};
exports.config = {
	region: process.env.REGION || 'us',
	services: [['sauce']],
	specs: [
		'./test/specs/**/hg.v2.spec.js',
        './test/specs/**/au.v2.spec.js',
        './test/specs/**/nz.v2.spec.js',
        './test/specs/**/de.v2.spec.js',
        './test/specs/**/jp.v2.spec.js'
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
		// iphone viewport sizes https://yesviz.com/iphones.php
		//iphone 12 pro
		// {
		//   browserName: 'safari',
		//   platformName: 'macOS 11.00',
		//   browserVersion: 'latest',
		//   'sauce:options': {
		//     ...sauceOptions,
		//   },
		//   'sauce:visual': {
		//     ...visualOptions,
		//     viewportSize: '390x844',
		//   },
		// },
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
