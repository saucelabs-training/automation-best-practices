var homePage = require('../../../pageObject/home.page');

describe('Australia region', async () => {
	// before(async () => {
	// 	await homePage.open('uk');
	// });

	it('HomePage check', async () => {
        await browser.url('https://www.lululemon.com.au/en-au/p/rain-chaser-jacket/prod9750607.html?dwvar_prod9750607_color=0001');

        await $('//a[@data-dismiss="modal"]').click();

		//init only with the country name
		//await homePage.initialize('newZeland');
		//the hardest part is ensuring that the page is in the correct state before a snapshot
		//await homePage.closeCountryModal();
        await browser.execute('/*@visual.init*/', 'australia', {ignore: '#nebula_div_btn, .bv-content-list-container'});
		//snapshot should contain only the page/component name
		await browser.execute('/*@visual.snapshot*/', 'Womens jacket');

        await $('//label[@for="12"]').click()

        await $('//*[contains(@class,"add-to-cart-section")]').click();

        await browser.execute('/*@visual.snapshot*/', 'Checkout popup');

        await browser.url('https://www.lululemon.com.au/en-au/my-bag');

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
