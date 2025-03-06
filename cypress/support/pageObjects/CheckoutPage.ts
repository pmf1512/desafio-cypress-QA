class CheckoutPage {
    static startCheckout() {
        cy.get("[data-test='checkout']").click();
    }

    static fillCheckoutForm(firstName: string = '', lastName: string = '', postalCode: string = '') {
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

        cy.get("[data-test='continue']").click();
    }


    static confirmCheckout() {
        // Se os campos estiverem preenchidos, o checkout pode continuar
        cy.get('.btn_action', { timeout: 10000 }).should('be.visible').click();
        cy.url().should("include", "/checkout-complete.html")
    }

    static getSuccessMessage() {
        return cy.get('.complete-header');
    }

    static getErrorMessage() {
        return cy.get("h3[data-test='error']");
    }

    static cancelCheckout() {
        cy.get('.cart_cancel_link', { timeout: 10000 }).should('be.visible').click();
    }

}

export default CheckoutPage;
