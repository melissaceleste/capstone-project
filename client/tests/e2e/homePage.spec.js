/// <reference types="Cypress" /> 

describe('<HomePage /> page', ()=> {

    it('renders welcomepage and then the homepage', () => {
        cy.visit('/')
      })
    it('should render a button to show a random card', () => {
        cy.visit('/')
        cy.get('button[name="randomize"]').click({force: true})
}) 
})


