import LoginPage from "../../support/pageObjects/LoginPage";

describe("Testes de Login", () => {

  beforeEach(() => {
    cy.visit("/");
  });

  it("Deve fazer login com sucesso", () => {
    LoginPage.login("standard_user", "secret_sauce");
  });
  
it("Deve exibir erro para credenciais inválidas", () => {
    cy.login("wrong_user", "wrong_password");

    LoginPage.getErrorMessage()
      .should("be.visible")
      .and("contain", "Epic sadface: Username and password do not match any user in this service");
  });


  it("Deve exibir erro para usuário bloqueado", () => {
    cy.login("locked_out_user", "secret_sauce");

    LoginPage.getErrorMessage()
      .should("be.visible")
      .and("contain", "Epic sadface: Sorry, this user has been locked out.");
  });

  it("Deve fazer login com um usuário problemático", () => {
    LoginPage.login("problem_user", "secret_sauce");
  
    // Exemplo: Verifica se imagens dos produtos carregam corretamente
    cy.get(".inventory_item_img").each(($img) => {
      cy.wrap($img).should("be.visible");
    });
  });

  it("Deve testar login com usuário de performance lenta", () => {
    cy.intercept("POST", "**/login").as("loginRequest");
    LoginPage.login("performance_glitch_user", "secret_sauce");
  

  });
  
  
  
});
