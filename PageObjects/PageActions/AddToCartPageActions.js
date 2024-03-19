export class addToCartPageElements {
  addBackpack() {
    cy.get("[data-test=add-to-cart-sauce-labs-backpack]").click();
  }

  addBikeLight() {
    cy.get("[data-test=add-to-cart-sauce-labs-bike-light]").click();
  }

  addTShirt() {
    cy.get("[data-test=add-to-cart-sauce-labs-bolt-t-shirt]").click();
  }

  addJacket() {
    cy.get("[data-test=add-to-cart-sauce-labs-fleece-jacket]").click();
  }

  addOnesie() {
    cy.get("[data-test=add-to-cart-sauce-labs-onesie]").click();
  }

  shoppingCartButton() {
    cy.get(".shopping_cart_link").click();
  }
}