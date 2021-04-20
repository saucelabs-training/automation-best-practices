/// <reference types="cypress" />
it.only('loads', ()=> {
    /** Your code below */

    //1. Use cy.visit('') to go to the app url
    cy.visit('')
    //2. Use cy.get('element locator').should('be.visible') to assert valid state
    cy.get('.App-link').should('be.visible')
    /** Your code above */
})

it('should click link',()=>{
    /** Your code below */
    
    //1. Use cy.visit('') to go to the app url
    //2. Use cy.get('element locator') for the link
    // But now we will .click() the link and then assert that the 
    // .url().should('not.contain','ultimateqa.com');
      
    /** Your code above */
})