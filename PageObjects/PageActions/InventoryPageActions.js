export class inventoryPageElements {
  inventoryContainer() {
    cy.get("#inventory_container").should("be.visible");
  }

  inventoryList() {
    cy.get(".inventory_list").should("be.visible");
  }
}
