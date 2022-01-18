var Page = require('./page');
var countryModal = require('./modals/choseCountryModal');
var discountModal = require('./modals/discountModal');
var navHeader  = require('./components/navHeader');

class HomePage extends Page {
    get countryModal() {
        return countryModal;
    }

    get discountModal() {
        return discountModal;
    }

    get navHeader() {
        return navHeader;
    }

    async closeCountryModal() {
        await browser.pause(2000);

        if(await this.countryModal.isDisplayed())
            await this.countryModal.closeModal();

        return this;
    }

    async closeDiscountModal() {
        if(await this.discountModal.isDisplayed())
            await this.discountModal.closeModal();
        
            return this;
    }

    async navigationHeader() {
        return await this.navHeader;
    }
}

module.exports = new HomePage();
