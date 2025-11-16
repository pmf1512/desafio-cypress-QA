import { cartElement }  from '../../support/locators/cartElement';
import { loginElement }  from '../../support/locators/loginElement';
import { buySizeOptionButton }  from '../../support/locators/cartElement';
import { buyColorOptionButton }  from '../../support/locators/cartElement';
import { checkoutElement }  from '../../support/locators/checkoutElement';

describe("Testes do Carrinho", () => {
  beforeEach(() => {
    cy.login();
  });

  it("Deve adicionar um item ao carrinho e realizar a compra", () => {
    cy.get(cartElement.buyMenuButton).should("be.visible").click();
    cy.get(cartElement.searchInput).should("be.visible").type("Aero Daily Fitness Tee{enter}");
    cy.get(buySizeOptionButton("L")).should("be.visible").click();
    cy.get(buyColorOptionButton("Black")).should("be.visible").click();
    cy.get(cartElement.buyButton).should("be.visible").click();
    cy.contains("Ver carrinho").should("be.visible").click();
    cy.get(loginElement.topBar).should("contain", "1");
    cy.get(loginElement.topBar).should("contain", "R$24,00");
    cy.contains("Concluir compra").should("be.visible").click();
    cy.get(checkoutElement.firstNameInput).should("be.visible").clear().type("Pamela");
    cy.get(checkoutElement.lastNameInput).should("be.visible").clear().type("Maia");
    cy.get(checkoutElement.countrySelect).should("be.visible").select('BR', { force: true });
    cy.get(checkoutElement.address1Input).should("be.visible").clear().type("Rua mauro filho, 77");
    cy.get(checkoutElement.cityInput).should("be.visible").clear().type("Fortaleza");
    cy.get(checkoutElement.stateSelect).should("be.visible").select('CE', { force: true });
    cy.get(checkoutElement.postcodeInput).should("be.visible").clear().type("60861-777");
    cy.get(checkoutElement.phoneInput).should("be.visible").clear().type("5585996274371");
    cy.get(checkoutElement.emailInput).should("be.visible").clear().type("pamelamaia_freitas@hotmail.com");
    cy.get(checkoutElement.deliveryRadioButton).should("be.visible").check();
    cy.get(checkoutElement.termsConditionsCheckbox).should("be.visible").check();
    cy.get(checkoutElement.finishBuyButton).should("be.visible").click();
    cy.contains("Obrigado. Seu pedido foi recebido.").should("be.visible");
});

  it("Deve adicionar um item ao carrinho e excluir", () => {
    cy.get(cartElement.buyMenuButton).should("be.visible").click();
    cy.get(cartElement.searchInput).should("be.visible").type("Aero Daily Fitness Tee{enter}");
    cy.get(buySizeOptionButton("L")).should("be.visible").click();
    cy.get(buyColorOptionButton("Black")).should("be.visible").click();
    cy.get(cartElement.buyButton).should("be.visible").click();
    cy.contains("Ver carrinho").should("be.visible").click();
    cy.get(loginElement.topBar).should("contain", "1");
    cy.get(loginElement.topBar).should("contain", "R$24,00");
    cy.get(cartElement.removeItemCartButton).should("be.visible").click();
    cy.contains("“Aero Daily Fitness Tee” removido. Desfazer?").should("be.visible");
    cy.contains("Seu carrinho está vazio.").should("be.visible");
});

  it("Deve adicionar um item ao carrinho, excluir e desfazer a exclusão", () => {
    cy.get(cartElement.buyMenuButton).should("be.visible").click();
    cy.get(cartElement.searchInput).should("be.visible").type("Aero Daily Fitness Tee{enter}");
    cy.get(buySizeOptionButton("L")).should("be.visible").click();
    cy.get(buyColorOptionButton("Black")).should("be.visible").click();
    cy.get(cartElement.buyButton).should("be.visible").click();
    cy.contains("Ver carrinho").should("be.visible").click();
    cy.get(loginElement.topBar).should("contain", "1");
    cy.get(loginElement.topBar).should("contain", "R$24,00");
    cy.get(cartElement.removeItemCartButton).should("be.visible").click();
    cy.contains("Seu carrinho está vazio.").should("be.visible");
    cy.contains("Desfazer?").should("be.visible").click();
    cy.contains("Total no carrinho").should("be.visible");
    cy.contains("Concluir compra").should("be.visible");

});

});