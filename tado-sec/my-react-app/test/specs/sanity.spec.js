describe('My environment', () => {
	it('works', async () => {
		await browser.url('https://www.saucedemo.com');
		const elem = await $('#login-button');
		await elem.waitForDisplayed();
	});
});
