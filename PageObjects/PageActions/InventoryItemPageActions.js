export class inventoryItemPageElements {
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
}