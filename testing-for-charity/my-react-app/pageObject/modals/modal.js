module.exports = class Modal {
    async close(selector) {
        await selector.$('//button[@class="close"]').click({force: true});
    }

    async isDisplayed(selector) {
        return await selector.isDisplayed();
    }
}
