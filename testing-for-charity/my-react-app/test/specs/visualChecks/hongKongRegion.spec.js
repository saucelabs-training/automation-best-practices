var homePage = require('../../../pageObject/home.page');
const { assert } = require('assert');

describe('Hong Kong region url check', async () => {
    before(async () => {
        await homePage.open('hongKong');
    });

    it('HomePage check', async () => {
        await homePage.initialize('Hong Kong homePage check')
        await homePage.closeCountryModal();
        await homePage.makeScreenShot('Hong Kong - HomePage');
        const result = await homePage.resolve();
        assert.ok(result.passed, result.message);
    });
});