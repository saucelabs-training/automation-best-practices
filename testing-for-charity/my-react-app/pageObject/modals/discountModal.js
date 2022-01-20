const Modal = require("./modal");

class DiscountModal extends Modal {
    get modalSelector() {
        return $('//div[@class="header-img-overlay"]');
    }

    async closeModal() {
        super.close(await this.modalSelector)
    }

    async isDisplayed() {
        return super.isDisplayed(await this.modalSelector);
    }
}

module.exports = new DiscountModal();
