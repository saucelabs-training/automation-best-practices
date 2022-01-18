var homePage = require('../../../pageObject/home.page');
const { assert } = require('assert');

describe('Deutschland region url check', async () => {
    before(async () => {
        await homePage.open('deutschland');
    });

    it('HomePage check', async () => {
        await homePage.initialize('Deutschland homePage check')
        await homePage.closeCountryModal();
        await homePage.makeScreenShot('Deutschland - HomePage');
        const result = await homePage.resolve();
        assert.ok(result.passed, result.message);
    });
});