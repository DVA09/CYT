export class loginPageElements {
  username() {
    cy.get("[data-test=username]").type("standard_user");
  }

  password() {
    cy.get("[data-test=password]").type("secret_sauce");
  }

  loginButton() {
    cy.get("[data-test=login-button]").click();
  }
}
