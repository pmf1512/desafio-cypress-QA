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

    if (username) {
      cy.get(this.usernameField).clear().type(username);
    } else {
      cy.get(this.usernameField).clear(); 
    }

    if (password) {
      cy.get(this.passwordField)
        .should('not.be.disabled')
        .clear()
        .type(password);
    } else {
      cy.get(this.passwordField).clear(); 
    }

    cy.get(this.loginButton).click();
  }

  getErrorMessage() {
    return cy.get(this.errorMessage);
  }
}

export default new LoginPage();
