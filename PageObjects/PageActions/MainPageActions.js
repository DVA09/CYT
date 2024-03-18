export class mainPageElements {
  title() {
    cy.title().should("eq", "Swag Labs");
  }

  burgerVisible() {
    cy.get("#react-burger-menu-btn").should("be.visible");
  }

  logoVisible() {
    cy.get(".app_logo").should("be.visible");
  }

  shoppingCartVisible() {
    cy.get(".shopping_cart_link").should("be.visible");
  }

  //Burger Menu Tests
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

  //Filter Tests
  filter() {
    cy.get("[data-test=product_sort_container]").should(
      "have.text",
      "Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)"
    );
  }

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

  //Inventory Tests
  inventoryContainer() {
    cy.get("#inventory_container").should("be.visible");
  }

  inventoryList() {
    cy.get(".inventory_list").should("be.visible");
  }

  //Inventory Item Tests
  imgVisible() {
    cy.get(".inventory_item_img").should("be.visible");
  }

  nameVisible() {
    cy.get(".inventory_item_name").should("be.visible");
  }

  descVisible() {
    cy.get(".inventory_item_desc").should("be.visible");
  }

  priceVisible() {
    cy.get(".inventory_item_price").should("be.visible");
  }

  cartButton() {
    cy.get("[data-test=add-to-cart-sauce-labs-onesie]")
      .should("have.text", "Add to cart")
      .and("be.visible");
  }

  //Footer Tests
  twitterVisible() {
    cy.get(".social_twitter").should("be.visible");
  }

  facebookVisible() {
    cy.get(".social_facebook").should("be.visible");
  }

  linkedinVisible() {
    cy.get(".social_linkedin").should("be.visible");
  }

  copyVisible() {
    cy.get(".footer_copy")
      .should("be.visible")
      .and(
        "have.text",
        "© 2024 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy"
      );
  }

  //Add to cart test
  addBackpack() {
    cy.get("[data-test=add-to-cart-sauce-labs-backpack]").click();
  }

  addBikeLight() {
    cy.get("[data-test=add-to-cart-sauce-labs-bike-light]").click();
  }

  addTShirt() {
    cy.get("[data-test=add-to-cart-sauce-labs-bolt-t-shirt]").click();
  }

  addJacket() {
    cy.get("[data-test=add-to-cart-sauce-labs-fleece-jacket]").click();
  }

  addOnesie() {
    cy.get("[data-test=add-to-cart-sauce-labs-onesie]").click();
  }

  totalEqual() {
    cy.get(".shopping_cart_link").should("have.text", "5");
  }

  shoppingCartButton() {
    cy.get(".shopping_cart_link").click();
  }
}
