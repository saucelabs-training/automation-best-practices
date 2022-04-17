var homePage = require('../../../pageObject/home.page');
const { assert } = require('assert');

describe('Navigation check', () => {
    beforeEach(async () => {
        await homePage.open('australia');
    });

    afterEach(async () => {
        await browser.reloadSession();;
    });

    it('Accessories: Bags check', async () => {
        await homePage.initialize('Bags check');
        await homePage.closeCountryModal();
        await (await (await homePage.navigationHeader()).selectFromAccessories('Bags')).makeScreenShot('Bags category results');
        const result = await homePage.resolve();
        assert.ok(result.passed, result.message);
    });

    it('Accessories: Hats check', async () => {
        await homePage.initialize('Hats check');
        await homePage.closeCountryModal();
        await (await (await homePage.navigationHeader()).selectFromAccessories('Hats')).makeScreenShot('Hats category results');
        const result = await homePage.resolve();
        assert.ok(result.passed, result.message);
    });

    it('Accessories: Equipment check', async () => {
        await homePage.initialize('Equipment check');
        await homePage.closeCountryModal();
        await (await (await homePage.navigationHeader()).selectFromAccessories('Equipment')).makeScreenShot('Equipment category results');
        const result = await homePage.resolve();
        assert.ok(result.passed, result.message);
    });

    it('Accessories: Water Bottles check', async () => {
        await homePage.initialize('Water Bottles check');
        await homePage.closeCountryModal();
        await (await (await homePage.navigationHeader()).selectFromAccessories('Water Bottles')).makeScreenShot('Water Bottles category results');
        const result = await homePage.resolve();
        assert.ok(result.passed, result.message);
    });
});
