class CartComponent {
    get itemCount() {
        return cy.get('.fa-layers-counter');
    }
}

export default new CartComponent();
