/// <reference types='cypress' />

import { cartPageElements } from "../../../PageObjects/PageActions/CartPageActions";
import { completePageElements } from "../../../PageObjects/PageActions/CompletePageActions";
import { infoPageElements } from "../../../PageObjects/PageActions/InfoPageActions";
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

describe("Swag Labs tests", () => {
  beforeEach(() => {
    cy.visit(url);
    Login_Elements.username();
    Login_Elements.password();
    Login_Elements.loginButton();
  });

  it("Login on website", () => {
    Main_Elements.title();
  });

  it("Header test", () => {
    Main_Elements.burgerVisible();
    Main_Elements.logoVisible();
    Main_Elements.shoppingCartVisible();
  });

  it("Burger menu test", () => {
    Main_Elements.burgerButton();
    Main_Elements.burgerMenuVisible();
    Main_Elements.allItems();
    Main_Elements.about();
    Main_Elements.logout();
    Main_Elements.reset();
  });

  it("Filter test", () => {
    Main_Elements.filter();
    Main_Elements.optionAZ();
    Main_Elements.optionZA();
    Main_Elements.optionLH();
    Main_Elements.optionHL();
  });

  it("Inventory list test", () => {
    Main_Elements.inventoryContainer();
    Main_Elements.inventoryList();
  });

  it("Inventory item test", () => {
    Main_Elements.imgVisible();
    Main_Elements.nameVisible();
    Main_Elements.descVisible();
    Main_Elements.priceVisible();
    Main_Elements.cartButton();
  });

  it("Footer test", () => {
    Main_Elements.twitterVisible();
    Main_Elements.facebookVisible();
    Main_Elements.linkedinVisible();
    Main_Elements.copyVisible();
  });

  it("Add to cart test", () => {
    Main_Elements.addBackpack();
    Main_Elements.addBikeLight();
    Main_Elements.addTShirt();
    Main_Elements.addJacket();
    Main_Elements.addOnesie();
    Main_Elements.totalEqual();
  });

  it("Make order test", () => {
    Main_Elements.addBackpack();
    Main_Elements.addBikeLight();
    Main_Elements.shoppingCartButton();
    Cart_Elements.checkoutButton();
    Info_Elements.firstName();
    Info_Elements.lastName();
    Info_Elements.postalCode();
    Info_Elements.continueButton();
    Overview_Elements.finishButton();
    Complete_Elements.title();
    Complete_Elements.header();
    Complete_Elements.textComplete();
  });
});
