describe('Home page', () => {
	it('works with valid user', async () => {
		await browser.url('');
		const elem = await $('#log-button');
		await elem.waitForDisplayed();
	});
	it('works with valid user', async () => {
		await browser.url('');
		const elem = await $('#login-button');
		await elem.waitForDisplayed();
	});
});
