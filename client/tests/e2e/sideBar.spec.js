 /// <reference types="Cypress" /> 

describe('<SideBar /> component', ()=> {
    before(() => {
        cy.visit('/addnew')
    })
    it('should render and open a burger menue', () => {
        cy.get('label[aria-label="navigation"]').click({force: true})
    }) 

    it('should render three nav buttons for each page', () => {
        cy.get('a[name="home"]').should('exist')
        cy.get('a[name="mycloset"]').should('exist')
        cy.get('a[name="new"]').should('exist')
        cy.get('a[name="new"]').should('have.class', 'active')
    }) 

    it('opens My Closet Page after clicking the button "my closet" and the navlink is active', () => {
        cy.get('a[name="mycloset"]').click()
        cy.url().should('include', '/mycloset')
        cy.get('label[aria-label="navigation"]').click({force: true})
        cy.get('a[name="mycloset"]').should('have.class', 'active')
    }) 
})