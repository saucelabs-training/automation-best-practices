var homePage = require('../../../pageObject/home.page');

describe('United Kingdom region', async () => {
	before(async () => {
		await homePage.open('unitedKingdom');
	});

	it('HomePage check', async () => {
		//init only with the country name
		await homePage.initialize('unitedKingdom');
		//the hardest part is ensuring that the page is in the correct state before a snapshot
        await homePage.acceptCookies();
		await $('//a[@data-dismiss="modal"]').click();

		//snapshot should contain only the page/component name
		browser.execute('/*@visual.snapshot*/', 'HomePage');

		await $('#accessories-accordion').moveTo();
		await $('#accessories-accordion').$('//a[@aria-label="Bags"]').click();

		browser.execute('/*@visual.snapshot*/', 'Bags');

		const result = await browser.execute('/*@visual.end*/');
		//don't change this assertion
		expect(result.message).toBeNull();
	});
});
