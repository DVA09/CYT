/// <reference types='cypress' />

describe("Swag Labs tests", () => {
  const USER_NAME = "standard_user";
  const USER_PASSWORD = "secret_sauce";

  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("[data-test=username]").type(USER_NAME);
    cy.get("[data-test=password]").type(USER_PASSWORD);
    cy.get("[data-test=login-button]").click();
  });

  it("Login on website", () => {
    cy.title().should("eq", "Swag Labs");
  });

  it("Header test", () => {
    cy.get("#react-burger-menu-btn").should("be.visible");
    cy.get(".app_logo").should("be.visible");
    cy.get(".shopping_cart_link").should("be.visible");
  });

  it("Burger menu test", () => {
    cy.get("#react-burger-menu-btn").click();
    cy.get(".bm-menu").should("be.visible");
    cy.get("#inventory_sidebar_link").contains("All Items");
    cy.get("#about_sidebar_link").contains("About");
    cy.get("#logout_sidebar_link").contains("Logout");
    cy.get("#reset_sidebar_link").contains("Reset App State");
  });

  it("Filter test", () => {
    cy.get("[data-test=product_sort_container]").should(
      "have.text",
      "Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)"
    );
    cy.get("[value=az]").should("have.text", "Name (A to Z)");
    cy.get("[value=za]").should("have.text", "Name (Z to A)");
    cy.get("[value=lohi]").should("have.text", "Price (low to high)");
    cy.get("[value=hilo]").should("have.text", "Price (high to low)");
  });

  it("Inventory list test", () => {
    cy.get("#inventory_container").should("be.visible");
    cy.get(".inventory_list").should("be.visible");
  });

  it("Inventory item test", () => {
    cy.get(".inventory_item_img").should("be.visible");
    cy.get(".inventory_item_name").should("be.visible");
    cy.get(".inventory_item_desc").should("be.visible");
    cy.get(".inventory_item_price").should("be.visible");
    cy.get("[data-test=add-to-cart-sauce-labs-onesie]")
      .should("have.text", "Add to cart")
      .and("be.visible");
  });

  it("Footer test", () => {
    cy.get(".social_twitter").should("be.visible");
    cy.get(".social_facebook").should("be.visible");
    cy.get(".social_linkedin").should("be.visible");
    cy.get(".footer_copy")
      .should("be.visible")
      .and(
        "have.text",
        "© 2024 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy"
      );
  });

  it("Add to card test", () => {
    cy.get("[data-test=add-to-cart-sauce-labs-backpack]").click();
    cy.get("[data-test=add-to-cart-sauce-labs-bike-light]").click();
    cy.get("[data-test=add-to-cart-sauce-labs-bolt-t-shirt]").click();
    cy.get("[data-test=add-to-cart-sauce-labs-fleece-jacket]").click();
    cy.get("[data-test=add-to-cart-sauce-labs-onesie]").click();
    cy.get(".shopping_cart_link").should("have.text", "5");
  });

  it("Make order test", () => {
    cy.get("[data-test=add-to-cart-sauce-labs-backpack]").click();
    cy.get("[data-test=add-to-cart-sauce-labs-bike-light]").click();
    cy.get(".shopping_cart_link").click();
    cy.get("[data-test=checkout]").click();
    cy.get("[data-test=firstName]").type("John");
    cy.get("[data-test=lastName]").type("Doe");
    cy.get("[data-test=postalCode]").type("223355");
    cy.get("[data-test=continue]").click();
    cy.get("[data-test=finish]").click();
    cy.get(".title").should("have.text", "Checkout: Complete!");
    cy.get(".complete-header").should("have.text", "Thank you for your order!");
    cy.get(".complete-text").should(
      "have.text",
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
    );
  });
});
