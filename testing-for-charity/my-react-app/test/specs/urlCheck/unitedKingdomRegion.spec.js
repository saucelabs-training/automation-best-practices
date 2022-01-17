var homePage = require('../../../pageObject/home.page');

describe('United Kingdom region url check', async () => {
    before(async () => {
        await homePage.open('unitedKingdom');
        await browser.execute('/*@visual.init*/', 'My React App');
    });

    after(async () => {
        await browser.execute('/*@visual.end*/');
    });

    it('HomePage check', async () => {
        await homePage.makeScreenShot('United Kingdom - HomePage');
    });
});