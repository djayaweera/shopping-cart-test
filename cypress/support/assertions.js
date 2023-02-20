Cypress.Commands.add('checkUrlContains', (urlSubstring) => {
    cy.url().should('contain', urlSubstring);
});
    
Cypress.Commands.add('verifyPageTitle', (pageTitle) => {
    cy.get('.base').should('have.text', pageTitle);
});
    
Cypress.Commands.add('verifyItemIsAvailable', (availability) => {
    cy.get('.stock > span').should('have.text', availability);
});

Cypress.Commands.add("verifySuccessMessage", (message) =>{
    cy.get('.message-success > div').scrollIntoView().contains(message)
});

Cypress.Commands.add("verifyAddress", (country) =>{
    cy.get('[name="shippingAddress.country_id"]').contains(country)
});