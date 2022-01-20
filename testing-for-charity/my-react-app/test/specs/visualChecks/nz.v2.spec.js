var homePage = require('../../../pageObject/home.page');

describe('New Zeland region', async () => {
	before(async () => {
		await homePage.open('newZeland');
	});

	it('HomePage check', async () => {
		//init only with the country name
		await homePage.initialize('newZeland');
		//the hardest part is ensuring that the page is in the correct state before a snapshot
		await homePage.closeCountryModal();

		//snapshot should contain only the page/component name
		await browser.execute('/*@visual.snapshot*/', 'HomePage');

        await browser.refresh();

		await $('#accessories-accordion').moveTo();
		await $('#accessories-accordion').$('//a[@aria-label="Bags"]').click();

		await browser.execute('/*@visual.snapshot*/', 'Bags');

        await browser.refresh();

		await $('#accessories-accordion').moveTo();
		await $('#accessories-accordion').$('//a[@aria-label="Equipment"]').click();

		await browser.execute('/*@visual.snapshot*/', 'Equipment');

		const result = await browser.execute('/*@visual.end*/');
		//don't change this assertion
		expect(result.message).toBeNull();
	});
});
