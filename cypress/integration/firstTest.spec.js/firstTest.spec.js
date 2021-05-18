
/// <reference types="cypress" />

const { equal } = require("assert")

describe('Our first suite',()=>{ 

it('first test',()=>{
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
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
    //by tag name, attribute with value, ID and Class name
    cy.get('input[placeholder="Email"]#inputEmail.input-full-width')
    //most recomended way by cypress(add your own attribute)
    cy.get('[data-cy="imputEmail1"]')
})

it('Second test',()=>{
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
    cy.get('[data-cy="SigninButton"]')
    cy.contains('Sign in')
    cy.contains('[status="warning"]','Sign in')
    cy.get('#inputEmail3')
    .parents('form')
    .find('button')
    .should('contain','Sign in')
    .parents('form')
    .find('nb-checkbox').click()
    cy.contains('nb-card','Horizontal form').find('#inputEmail3')
})

it.only('then and wrap methods',()=>
{
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
   // cy.contains('nb-card','Using the Grid').find('[for="inputEmail1"]').should('contain','Email')
    //cy.contains('nb-card','Using the Grid').find('[for="inputPassword2"]').should('contain','Password')
    //cy.contains('nb-card','Basic form').find('[for="exampleInputEmail1"]').should('contain','Email address')
    //cy.contains('nb-card','Basic form').find('[for="exampleInputPassword1"]').should('contain','Password')
cy.contains('nb-card','Using the Grid').then(grid =>
{
 //const emailfld=grid.find('[for="inputEmail1"]').text()
 //const pwdfl=grid.find('[for="inputPassword2"]').text()
 //const lblfld=grid.find
 //expect(emailfld).to.equal('Email')
 //expect(pwdfl).to.equal('Password')
 cy.contains('nb-card','Basic form').then(grid1=>{
     //const emailfld1=grid1.find('[for="exampleInputEmail1"]').text()
     //const pwdfld1=grid1.find('[for="exampleInputPassword1"]').text()
     //expect(emailfld1).to.equal('Email address')
     //expect(pwdfl).to.equal(pwdfld1)
     cy.wrap(grid).find('[for="inputEmail1"]').should('contain','Email')
     cy.wrap(grid).find('[for="inputPassword2"]').should('contain','Password')
     cy.wrap(grid1).find('[for="exampleInputEmail1"]').should('contain','Email address')
     cy.wrap(grid1).find('[for="exampleInputPassword1"]').should('contain','Password')
  

 })
})
})

})

    

        
