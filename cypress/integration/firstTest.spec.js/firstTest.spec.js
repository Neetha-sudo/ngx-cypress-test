
/// <reference types="cypress" />
describe('Our first suite',()=>{ 

it('first test',()=>{
    //by Tag Name
    cy.get('input')
    //by ID
    cy.get('#inputEmail')
    //by class name
    cy.get('.input-full-width')
    //by Attribute name
    cy.get('[placeholder]')
    //by attribute name and value
    cy.get('[placeholder="Email"]')
    //by class value
    cy.get('[class="input-full-width size-medium shape-rectangle"]')
    //by tag name and attribute with value
    cy.get('input[placeholder="Email"]')
    //by two different attributes
    cy.get('[placeholder="Email"][type="email"]')
})
})

    

        
