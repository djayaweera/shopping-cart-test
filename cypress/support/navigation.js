//navigate to main page
Cypress.Commands.add("visitMainPage", () =>{
    cy.visit('https://magento.softwaretestingboard.com');
});

//navigate to shopping cart
Cypress.Commands.add("navigateToShoppingCart", () => {
    cy.visit('https://magento.softwaretestingboard.com/checkout/cart/')
    cy.get('.base').should('have.text', 'Shopping Cart')
    cy.url().should('contain', 'checkout/cart/')
});