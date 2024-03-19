export class filterPageElements {
  optionAZ() {
    cy.get("[value=az]").should("have.text", "Name (A to Z)");
  }

  optionZA() {
    cy.get("[value=za]").should("have.text", "Name (Z to A)");
  }

  optionLH() {
    cy.get("[value=lohi]").should("have.text", "Price (low to high)");
  }

  optionHL() {
    cy.get("[value=hilo]").should("have.text", "Price (high to low)");
  }
}
