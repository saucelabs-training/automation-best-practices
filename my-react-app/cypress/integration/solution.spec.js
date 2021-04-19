/// <reference types="cypress" />

describe('The React app', () => {
    it('loads', ()=> {
        cy.visit('/')
        cy.get('.App-link').should('be.visible')
    })
    
    it('should click link',()=>{
        cy.visit('/');
        cy.get('[data-testid=learn-link]').click().url().should('not.contain','ultimateqa.com');
    })    
})
