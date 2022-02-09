describe('Home page', () => {
	it('renders', async () => {
		await browser.url('/');
		const elem = await $('[data-testid="main-img"]');
		await elem.waitForDisplayed();
	});
	it('works with valid user', async () => {
		await browser.url('https://www.saucedemo.com');
		const elem = await $('#login-button');
		await elem.waitForDisplayed();
	});
});
