var homePage = require('../../../pageObject/home.page');

describe('Deutschland region', async () => {
	before(async () => {
		await homePage.open('europe');
	});

	it('HomePage check', async () => {
		//init only with the country name
		await homePage.initialize('europe');
		//the hardest part is ensuring that the page is in the correct state before a snapshot
		await homePage.acceptCookies();

        await $('//a[@data-dismiss="modal"]').click(); 

		//snapshot should contain only the page/component name
		browser.execute('/*@visual.snapshot*/', 'HomePage');

        await homePage.closeDiscountModal();

		await $('#accessories-accordion').moveTo();
		await $('#accessories-accordion').$('//a[@aria-label="Bags"]').click();

		browser.execute('/*@visual.snapshot*/', 'Bags');

		//another snapshot would just get added here
		await $('#accessories-accordion').moveTo();
		await $('#accessories-accordion').$('//a[@aria-label="Equipment"]').click();

		browser.execute('/*@visual.snapshot*/', 'Equipment');

		const result = await browser.execute('/*@visual.end*/');
		//don't change this assertion
		expect(result.message).toBeNull();
	});
});
