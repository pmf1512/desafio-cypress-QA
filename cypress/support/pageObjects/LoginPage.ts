class LoginPage {
  private usernameField = "#user-name";
  private passwordField = "#password";
  private loginButton = "#login-button";
  private errorMessage = "[data-test='error']";

  visit() {
    cy.visit("/");
  }

  login(username: string, password: string) {
    this.visit();

    cy.intercept("POST", "**/login").as("loginRequest");

    // Verifica se o username não é undefined ou vazio e então preenche o campo
    if (username) {
      cy.get(this.usernameField).clear().type(username);
    } else {
      cy.get(this.usernameField).clear(); // Caso esteja vazio, limpa o campo
    }

    // Verifica se o password não é undefined ou vazio e então preenche o campo
    if (password) {
      cy.get(this.passwordField)
        .should('not.be.disabled')
        .clear()
        .type(password);
    } else {
      cy.get(this.passwordField).clear(); // Caso esteja vazio, limpa o campo
    }

    cy.get(this.loginButton).click();
  }

  getErrorMessage() {
    return cy.get(this.errorMessage);
  }
}

export default new LoginPage();
