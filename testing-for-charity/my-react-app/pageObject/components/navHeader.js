var ResultsPage = require('../results.page');

class NavHeader {
    get accessories() {
        return $('#accessories-accordion');
    }

    get community() {
        return $('#community-accordion');
    }

    async selectFromAccessories(itemName) {
        await this.accessories.moveTo();
        await this.accessories.$(`//a[@aria-label="${itemName}"]`).click();
        await browser.pause(2000);

        return ResultsPage;
    }

    async selectFromCommunity(itemName) {
        await this.community.moveTo();
        await this.community.$(`//a[@aria-label="${itemName}"]`).click();

        return ResultsPage;
    }
}

module.exports = new NavHeader();
