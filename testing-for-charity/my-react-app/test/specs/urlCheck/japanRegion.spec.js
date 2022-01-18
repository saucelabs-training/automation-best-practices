var homePage = require('../../../pageObject/home.page');
const { assert } = require('assert');

describe('Japan region url check', async () => {
    before(async () => {
        await homePage.open('japan');
    });

    it('HomePage check', async () => {
        await homePage.initialize('Japan homePage check')
        await homePage.closeCountryModal();
        await homePage.makeScreenShot('Japan - HomePage');
        const result = await homePage.resolve();
        assert.ok(result.passed, result.message);
    });
});