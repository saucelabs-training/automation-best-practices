var homePage = require('../../../pageObject/home.page');

describe('US region', async () => {
	// before(async () => {
	// 	await homePage.open('newZeland');
	// });

	it('HomePage check', async () => {
        await browser.url('https://shop.lululemon.com/p/jackets-and-hoodies-jackets/Down-For-It-All-Jacket/_/prod9201505?color=0001&sz=0');
		//init only with the country name
		//await homePage.initialize('newZeland');
		//the hardest part is ensuring that the page is in the correct state before a snapshot
		//await homePage.closeCountryModal();
        await browser.execute('/*@visual.init*/', 'us', {ignore: '#nebula_div_btn'});
		//snapshot should contain only the page/component name
		await browser.execute('/*@visual.snapshot*/', 'Womens jacket');

        await $('[data-testid="waypoint-wrapper"]').click();

        await browser.url('https://shop.lululemon.com/shop/mybag');

		await $('[data-funding-source="paypal"]').waitForDisplayed();

        await browser.execute('/*@visual.snapshot*/', 'My Bag');

        // await browser.refresh();

		// await $('#accessories-accordion').moveTo();
		// await $('#accessories-accordion').$('//a[@aria-label="Bags"]').click();

		// await browser.execute('/*@visual.snapshot*/', 'Bags');

        // await browser.refresh();

		// await $('#accessories-accordion').moveTo();
		// await $('#accessories-accordion').$('//a[@aria-label="Equipment"]').click();

		// await browser.execute('/*@visual.snapshot*/', 'Equipment');

		const result = await browser.execute('/*@visual.end*/');
		//don't change this assertion
		expect(result.message).toBeNull();
	});
});
