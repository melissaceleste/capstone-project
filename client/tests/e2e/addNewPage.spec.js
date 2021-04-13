 /// <reference types="Cypress" /> 

describe('<AddNew /> component', ()=> {
    before(() => {
        cy.visit('/addnew')
    })

    it('should render several inputs', () => {
        cy.get('input[name="file"]').should('exist')
        cy.get('input[name="nameOfClothing"]').should('exist')
        cy.get('input[name="store"]').should('exist')
        cy.get('input[name="price"]').should('exist')
        cy.get('input[name="date"]').should('exist')
        cy.get('input[name="clothingType"]').should('exist')
    })

    it('should open a modolar for uploading an image', ()=>{
        cy.get('button[name="open"]').click()
    }) 

    it('should close the modolar for uploading an image', ()=>{
        cy.get('button[aria-label="close"]').click()
    }) 

    it('should render a new card with the infos of the inputs', ()=>{
        cy.get('input[name="nameOfClothing"]').type('Minikleid')
        cy.get('input[name="store"]').type('Monki')
        cy.get('input[name="price"]').type('30')
        cy.get('input[name="date"]').type('2020-03-03')
        cy.get('[type="radio"]').check('Hose')
        cy.get('form').submit();
    }) 
 
})
