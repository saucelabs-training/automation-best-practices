/// <reference types="cypress" />

it('loads', ()=>{
    cy.visit('http://localhost:3000')
    cy.get('.new-todo').should('be.visible')
})