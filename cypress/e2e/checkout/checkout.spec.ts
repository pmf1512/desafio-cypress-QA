import CheckoutPage from "../../support/pageObjects/CheckoutPage";
import InventoryPage from "../../support/pageObjects/InventoryPage";
import LoginPage from "../../support/pageObjects/LoginPage";

describe("Testes de Checkout", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.url().should("include", "saucedemo.com");

        LoginPage.login("standard_user", "secret_sauce");
        InventoryPage.addToCart("Sauce Labs Backpack");
        InventoryPage.goToCart();
        CheckoutPage.startCheckout();
    });

    it("Deve finalizar a compra com sucesso", () => {
        CheckoutPage.fillCheckoutForm("Germanna", "Rbs", "12345");
        CheckoutPage.confirmCheckout();
        CheckoutPage.getSuccessMessage().should("contain", "Thank you for your order!");
    });

    it("Deve exibir erro ao tentar continuar sem preencher o primeiro nome", () => {
        CheckoutPage.fillCheckoutForm();
        CheckoutPage.getErrorMessage()
            .should("be.visible")
            .and("contain", "Error: First Name is required");
    });

    it("Deve exibir erro ao tentar continuar sem preencher o último nome", () => {
        CheckoutPage.fillCheckoutForm("Germanna", "", "12345"); 
        CheckoutPage.getErrorMessage()
            .should("be.visible")
            .and("contain", "Error: Last Name is required");
    });

    it("Deve exibir erro ao tentar continuar sem preencher o CEP", () => {
        CheckoutPage.fillCheckoutForm("Germanna", "Rbs", ""); 
        CheckoutPage.getErrorMessage()
            .should("be.visible")
            .and("contain", "Error: Postal Code is required");
    });

    it("Deve permitir cancelar o checkout e voltar para o carrinho", () => {
        CheckoutPage.cancelCheckout();
        cy.url().should("include", "/cart.html");
    });
});
