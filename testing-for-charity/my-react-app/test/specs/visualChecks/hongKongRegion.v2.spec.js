var homePage = require('../../../pageObject/home.page');

describe('Hong Kong region url check', async () => {
	before(async () => {
		await homePage.open('hongKong');
	});

	it('HomePage check', async () => {
		await homePage.initialize('hongKong');
		await homePage.closeCountryModal();
		browser.execute('/*@visual.snapshot*/', 'HomePage');
		const result = await browser.execute('/*@visual.end*/');
		expect(result.message).toBeNull();
	});
});
