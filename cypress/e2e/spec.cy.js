/// <reference types="cypress" />

describe('End-to-end shopping cart tests', () => {
  it('should allow a user to add items to the shopping cart', () => {

    //visit main page
    cy.visitMainPage();

    //check shopping cart is empty first
    cy.navigateToShoppingCart();
    cy.checkShoppingCartIsEmpty();

    //search Gwyn Endurance Tee Medium Green 
    cy.visitMainPage();
    cy.searchAndClickItem('Gwyn Endurance Tee');
    cy.checkUrlContains('gwyn-endurance-tee');
    cy.verifyPageTitle('Gwyn Endurance Tee');
    cy.verifyItemIsAvailable('In stock');

    //Add to cart Gwyn Endurance Tee Medium Green - 4 pieces
    cy.selectItemColor('green');
    cy.selectItemSize('medium');
    cy.wait(500);
    cy.selectQuantity(4);
    cy.clickAddToCartBtn();
    cy.verifySuccessMessage('You added Gwyn Endurance Tee to your shopping cart');

    //navigate to shopping cart
    cy.navigateToShoppingCart();
    cy.wait(1000);

    //Check cart total equal to $92.00 
    cy.checkCartTotal(92);
  
    //Update Quantity of Gwyn Endurance Tee Medium Green to 3 
    cy.updateQuantity(4,3);
    cy.clickUpdateShoppingCartBtn();
    cy.wait(2000);

    //select Gwyn Endurance Tee small Yellow - 1 piece
    cy.visitMainPage();
    cy.searchAndClickItem('Gwyn Endurance Tee');
    cy.wait(500);
    cy.checkUrlContains('gwyn-endurance-tee');
    cy.verifyPageTitle('Gwyn Endurance Tee');
    cy.verifyItemIsAvailable('In stock');
    cy.selectItemColor('yellow');
    cy.selectItemSize('small');
    cy.wait(500);
    cy.selectQuantity(1);
    cy.clickAddToCartBtn();
    cy.verifySuccessMessage('You added Gwyn Endurance Tee to your shopping cart');

    //select one Quest Lumaflex™ Band
    cy.visitMainPage();
    cy.searchAndClickItem('Quest Lumaflex™ Band');
    cy.checkUrlContains('quest-lumaflex-trade-band');
    cy.verifyPageTitle('Quest Lumaflex™ Band');
    cy.verifyItemIsAvailable('In stock');
    cy.selectQuantity(1);
    cy.clickAddToCartBtn();
    cy.verifySuccessMessage('You added Quest Lumaflex™ Band to your shopping cart');

    //check Cart Total equal to $116.00 
    cy.navigateToShoppingCart();
    cy.checkCartTotal(116);

    //proceed to checkout
    cy.clickProceedToCheckOut();
    cy.checkUrlContains('checkout/#shipping');

    //select Address - United Kingdom
    cy.selectAddress('GB');
    cy.verifyAddress('United Kingdom');

  });
});
