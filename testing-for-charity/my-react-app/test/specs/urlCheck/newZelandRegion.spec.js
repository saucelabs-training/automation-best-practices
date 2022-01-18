var homePage = require('../../../pageObject/home.page');
const { assert } = require('assert');

describe('New Zeland region url check', async () => {
    before(async () => {
        await homePage.open('newZeland');
    });

    it('HomePage check', async () => {
        await homePage.initialize('New Zeland homePage check')
        await homePage.closeCountryModal();
        await homePage.makeScreenShot('New Zeland - HomePage');
        const result = await homePage.resolve();
        assert.ok(result.passed, result.message);
    });
});