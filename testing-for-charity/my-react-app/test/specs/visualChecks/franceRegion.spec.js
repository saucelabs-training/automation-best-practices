var homePage = require('../../../pageObject/home.page');
const { assert } = require('assert');

describe('France region url check', async () => {
    before(async () => {
        await homePage.open('france');
    });

    it('HomePage check', async () => {
        await homePage.initialize('France homePage check')
        await homePage.closeCountryModal();
        await homePage.makeScreenShot('France - HomePage');
        const result = await homePage.resolve();
        assert.ok(result.passed, result.message);
    });
});