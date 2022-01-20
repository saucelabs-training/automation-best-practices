describe('US region', async () => {
	it('HomePage check', async () => {
		await browser.url(
			'https://shop.lululemon.com/p/jackets-and-hoodies-jackets/Down-For-It-All-Jacket/_/prod9201505?color=0001&sz=0'
		);

		await browser.execute('/*@visual.init*/', 'us', {
			ignore: '#nebula_div_btn',
		});

		await browser.execute('/*@visual.snapshot*/', 'Womens jacket');

		await $('[data-testid="waypoint-wrapper"]').click();

		await browser.execute('/*@visual.snapshot*/', 'Checkout popup');

		await browser.url('https://shop.lululemon.com/shop/mybag');

		await browser.execute('/*@visual.snapshot*/', 'My Bag');

		const result = await browser.execute('/*@visual.end*/');
		expect(result.message).toBeNull();
	});
});
