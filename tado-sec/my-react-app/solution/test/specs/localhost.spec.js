describe('My local react app', () => {
	it('renders', async () => {
		// navigate to the default url found in wdio.conf.js
		await browser.url('/');
		// create image variable
		const image = await $('[data-testid="main-img"]');
		// check if image is displayed
		await image.waitForDisplayed();
	});
});
