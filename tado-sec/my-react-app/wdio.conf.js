const visualOptions = {
    apiKey: process.env.SCREENER_API_KEY,
    projectName: 'testing-for-good'
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
            'sauce:visual': {
                ...visualOptions,
                viewportSize: '1366x768'
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
                viewportSize: '1366x768'
            }
        },
        // // https://yesviz.com/iphones.php
        // // iphone12
        // {
        //     browserName: 'safari',
        //     platformName: 'macOS 10.15',
        //     browserVersion: 'latest',
        //     'sauce:options': {
        //         ...sauceOptions,
        //     },
        //     'sauce:visual': {
        //         ...visualOptions,
        //         viewportSize: '390x844'
        //     }
        // },
        // //12 pro max
        // {
        //     browserName: 'safari',
        //     platformName: 'macOS 10.15',
        //     browserVersion: 'latest',
        //     'sauce:options': {
        //         ...sauceOptions,
        //     },
        //     'sauce:visual': {
        //         ...visualOptions,
        //         viewportSize: '428x926'
        //     }
        // }
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
