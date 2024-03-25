/// <reference types='cypress' />

import { addToCartPageElements } from "../../../PageObjects/PageActions/AddToCartPageActions";
import { burgerMenuPageElements } from "../../../PageObjects/PageActions/BurgerMenuPageActions";
import { cartPageElements } from "../../../PageObjects/PageActions/CartPageActions";
import { completePageElements } from "../../../PageObjects/PageActions/CompletePageActions";
import { filterPageElements } from "../../../PageObjects/PageActions/FilterPageActions";
import { footerPageElements } from "../../../PageObjects/PageActions/FooterPageActions";
import { infoPageElements } from "../../../PageObjects/PageActions/InfoPageActions";
import { inventoryItemPageElements } from "../../../PageObjects/PageActions/InventoryItemPageActions";
import { inventoryPageElements } from "../../../PageObjects/PageActions/InventoryPageActions";
import { loginPageElements } from "../../../PageObjects/PageActions/LoginPageActions";
import { mainPageElements } from "../../../PageObjects/PageActions/MainPageActions";
import { overviewPageElements } from "../../../PageObjects/PageActions/OverviewPageActions";
import { url } from "../../../PageObjects/PageElements/LoginPageElements.json"

const Login_Elements = new loginPageElements();
const Main_Elements = new mainPageElements();
const Cart_Elements = new cartPageElements();
const Info_Elements = new infoPageElements();
const Overview_Elements = new overviewPageElements();
const Complete_Elements = new completePageElements();
const BurgerMenu_Elements = new burgerMenuPageElements();
const Filter_Elements = new filterPageElements();
const Inventory_Elements = new inventoryPageElements();
const InventoryItem_Elements = new inventoryItemPageElements();
const Footer_Elements = new footerPageElements();
const AddToCart_Elements = new addToCartPageElements(); 

describe("Swag Labs tests", () => {
  beforeEach(() => {
    cy.visit(url);
    Login_Elements.username();
    Login_Elements.password();
    Login_Elements.loginButton();
  });

  it("Login on website", () => {
    cy.title().should("eq", "Swag Labs");
  });

  it("Header test", () => {
    Main_Elements.burgerVisible();
    Main_Elements.logoVisible();
    Main_Elements.shoppingCartVisible();
  });

  it("Burger menu test", () => {
    BurgerMenu_Elements.burgerButton();
    BurgerMenu_Elements.burgerMenuVisible();
    BurgerMenu_Elements.allItems();
    BurgerMenu_Elements.about();
    BurgerMenu_Elements.logout();
    BurgerMenu_Elements.reset();
  });

  it("Filter test", () => {
    Filter_Elements.optionAZ();
    Filter_Elements.optionZA();
    Filter_Elements.optionLH();
    Filter_Elements.optionHL();
    cy.get("[data-test=product_sort_container]").should(
      "have.text",
      "Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)"
    );
  });

  it("Inventory list test", () => {
    Inventory_Elements.inventoryContainer();
    Inventory_Elements.inventoryList();
  });

  it("Inventory item test", () => {
    InventoryItem_Elements.imgVisible();
    InventoryItem_Elements.nameVisible();
    InventoryItem_Elements.descVisible();
    InventoryItem_Elements.priceVisible();
    InventoryItem_Elements.cartButton();
  });

  it("Footer test", () => {
    Footer_Elements.twitterVisible();
    Footer_Elements.facebookVisible();
    Footer_Elements.linkedinVisible();
    cy.get(".footer_copy")
      .should("be.visible")
      .and(
        "have.text",
        "© 2024 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy"
      );
  });

  it("Add to cart test", () => {
    AddToCart_Elements.addBackpack();
    AddToCart_Elements.addBikeLight();
    AddToCart_Elements.addTShirt();
    AddToCart_Elements.addJacket();
    AddToCart_Elements.addOnesie();
    cy.get(".shopping_cart_link").should("have.text", "5");
  });

  it("Make order test", () => {
    AddToCart_Elements.addBackpack();
    AddToCart_Elements.addBikeLight();
    AddToCart_Elements.shoppingCartButton();
    Cart_Elements.checkoutButton();
    Info_Elements.firstName();
    Info_Elements.lastName();
    Info_Elements.postalCode();
    Info_Elements.continueButton();
    Overview_Elements.finishButton();
    Complete_Elements.title();
    Complete_Elements.header();
    cy.get(".complete-text").should(
      "have.text",
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
    );
  });
});
