var homePage = require('../../../pageObject/home.page');

describe('New Zeland region url check', async () => {
    before(async () => {
        await homePage.open('newZeland');
        await browser.execute('/*@visual.init*/', 'My React App');
    });

    after(async () => {
        await browser.execute('/*@visual.end*/');
    });

    it('HomePage check', async () => {
        await homePage.makeScreenShot('New Zeland - HomePage');
    });
});