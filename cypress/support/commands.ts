/// <reference types="cypress" />

// Declaração do namespace Cypress, permitindo adicionar novos comandos personalizados no Cypress.
// O objetivo é garantir que o TypeScript reconheça a assinatura dos comandos personalizados, como login e logout.
declare namespace Cypress {
  interface Chainable {
    // Adiciona um comando personalizado para login que aceita 'username' e 'password' como parâmetros.
    login(): Chainable<void>;
 
    // Adiciona um comando personalizado para logout, sem parâmetros.
    logout(): Chainable<void>;
  }
}

// Adicionando o comando personalizado 'login' que simula o processo de login de um usuário.
Cypress.Commands.add("login", () => {
  const username = Cypress.env('username');
  const password = Cypress.env('password');

  cy.visit("/minha-conta/");
  cy.get("#username").type(username);
  cy.get("#password").type(password);
  cy.get("[value='Login']").click();
});

// Adicionando o comando personalizado 'logout' que simula o processo de logout de um usuário.
Cypress.Commands.add("logout", () => {
  // Encontra o link 'Logout' e clica para deslogar o usuário
  cy.contains("Logout").click();
});