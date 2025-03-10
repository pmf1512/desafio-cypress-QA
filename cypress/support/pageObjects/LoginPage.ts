class LoginPage {
  /**
   * Seletores para os campos de entrada e botões na página de login.
   */
  private usernameField = "#user-name";
  private passwordField = "#password";
  private loginButton = "#login-button";
  private errorMessage = "[data-test='error']";

  visit() {
    /**
  * Visita a página inicial da aplicação.
  */
    cy.visit("/");
  }
  //Realiza o login com um determinado usuário e senha.

  login(username: string, password: string) {
    this.visit();

    // Intercepta a requisição de login para monitoramento
    cy.intercept("POST", "**/login").as("loginRequest");

    // Preenche o campo de nome de usuário, limpando antes se necessário
    if (username) {
      cy.get(this.usernameField).clear().type(username);
    } else {
      cy.get(this.usernameField).clear();
    }

    // Preenche o campo de senha, garantindo que não esteja desabilitado
    if (password) {
      cy.get(this.passwordField)
        .should('not.be.disabled')
        .clear()
        .type(password);
    } else {
      cy.get(this.passwordField).clear();
    }

    // Clica no botão de login
    cy.get(this.loginButton).click();
  }

  /**
 * Obtém a mensagem de erro exibida quando há falha no login.
   */
  getErrorMessage() {
    return cy.get(this.errorMessage);
  }
}

export default new LoginPage();
