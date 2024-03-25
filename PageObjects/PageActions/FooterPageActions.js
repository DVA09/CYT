export class footerPageElements {
  twitterVisible() {
    cy.get(".social_twitter").should("be.visible");
  }

  facebookVisible() {
    cy.get(".social_facebook").should("be.visible");
  }

  linkedinVisible() {
    cy.get(".social_linkedin").should("be.visible");
  }
}
