//search and select item 
Cypress.Commands.add("searchAndClickItem", (itemName) => {
    cy.get('#search').type(itemName)
    cy.get('#search_mini_form > div.actions > button').click();
    cy.get('.wrapper > .products > :nth-child(1)').scrollIntoView().contains(itemName).click();
});

//select item size
Cypress.Commands.add("selectItemSize", (size ) => {

    const sizeOptions = {
        'extra-small': '#option-label-size-143-item-166',
        'small': '#option-label-size-143-item-167',
        'medium': '#option-label-size-143-item-168',
        'large': '#option-label-size-143-item-169',
        'extra-large': '#option-label-size-143-item-170'
    };

    const sizeOption = sizeOptions[size];

    cy.get(sizeOption).should('be.visible').click();

});

//select item color
Cypress.Commands.add("selectItemColor", (color) => {

    const colorOptions = {
        'black': '#option-label-color-93-item-49',
        'green': '#option-label-color-93-item-53',
        'yellow': '#option-label-color-93-item-60'
    };

    const colorOption = colorOptions[color];

    cy.get(colorOption).should('be.visible').click();

});

//select item quantity
Cypress.Commands.add("selectQuantity", (value) => {
         cy.get('#qty').clear().type(value)
});

//click add to cart button
Cypress.Commands.add("clickAddToCartBtn", () => {
    cy.get('#product-addtocart-button').contains('Add to Cart').click() 
});

//click navigate to shopping cart button
Cypress.Commands.add("clickAndNavigateToShoppingCart", () => {
    cy.get('.message-success > div').scrollIntoView().contains('shopping cart').click()
});