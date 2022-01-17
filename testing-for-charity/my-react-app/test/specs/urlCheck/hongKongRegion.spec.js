var homePage = require('../../../pageObject/home.page');

describe('Hong Kong region url check', async () => {
    before(async () => {
        await homePage.open('hongKong');
        await browser.execute('/*@visual.init*/', 'My React App');
    });

    after(async () => {
        await browser.execute('/*@visual.end*/');
    });

    it('HomePage check', async () => {
        await homePage.makeScreenShot('Hong Kong - HomePage');
    });
});