/// <reference types="Cypress" /> 

describe('<MyClosetPage /> page', ()=> {

    before(() => {
        cy.visit('/mycloset')
    })
    it('should render and open a button for opening the filter container', () => {
        cy.get('button[aria-label="show filter"]').click()
}) 

it('should filter the cards by user input', ()=>{
    cy.get('input[aria-label="name"]').type('kleid')
    cy.get('input[aria-label="store"]').type('Monki')
    cy.get('input[aria-label="minimum-price"]').type('45')
    cy.get('input[aria-label="maximum-price"]').type('55')
    cy.get('input[aria-label="minimum-date"]').type('2016-12-09')
    cy.get('input[aria-label="maximum-date"]').type('2019-05-23')
}) 

it('should reset all filters', () => {
    cy.get('button[name="reset"]').click()
}) 

})


