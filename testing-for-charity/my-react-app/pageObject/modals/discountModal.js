const Modal = require("./modal");

class DiscountModal extends Modal {
    get modalSelector() {
        return $('//*[contains(@class,"email-signup-popup show")]');
    }

    async closeModal() {
        super.close(await this.modalSelector)
    }

    async isDisplayed() {
        return super.isDisplayed(await this.modalSelector);
    }
}

module.exports = new DiscountModal();
