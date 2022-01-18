var homePage = require('../../../pageObject/home.page');
const { assert } = require('assert');

describe('United Kingdom region url check', async () => {
    before(async () => {
        await homePage.open('unitedKingdom');
    });

    it('HomePage check', async () => {
        await homePage.initialize('United Kingdom homePage check')
        await homePage.closeCountryModal();
        await homePage.makeScreenShot('United Kingdom - HomePage');
        const result = await homePage.resolve();
        assert.ok(result.passed, result.message);
    });
});