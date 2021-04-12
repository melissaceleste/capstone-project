 /// <reference types="Cypress" /> 

describe('<SideBar /> component', ()=> {
    before(() => {
        cy.visit('/addnew')
    })
    it('should render and open a burger menue', () => {
        cy.get('label[aria-label="navigation"]').click({force: true})
    }) 

})