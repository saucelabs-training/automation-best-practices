describe('My react app', () => {
	it('renders', async () => {
		await browser.url('/');
		const elem = await $('[data-testid="main-img"]');
		await elem.waitForDisplayed();
	});
});
