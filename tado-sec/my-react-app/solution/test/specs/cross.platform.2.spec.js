describe('Sauce Demo passing', () => {
	it('loads', async () => {
		// 1. Go to the home page
		await browser.url('');
		// 2. Create an element variable
		const elem = await $('#login-button');
		// 3. Verify the element is displayed
		await elem.waitForDisplayed();
	});
});
