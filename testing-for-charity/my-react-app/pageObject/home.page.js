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
        browser.pause(2000);
        if(await this.countryModal.isDisplayed())
            await this.countryModal.closeModal();

        return this;
    }

    async closeDiscountModal() {
        await browser.waitUntil(
            async () => await this.discountModal.isDisplayed(),
            {
                timeout: 30000
            }
        );
        await this.discountModal.closeModal();
        
        return this;
    }

    async navigationHeader() {
        return await this.navHeader;
    }

    async acceptCookies() {
        browser.pause(2000);

        if(await $('//button[@id="onetrust-accept-btn-handler"]').isDisplayed())
            await $('//button[@id="onetrust-accept-btn-handler"]').click();

        return this;
    }
}

module.exports = new HomePage();
