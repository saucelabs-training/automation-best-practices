var homePage = require('../../../pageObject/home.page');

describe('Deutschland region url check', async () => {
    before(async () => {
        await homePage.open('deutschland');
        await browser.execute('/*@visual.init*/', 'My React App');
    });

    after(async () => {
        await browser.execute('/*@visual.end*/');
    });

    it('HomePage check', async () => {
        await homePage.makeScreenShot('Deutschland - HomePage');
    });
});