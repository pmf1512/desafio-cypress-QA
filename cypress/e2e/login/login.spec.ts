import LoginPage from "../../support/pageObjects/LoginPage";

describe("Testes de Login", () => {

  beforeEach(() => {
    cy.visit("/");
  });

  it("Deve fazer login com sucesso", () => {
    LoginPage.login(Cypress.env("username"),  Cypress.env("password"));
  });

  it("Deve exibir erro para credenciais inválidas", () => {

    LoginPage.login(Cypress.env("invalidUsername"), Cypress.env("invalidPassword"));

    LoginPage.getErrorMessage()
      .should("be.visible")
      .and("contain", "Epic sadface: Username and password do not match any user in this service");
  });

  it("Deve exibir erro para usuário bloqueado", () => {

    LoginPage.login(Cypress.env("lockedUser"),  Cypress.env("password"));

    LoginPage.getErrorMessage()
      .should("be.visible")
      .and("contain", "Epic sadface: Sorry, this user has been locked out.");
  });

  it("Deve fazer login com um usuário problemático", () => {

    LoginPage.login(Cypress.env("problemUser"),  Cypress.env("password"));

    // Exemplo: Verifica se as imagens dos produtos carregam corretamente
    cy.get(".inventory_item_img").each(($img) => {
      cy.wrap($img).should("be.visible");
    });
  });

  it("Deve testar login com usuário de performance lenta", () => {
    cy.intercept("POST", "**/login").as("loginRequest");

    LoginPage.login(Cypress.env("performanceUser"),  Cypress.env("password"));

    // Verifica se a URL foi alterada corretamente após login
    cy.url().should('include', '/inventory.html');
  });

});
