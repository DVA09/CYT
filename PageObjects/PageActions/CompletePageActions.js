export class completePageElements {
  title() {
    cy.get(".title").should("have.text", "Checkout: Complete!");
  }

  header() {
    cy.get(".complete-header").should("have.text", "Thank you for your order!");
  }
}
