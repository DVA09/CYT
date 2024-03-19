export class burgerMenuPageElements {
  burgerButton() {
    cy.get("#react-burger-menu-btn").click();
  }

  burgerMenuVisible() {
    cy.get(".bm-menu").should("be.visible");
  }

  allItems() {
    cy.get("#inventory_sidebar_link").contains("All Items");
  }

  about() {
    cy.get("#about_sidebar_link").contains("About");
  }

  logout() {
    cy.get("#logout_sidebar_link").contains("Logout");
  }

  reset() {
    cy.get("#reset_sidebar_link").contains("Reset App State");
  }
}
