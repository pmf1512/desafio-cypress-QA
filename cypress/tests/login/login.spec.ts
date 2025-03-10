import LoginPage from "../../support/pageObjects/LoginPage";

describe("Testes de Login", () => {
  // Executado antes de cada teste
  beforeEach(() => {
    // Acessa a página inicial do aplicativo
    cy.visit("/");
  });

  it("Deve fazer login com sucesso", () => {
    // Realiza o login com as credenciais do ambiente (definidas no .env)
    LoginPage.login(Cypress.env("username"), Cypress.env("password"));
    // Verifica se a URL contém '/inventory.html', indicando que o login foi bem-sucedido
    cy.url({ timeout: 10000 }).should('include', '/inventory.html');
  });

  it("Deve exibir erro para credenciais inválidas", () => {
    // Realiza o login com credenciais inválidas
    LoginPage.login(Cypress.env("invalidUsername"), Cypress.env("invalidPassword"));
    // Verifica se a mensagem de erro aparece corretamente
    LoginPage.getErrorMessage()
      .should("be.visible")
      .and("contain", "Epic sadface: Username and password do not match any user in this service");
  });

  it("Deve exibir erro para usuário bloqueado", () => {
    // Realiza o login com um usuário bloqueado
    LoginPage.login(Cypress.env("lockedUser"), Cypress.env("password"));
    // Verifica se a mensagem de erro aparece indicando que o usuário foi bloqueado
    LoginPage.getErrorMessage()
      .should("be.visible")
      .and("contain", "Epic sadface: Sorry, this user has been locked out.");
  });

  it("Deve fazer login com um usuário com problemas", () => {
    // Realiza o login com um usuário que pode ter problemas, como imagens de produtos
    LoginPage.login(Cypress.env("problemUser"), Cypress.env("password"));
    // Verifica se as imagens dos produtos estão visíveis, como parte do teste
    cy.get(".inventory_item_img").each(($img) => {
      cy.wrap($img).should("be.visible");
    });
  });

  it("Deve testar login com usuário de performance lenta", () => {
    // Intercepta a requisição de login para monitorar o tempo de resposta
    cy.intercept("POST", "**/login").as("loginRequest");
    LoginPage.login(Cypress.env("performanceUser"), Cypress.env("password"));
    // Verifica se a URL inclui '/inventory.html' após a tentativa de login
    cy.url({ timeout: 10000 }).should('include', '/inventory.html');
  });

});
