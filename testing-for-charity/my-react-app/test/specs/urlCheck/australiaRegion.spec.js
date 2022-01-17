var homePage = require('../../../pageObject/home.page');

describe('Australia region url check', () => {
    before(async () => {
        await homePage.open('australia');
        await browser.execute('/*@visual.init*/', 'My React App');
    });

    after(async () => {
        await browser.execute('/*@visual.end*/');
    });

    it('HomePage check', async () => {
        await homePage.makeScreenShot('Australia - HomePage');
    });
});