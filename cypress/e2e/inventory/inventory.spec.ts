import LoginPage from "../../support/pageObjects/LoginPage";
import InventoryPage from "../../support/pageObjects/InventoryPage";

describe("Testes do Carrinho", () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login("standard_user", "secret_sauce");
  });

  it("Deve adicionar um item ao carrinho", () => {
    InventoryPage.addToCart("Sauce Labs Backpack");
    InventoryPage.goToCart();
    cy.get(".cart_item").should("have.length", 1);
    cy.get(".cart_item .inventory_item_name").should("contain.text", "Sauce Labs Backpack");
  });

  it("Deve adicionar dois itens ao carrinho", () => {
    const products = ["Sauce Labs Backpack", "Sauce Labs Bike Light"];
    products.forEach((product) => {
      InventoryPage.addToCart(product);
    });
    InventoryPage.goToCart();
    cy.get(".cart_item").should("have.length", 2);
    cy.get(".cart_item .inventory_item_name").should("contain.text", "Sauce Labs Backpack");
    cy.get(".cart_item .inventory_item_name").should("contain.text", "Sauce Labs Bike Light");
  });

  it("Deve adicionar todos os itens ao carrinho", () => {
    cy.get(".inventory_item").each(($item) => {
      const productName = $item.find(".inventory_item_name").text();
      InventoryPage.addToCart(productName);
    });
    InventoryPage.goToCart();
    cy.get(".cart_item").should("have.length", 6);
    cy.get(".cart_item .inventory_item_name").each(($cartItem) => {
      const productName = $cartItem.text();
      cy.get(".inventory_item_name").should("contain.text", productName);
    });
  });

});
