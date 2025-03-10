class CheckoutPage {
    // Inicia o processo de checkout
    static startCheckout() {
        cy.get("[data-test='checkout']").click();
    }

    //Preenche o formulário de checkout com valores fornecidos ou limpa os campos caso não sejam passados.

    static fillCheckoutForm(firstName = '', lastName = '', postalCode = '') {
        if (firstName) {
            cy.get('#first-name').type(firstName);
        } else {
            cy.get('#first-name').clear();
        }

        if (lastName) {
            cy.get('#last-name').type(lastName);
        } else {
            cy.get('#last-name').clear();
        }

        if (postalCode) {
            cy.get('#postal-code').type(postalCode);
        } else {
            cy.get('#postal-code').clear();
        }
        // Confirma a submissão do formulário de checkout
        cy.get("[data-test='continue']").click();
    }

    // Confirma o checkout e verifica se a URL é a esperada
    static confirmCheckout() {
        cy.get('.btn_action', { timeout: 10000 })
            .should('be.visible')
            .click();

        cy.url().should("include", "/checkout-complete.html");
    }

    // Recupera a mensagem de sucesso após o checkout
    static getSuccessMessage() {
        return cy.get('.complete-header');
    }

    // Recupera a mensagem de erro quando um campo obrigatório não é preenchido
    static getErrorMessage() {
        return cy.get("h3[data-test='error']");
    }

    // Cancela o checkout e volta para a página do carrinho
    static cancelCheckout() {
        cy.get('.cart_cancel_link', { timeout: 10000 })
            .should('be.visible')
            .click();
    }
}

export default CheckoutPage;
