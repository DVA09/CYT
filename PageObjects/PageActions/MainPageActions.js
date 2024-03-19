export class mainPageElements {
  burgerVisible() {
    cy.get("#react-burger-menu-btn").should("be.visible");
  }

  logoVisible() {
    cy.get(".app_logo").should("be.visible");
  }

  shoppingCartVisible() {
    cy.get(".shopping_cart_link").should("be.visible");
  }
}
