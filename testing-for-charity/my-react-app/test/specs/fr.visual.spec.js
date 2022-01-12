describe('My app', () => {
    it('should look correct', async () => {
        await browser.url('https://www.lululemon.fr');
        await browser.execute('/*@visual.init*/', 'Lululemon FR');

        await browser.execute('/*@visual.snapshot*/', 'Home Page');

        const result = await browser.execute('/*@visual.end*/');
        expect(result.message).toBeNull();
    });
});
