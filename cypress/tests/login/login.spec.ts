import { loginElement }  from '../../support/locators/loginElement';

describe("Testes de Login", () => {
  // Executado antes de cada teste
  beforeEach(() => {
    // Acessa a página inicial do aplicativo
    cy.visit("/");
  });

  it("Deve fazer login e logout com sucesso", () => {
    cy.get(loginElement.loginTopbarButton).should("be.visible").click();
    cy.url().should('include', 'minha-conta/');
    cy.get(loginElement.loginUsernameInput).should("be.visible").type(Cypress.env("username"));
    cy.get(loginElement.loginPasswordInput).should("be.visible").type(Cypress.env("password"));
    cy.get(loginElement.loginButton).should("be.visible").click();
    cy.get(loginElement.topBar).should("contain", "Welcome pamelamaia_freitas !");
    cy.contains("Logout").should("be.visible").click();
    cy.get(loginElement.loginTopbarButton).should("be.visible");
  });

  it("Deve exibir erro para e-mail inválido", () => {
    cy.get(loginElement.loginTopbarButton).should("be.visible").click();
    cy.url().should('include', 'minha-conta/');
    cy.get(loginElement.loginUsernameInput).should("be.visible").type(Cypress.env("invalidUsername"));
    cy.get(loginElement.loginPasswordInput).should("be.visible").type(Cypress.env("invalidPassword"));
    cy.get(loginElement.loginButton).should("be.visible").click();
    cy.get(loginElement.invalidLoginMessage).should("contain", "Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.");
  });

    it("Deve exibir erro para senha inválida", () => {
    cy.get(loginElement.loginTopbarButton).should("be.visible").click();
    cy.url().should('include', 'minha-conta/');
    cy.get(loginElement.loginUsernameInput).should("be.visible").type(Cypress.env("username"));
    cy.get(loginElement.loginPasswordInput).should("be.visible").type(Cypress.env("invalidPassword"));
    cy.get(loginElement.loginButton).should("be.visible").click();
    cy.get(loginElement.invalidLoginMessage).should("contain", "Erro: A senha fornecida para o e-mail pamelamaia_freitas@hotmail.com está incorreta. Perdeu a senha?");
  });

}); 
