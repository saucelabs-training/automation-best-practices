const Modal = require("./modal");

class ChooseCountryModal extends Modal {
    get modalSelector() {
        return $('//*[contains(@class,"container-fluid")]');
    }

    async closeModal() {
        super.close(await this.modalSelector)
    }

    async isDisplayed() {
        return super.isDisplayed(await this.modalSelector);
    }
}

module.exports = new ChooseCountryModal();
