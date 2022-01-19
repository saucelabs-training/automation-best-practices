var homePage = require('../../../pageObject/home.page');

describe('United Kingdom region url check', async () => {
	before(async () => {
		await homePage.open('unitedKingdom');
	});

	it('HomePage check', async () => {
		await homePage.initialize('unitedKingdom');
		await homePage.closeCountryModal();
		browser.execute('/*@visual.snapshot*/', 'HomePage');
		const result = await browser.execute('/*@visual.end*/');
		expect(result.message).toBeNull();
	});
});
