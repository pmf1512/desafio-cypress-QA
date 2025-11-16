// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Lida com exceções não capturadas para evitar que quebrem os testes
Cypress.on('uncaught:exception', (err) => {
  // Impede que esse erro quebre o teste
  if (err.message.includes("appendChild") || err.message.includes("Unexpected token '<'")) {
    return false;
  }
});