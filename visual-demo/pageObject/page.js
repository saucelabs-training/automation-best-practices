var locales = require('../options/locales.json');

module.exports = class Page {
    open(locale) {
        return browser.url(`https://www.lululemon.${locales[locale]}`);
    }

    async initialize(testName) {
        await browser.execute('/*@visual.init*/', testName);
    }

    resolve() {
        return browser.execute('/*@visual.end*/');
    }

    async makeScreenShot(screenShotName) {
        await $('//a[text()="Terms of Use"]').scrollIntoView();
        await browser.pause(5000);
        await $('//a[@class="minicart-link"]').scrollIntoView();
        await browser.execute('/*@visual.snapshot*/', screenShotName);
    }
}
