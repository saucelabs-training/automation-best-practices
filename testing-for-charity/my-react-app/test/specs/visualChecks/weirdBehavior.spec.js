var homePage = require('../../../pageObject/home.page');

describe('Weird behaviors', async () => {
	it('HomePage check', async () => {
		await browser.url(
			'https://www.lululemon.co.uk/en-gb/p/wunder-puff-jacket/LW4BTJS.html'
		);
		await browser.execute('/*@visual.init*/', 'uk', {
			ignore: '#nebula_div_btn',
		});
		await homePage.closeCountryModal();
		browser.execute('/*@visual.snapshot*/', 'Wunder Puff Jacket');
		const result = await browser.execute('/*@visual.end*/');
		expect(result.message).toBeNull();
	});
});
