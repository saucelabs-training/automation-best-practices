var homePage = require('../../../pageObject/home.page');

describe('United Kingdom region', async () => {
	it('HomePage check', async () => {
        await browser.url('https://www.lululemon.co.uk/en-gb/p/wunder-puff-crop-vest/prod9960896.html?dwvar_prod9960896_color=0001');

        await homePage.acceptCookies();
        await $('//a[@data-dismiss="modal"]').click();

        await browser.execute('/*@visual.init*/', 'uk', {ignore: '#nebula_div_btn, .bv-content-list-container'});
		
		await browser.execute('/*@visual.snapshot*/', 'Womens jacket');

        await $('//label[@for="12"]').click();

        await $('//*[contains(@class,"add-to-cart-section")]').click();

        //await browser.execute('/*@visual.snapshot*/', 'Checkout popup');  Issue with elements order

        await browser.url('https://www.lululemon.co.uk/en-gb/my-bag');

        await browser.execute('/*@visual.snapshot*/', 'My Bag');

		const result = await browser.execute('/*@visual.end*/');
		expect(result.message).toBeNull();
	});
});
