import CheckoutPage from "../../support/pageObjects/CheckoutPage";
import InventoryPage from "../../support/pageObjects/InventoryPage";
import LoginPage from "../../support/pageObjects/LoginPage";

describe("Testes de Checkout", () => {
    
    beforeEach(() => {
        cy.visit("/");
        cy.url().should("include", Cypress.env("baseUrl"));

        LoginPage.login(Cypress.env("username"), Cypress.env("password"));
        InventoryPage.addToCart("Sauce Labs Backpack");
        InventoryPage.goToCart();
        CheckoutPage.startCheckout();
    });

    it("Deve finalizar a compra com sucesso", () => {
        CheckoutPage.fillCheckoutForm(Cypress.env("firstName"),  Cypress.env("lastName"),  Cypress.env("zipCode"));
        CheckoutPage.confirmCheckout();
        CheckoutPage.getSuccessMessage().should("contain", "Thank you for your order!");
    });

    it("Deve exibir erro ao tentar continuar sem preencher nenhum campo", () => {
        CheckoutPage.fillCheckoutForm();
        CheckoutPage.getErrorMessage()
            .should("be.visible")
            .and("contain", "Error: First Name is required");
    });

    it("Deve exibir erro ao tentar continuar sem preencher o primeiro nome", () => {
        CheckoutPage.fillCheckoutForm("",  Cypress.env("lastName"),  Cypress.env("zipCode"));
        CheckoutPage.getErrorMessage()
            .should("be.visible")
            .and("contain", "Error: First Name is required");
    });

    it("Deve exibir erro ao tentar continuar sem preencher o último nome", () => {
        CheckoutPage.fillCheckoutForm(Cypress.env("firstName"), "",  Cypress.env("zipCode")); 
        CheckoutPage.getErrorMessage()
            .should("be.visible")
            .and("contain", "Error: Last Name is required");
    });

    it("Deve exibir erro ao tentar continuar sem preencher o CEP", () => {
        CheckoutPage.fillCheckoutForm(Cypress.env("firstName"),  Cypress.env("lastName"), ""); 
        CheckoutPage.getErrorMessage()
            .should("be.visible")
            .and("contain", "Error: Postal Code is required");
    });

    it("Deve permitir cancelar o checkout e voltar para o carrinho", () => {
        CheckoutPage.cancelCheckout();
        cy.url().should("include", "/cart.html");
    });
});
