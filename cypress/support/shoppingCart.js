//check shopping cart is empty
Cypress.Commands.add("checkShoppingCartIsEmpty", () => {
    cy.get('.cart-empty > :nth-child(1)').contains('You have no items in your shopping cart')
});


//check shopping cart total is equal to given value and prompt a message in command log
Cypress.Commands.add("checkCartTotal", (expectedTotal) => {
    cy.get('strong > .price').invoke('text').then((text) => {
      const cartTotal = Number.parseFloat(text.replace(/[^\d.-]/g, ''));
        if (cartTotal !== expectedTotal) {
            cy.log(`Expected Cart total should be $${expectedTotal}.00, but actual total is $${cartTotal}.00`);
        } else {
            cy.log(`Cart total is equal to ${expectedTotal}.`);
        }
    });
});

//update quantity of an item 
Cypress.Commands.add("updateQuantity", (oldValue, newValue) => {
        cy.get('.item-info input[data-cart-item-id="WS01-M-Green"]').should('have.value', oldValue)
        cy.get('.item-info input[data-cart-item-id="WS01-M-Green"]').clear().type(newValue).should('have.value', newValue);
});

//click update shopping cart button
Cypress.Commands.add("clickUpdateShoppingCartBtn", () => {
    cy.get('.update').click()
});

//click proceed to checkout button
Cypress.Commands.add("clickProceedToCheckOut", () => {
    cy.get('.checkout-methods-items > :nth-child(1) > .action').contains('Proceed to Checkout').click();
    cy.wait(2000)   
});

//select address
Cypress.Commands.add("selectAddress", (value) => {
    cy.get('[name="shippingAddress.country_id"]').scrollIntoView();
    cy.get('[name="country_id"]').select(value).should('have.value', value);
});
