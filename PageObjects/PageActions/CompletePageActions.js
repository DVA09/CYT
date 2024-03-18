export class completePageElements {
  title() {
    cy.get(".title").should("have.text", "Checkout: Complete!");
  }

  header() {
    cy.get(".complete-header").should("have.text", "Thank you for your order!");
  }

  textComplete() {
    cy.get(".complete-text").should(
        "have.text",
        "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
      );
  }
}
