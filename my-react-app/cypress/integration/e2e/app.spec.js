/// <reference types="cypress" />
it('loads', ()=> {
    cy.visit('http://localhost:3000')
    cy.get('.App-link').should('be.visible')
})