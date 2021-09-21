const visualOptions = {
    apiKey: process.env.SCREENER_API_KEY,
    projectName: 'new-app',
    scrollAndStitchScreenshots: true
};
const sauceOptions = {
    username: process.env.SAUCE_USERNAME,
    accesskey: process.env.SAUCE_ACCESS_KEY
};

exports.config = {
    runner: 'local',
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    region: 'us',
    services: [
        ['sauce', {
            sauceConnect: true
        }]
    ],
    specs: [
        './test/specs/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    maxInstances: 100,
    //Screener config
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
            'sauce:visual':{
                ...visualOptions
            }
        },
        {
            browserName: 'safari',
            platformName: 'macOS 10.15',
            browserVersion: 'latest',
            'sauce:options': {
                ...sauceOptions,
            },
            'sauce:visual': {
                ...visualOptions,
                viewportSize: '375x812'
            }
        }
    ],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'debug',
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    baseUrl: 'http://localhost:3000',
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

    framework: 'mocha',
    reporters: ['spec'],
    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
