export class infoPageElements {
  firstName() {
    cy.get("[data-test=firstName]").type("John");
  }

  lastName() {
    cy.get("[data-test=lastName]").type("Doe");
  }

  postalCode() {
    cy.get("[data-test=postalCode]").type("223355");
  }

  continueButton() {
    cy.get("[data-test=continue]").click();
  }
}
