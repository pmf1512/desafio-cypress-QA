/// <reference types="cypress" />

// Declaração do namespace Cypress, permitindo adicionar novos comandos personalizados no Cypress.
// O objetivo é garantir que o TypeScript reconheça a assinatura dos comandos personalizados, como login e logout.
declare namespace Cypress {
  interface Chainable {
    // Adiciona um comando personalizado para login que aceita 'username' e 'password' como parâmetros.
    login(username: string, password: string): Chainable<void>;

    // Adiciona um comando personalizado para logout, sem parâmetros.
    logout(): Chainable<void>;
  }
}

// Adicionando o comando personalizado 'login' que simula o processo de login de um usuário.
Cypress.Commands.add("login", (username: string, password: string) => {
  // Visita a página inicial antes de realizar o login
  cy.visit("/");

  // Intercepta a requisição POST para '/login' e a nomeia como 'loginRequest' para monitoramento posterior.
  cy.intercept("POST", "**/login").as("loginRequest");

  // Preenche o campo de nome de usuário com o valor fornecido
  cy.get("#user-name").type(username);

  // Preenche o campo de senha com o valor fornecido
  cy.get("#password").type(password);

  // Clica no botão de login para submeter o formulário
  cy.get("#login-button").click();
});

// Adicionando o comando personalizado 'logout' que simula o processo de logout de um usuário.
Cypress.Commands.add("logout", () => {
  // Clica no botão do menu de navegação (geralmente no topo da tela)
  cy.get(".bm-burger-button").click();

  // Encontra o link 'Logout' e clica para deslogar o usuário
  cy.contains("Logout").click();
});
