var homePage = require('../../../pageObject/home.page');
const { assert } = require('assert');

describe('Europe region url check', async () => {
    before(async () => {
        await homePage.open('europe');
    });

    it('HomePage check', async () => {
        await homePage.initialize('Europe homePage check')
        await homePage.closeCountryModal();
        await homePage.makeScreenShot('Europe - HomePage');
        const result = await homePage.resolve();
        assert.ok(result.passed, result.message);
    });
});