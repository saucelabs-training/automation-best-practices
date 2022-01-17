var locales = require('../options/locales.json');

module.exports = class Page {
    open(locale) {
        return browser.url(`https://www.lululemon.${locales[locale]}`);
    }

    makeScreenShot(screenShotName) {
        return browser.execute('/*@visual.snapshot*/', screenShotName);
    }
}
