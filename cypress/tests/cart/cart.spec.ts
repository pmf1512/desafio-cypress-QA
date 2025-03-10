import LoginPage from "../../support/pageObjects/LoginPage";
import CartPage from "../../support/pageObjects/CartPage";

describe("Testes do Carrinho", () => {
  beforeEach(() => {
    LoginPage.visit();
    // Usando variáveis do .env para login
    LoginPage.login(Cypress.env("username"), Cypress.env("password"));
  });

  it("Deve adicionar um item ao carrinho", () => {
    // Acessar os itens do carrinho do config.env
    cy.fixture("checkout").then((data) => {
      const cartItem = Cypress.env("cart")[0]; // Acessando o primeiro item do carrinho
      CartPage.addToCart(cartItem); // Adicionando o primeiro produto do fixture
    });
    CartPage.goToCart();
    cy.get(".cart_item").should("have.length", 1);
    cy.get(".cart_item .inventory_item_name").should("contain.text", "Sauce Labs Backpack");
  });

  it("Deve adicionar dois itens aleatórios ao carrinho", () => {
    cy.get(".inventory_item") // Pega todos os itens disponíveis na página
      .then(($items) => {
        // Seleciona dois itens aleatórios
        const randomItems = Cypress._.sampleSize($items.toArray(), 2); 

        // Adiciona os itens aleatórios ao carrinho
        randomItems.forEach(($item) => {
          // Usando jQuery para encontrar o nome do item
          const itemName = Cypress.$($item).find(".inventory_item_name").text();
          CartPage.addToCart(itemName); // Adiciona o item ao carrinho
        });
      });

    CartPage.goToCart();
    cy.get(".cart_item").should("have.length", 2); // Verifica se dois itens foram adicionados
  });


  it("Deve adicionar todos os itens ao carrinho", () => {
    cy.fixture("checkout").then((data) => {
      const products = Cypress.env("cart"); // Acessando os itens do carrinho
      products.forEach((product: string) => {
        CartPage.addToCart(product); // Adicionando todos os itens do fixture
      });
    });
    CartPage.goToCart();
    cy.get(".cart_item").should("have.length", 6); // A quantidade de itens no carrinho deve ser 6
    cy.get(".cart_item .inventory_item_name").each(($cartItem, index) => {
      const productName = $cartItem.text();
      cy.get(".cart_item").eq(index).find(".inventory_item_name").should("contain.text", productName);
    });
  });
});
