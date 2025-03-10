import CheckoutPage from "../../support/pageObjects/CheckoutPage";
import InventoryPage from "../../support/pageObjects/InventoryPage";
import LoginPage from "../../support/pageObjects/LoginPage";

describe("Testes de Checkout", () => {
    beforeEach(() => {
        // Acessa a página de login e realiza o login usando variáveis do .env
        LoginPage.visit();
        cy.url().should("include", Cypress.env("baseUrl"));
        LoginPage.login(Cypress.env("username"), Cypress.env("password"));
        
        // Carregar o fixture do carrinho e adicionar os itens ao carrinho
        cy.fixture("checkout").then((data) => {
            // Adicionar todos os itens do fixture ao carrinho
            data.cart.forEach((item: string) => {
                InventoryPage.addToCart(item);
            });
        });

        // Vai para o carrinho e inicia o checkout
        InventoryPage.goToCart();
        CheckoutPage.startCheckout();
    });

    it("Deve finalizar a compra com sucesso", () => {
        cy.fixture("checkout").then((data) => {
            // Preenche os dados do checkout e confirma a compra
            CheckoutPage.fillCheckoutForm(
                data.checkout.firstName, 
                data.checkout.lastName, 
                data.checkout.zipCode
            );
        });
        CheckoutPage.confirmCheckout();
        CheckoutPage.getSuccessMessage().should("contain", "Thank you for your order!");
    });


    it("Deve exibir erro ao tentar continuar sem preencher nenhum campo", () => {
        // Limpa todos os campos e tenta submeter
        CheckoutPage.fillCheckoutForm('', '', '');
        CheckoutPage.getErrorMessage()
            .should("be.visible")
            .and("contain", "Error: First Name is required");
    });

    it("Deve exibir erro ao tentar continuar sem preencher o primeiro nome", () => {
        cy.fixture("checkout").then((data) => {
            // Preenche o checkout sem o primeiro nome
            CheckoutPage.fillCheckoutForm("", data.checkout.lastName, data.checkout.zipCode);
        });
        CheckoutPage.getErrorMessage()
            .should("be.visible")
            .and("contain", "Error: First Name is required");
    });

    it("Deve exibir erro ao tentar continuar sem preencher o ultimo nome", () => {
        cy.fixture("checkout").then((data) => {
            // Limpa o primeiro nome e tenta submeter
            CheckoutPage.fillCheckoutForm(data.checkout.firstName, "", data.checkout.zipCode);
        });
        CheckoutPage.getErrorMessage()
            .should("be.visible")
            .and("contain", "Error: Last Name is required");
    });


    it("Deve exibir erro ao tentar continuar sem preencher o CEP", () => {
        cy.fixture("checkout").then((data) => {
            // Limpa o CEP e tenta submeter
            CheckoutPage.fillCheckoutForm(data.checkout.firstName, data.checkout.lastName, "");
        });
        CheckoutPage.getErrorMessage()
            .should("be.visible")
            .and("contain", "Error: Postal Code is required");
    });

    it("Deve permitir cancelar o checkout e voltar para o carrinho", () => {
        // Clica para cancelar o checkout
        CheckoutPage.cancelCheckout();
        cy.url().should("include", "/cart.html");
    });
});
