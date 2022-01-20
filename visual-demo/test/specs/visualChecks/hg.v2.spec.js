var homePage = require('../../../pageObject/home.page');

describe('Hong Kong region', async () => {
	before(async () => {
		await homePage.open('hongKong');
	});

	it('HomePage check', async () => {
		//init only with the country name
		await homePage.initialize('hongKong');
		//the hardest part is ensuring that the page is in the correct state before a snapshot
		await homePage.closeCountryModal();

		//snapshot should contain only the page/component name
		await browser.execute('/*@visual.snapshot*/', 'HomePage');

        await browser.refresh();

		await $('#Accessories-accordion').moveTo();
		await $('#Accessories-accordion').$('//a[@aria-label="Bags"]').click();

		await browser.execute('/*@visual.snapshot*/', 'Bags');

        await browser.refresh();

		await $('#Accessories-accordion').moveTo();
		await $('#Accessories-accordion').$('//a[@aria-label="Equipment"]').click();

		await browser.execute('/*@visual.snapshot*/', 'Equipment');

		const result = await browser.execute('/*@visual.end*/');
		//don't change this assertion
		expect(result.message).toBeNull();
	});
});
