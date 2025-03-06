/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    login(username: string, password: string): Chainable<void>;
    logout(): Chainable<void>;
  }
}

Cypress.Commands.add("login", (username: string, password: string) => {
  cy.visit("/");

  // Intercepta a requisição de login
  cy.intercept("POST", "**/login").as("loginRequest");

  cy.get("#user-name").type(username);
  cy.get("#password").type(password);
  cy.get("#login-button").click();

});


Cypress.Commands.add("logout", () => {
  cy.get(".bm-burger-button").click();
  cy.contains("Logout").click();
});

