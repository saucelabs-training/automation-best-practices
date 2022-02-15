describe('My app on localhost', () => {
	it('renders', async () => {
		await browser.url('/');
		const elem = await $('[data-testid="main-img"]');
		await elem.waitForDisplayed();
	});
});
