var homePage = require('../../../pageObject/home.page');
const { assert } = require('assert');

describe('Korea region url check', async () => {
    before(async () => {
        await homePage.open('korea');
    });

    it('HomePage check', async () => {
        await homePage.initialize('Korea homePage check')
        await homePage.closeCountryModal();
        await homePage.makeScreenShot('Korea - HomePage');
        const result = await homePage.resolve();
        assert.ok(result.passed, result.message);
    });
});