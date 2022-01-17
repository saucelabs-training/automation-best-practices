var homePage = require('../../../pageObject/home.page');

describe('Europe region url check', async () => {
    before(async () => {
        await homePage.open('europe');
        await browser.execute('/*@visual.init*/', 'My React App');
    });

    after(async () => {
        await browser.execute('/*@visual.end*/');
    });

    it('HomePage check', async () => {       
        await homePage.makeScreenShot('Europe - HomePage');
    });
});