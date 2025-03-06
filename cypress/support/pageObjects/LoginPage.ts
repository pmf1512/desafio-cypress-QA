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

    cy.get(this.usernameField).type(username);
    cy.get(this.passwordField)
    .should('not.be.disabled') 
    .type(password); 
  cy.get(this.loginButton).click();

  }

  getErrorMessage() {
    return cy.get(this.errorMessage);
  }
}

export default new LoginPage();
