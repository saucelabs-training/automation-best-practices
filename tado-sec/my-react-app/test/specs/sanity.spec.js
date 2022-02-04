describe('My environment', () => {
	it('works', async () => {
		await browser.url('/');
		const elem = await $('#login-button');
		await elem.waitForDisplayed();
	});
});
