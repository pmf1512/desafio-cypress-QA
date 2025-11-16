import { cartElement }  from '../../support/locators/cartElement';
import { loginElement }  from '../../support/locators/loginElement';
import { buySizeOptionButton }  from '../../support/locators/cartElement';
import { buyColorOptionButton }  from '../../support/locators/cartElement';
import { checkoutElement }  from '../../support/locators/checkoutElement';

describe("Testes do Checkout", () => {
  beforeEach(() => {
    cy.login();
  });

  it("Deve validar campos obrigatórios do checkout", () => {
    cy.get(cartElement.buyMenuButton).should("be.visible").click();
    cy.get(cartElement.searchInput).should("be.visible").type("Aero Daily Fitness Tee{enter}");
    cy.get(buySizeOptionButton("L")).should("be.visible").click();
    cy.get(buyColorOptionButton("Black")).should("be.visible").click();
    cy.get(cartElement.buyButton).should("be.visible").click();
    cy.contains("Ver carrinho").should("be.visible").click();
    cy.get(loginElement.topBar).should("contain", "1");
    cy.get(loginElement.topBar).should("contain", "R$24,00");
    cy.contains("Concluir compra").should("be.visible").click();
    cy.get(checkoutElement.firstNameInput).should("be.visible").clear();
    cy.get(checkoutElement.lastNameInput).should("be.visible").clear();
    cy.get(checkoutElement.address1Input).should("be.visible").clear();
    cy.get(checkoutElement.cityInput).should("be.visible").clear();
    cy.get(checkoutElement.postcodeInput).should("be.visible").clear();
    cy.get(checkoutElement.phoneInput).should("be.visible").clear();
    cy.get(checkoutElement.emailInput).should("be.visible").clear();
    cy.get(checkoutElement.finishBuyButton).should("be.visible").click();
    cy.contains('O campo "Nome" do endereço de faturamento é um campo obrigatório.').should("be.visible");
    cy.contains('O campo "Sobrenome" do endereço de faturamento é um campo obrigatório.').should("be.visible");
    cy.contains('O campo "Endereço" do endereço de faturamento é um campo obrigatório.').should("be.visible");
    cy.contains('O campo "Cidade" do endereço de faturamento é um campo obrigatório.').should("be.visible");
    cy.contains('O campo "CEP" do endereço de faturamento não é um CEP válido.').should("be.visible");
    cy.contains('O campo "Telefone" do endereço de faturamento é um campo obrigatório.').should("be.visible");
    cy.contains('O campo "Endereço de e-mail" do endereço de faturamento é um campo obrigatório.').should("be.visible");
    cy.contains('Leia e aceite os termos e condições para prosseguir com o seu pedido.').should("be.visible");
});

  it("Deve adicionar um cupom válido", () => {
    cy.get(cartElement.buyMenuButton).should("be.visible").click();
    cy.get(cartElement.searchInput).should("be.visible").type("Aero Daily Fitness Tee{enter}");
    cy.get(buySizeOptionButton("L")).should("be.visible").click();
    cy.get(buyColorOptionButton("Black")).should("be.visible").click();
    cy.get(cartElement.buyButton).should("be.visible").click();
    cy.contains("Ver carrinho").should("be.visible").click();
    cy.get(loginElement.topBar).should("contain", "1");
    cy.get(loginElement.topBar).should("contain", "R$24,00");
    cy.contains("Concluir compra").should("be.visible").click();
    cy.get(checkoutElement.insertCouponLink).should("be.visible").contains("Clique aqui e informe o código do seu cupom de desconto").click();
    cy.contains("Se você tiver um código de cupom, utilize-o abaixo.").should("be.visible");
    cy.get(checkoutElement.couponCodeInput).should("be.visible").type("teste");
    cy.get(checkoutElement.applyCouponButton).should("be.visible").click();
    cy.contains("Código de cupom aplicado com sucesso.").should("be.visible");
});

  it("Deve tentar adicionar um cupom inválido", () => {
    cy.get(cartElement.buyMenuButton).should("be.visible").click();
    cy.get(cartElement.searchInput).should("be.visible").type("Aero Daily Fitness Tee{enter}");
    cy.get(buySizeOptionButton("L")).should("be.visible").click();
    cy.get(buyColorOptionButton("Black")).should("be.visible").click();
    cy.get(cartElement.buyButton).should("be.visible").click();
    cy.contains("Ver carrinho").should("be.visible").click();
    cy.get(loginElement.topBar).should("contain", "1");
    cy.get(loginElement.topBar).should("contain", "R$24,00");
    cy.contains("Concluir compra").should("be.visible").click();
    cy.get(checkoutElement.insertCouponLink).should("be.visible").contains("Clique aqui e informe o código do seu cupom de desconto").click();
    cy.contains("Se você tiver um código de cupom, utilize-o abaixo.").should("be.visible");
    cy.get(checkoutElement.couponCodeInput).should("be.visible").type("inválido_cupom");
    cy.get(checkoutElement.applyCouponButton).should("be.visible").click();
    cy.contains('O cupom "inválido_cupom" não existe!').should("be.visible");

});

  it.only("Deve checar mensagens dos formatos de pagamentos", () => {
    cy.get(cartElement.buyMenuButton).should("be.visible").click();
    cy.get(cartElement.searchInput).should("be.visible").type("Aero Daily Fitness Tee{enter}");
    cy.get(buySizeOptionButton("L")).should("be.visible").click();
    cy.get(buyColorOptionButton("Black")).should("be.visible").click();
    cy.get(cartElement.buyButton).should("be.visible").click();
    cy.contains("Ver carrinho").should("be.visible").click();
    cy.get(loginElement.topBar).should("contain", "1");
    cy.get(loginElement.topBar).should("contain", "R$24,00");
    cy.contains("Concluir compra").should("be.visible").click();
    cy.get(checkoutElement.transferRadioButton).should("be.visible").check();
    cy.contains("Faça seu pagamento diretamente em nossa conta bancária. Se possível informe o ID do seu pedido como identificação do seu depósito ou transferência. Para pagamentos via DOC, seu pedido não será enviado enquanto o pagamento não for compensado.").should("be.visible");
    cy.get(checkoutElement.checkRadioButton).should("be.visible").check();
    cy.contains("Envie seu cheque para Nome da loja, Rua da loja, Cidade da loja, Estado/País da loja, CEP da loja.").should("be.visible");    
    cy.get(checkoutElement.deliveryRadioButton).should("be.visible").check();
    cy.contains("Pagar em dinheiro na entrega.").should("be.visible");

});

});




