const TITLE_SELECTOR = '.title';
let BUTTON_REMOVE_PRODUCT_SELECTOR = '[data-test^="remove-REPLACE"]';
const BUTTON_CHECKOUT = '#checkout';
const BUTTON_CANCEL_CHECKOUT = '#cancel';

class cartPage {

    validateCartPage() {    
        cy.get(TITLE_SELECTOR).should('be.visible').contains('Your Cart');
    }

    removeProductFromCart(productName) {
        BUTTON_REMOVE_PRODUCT_SELECTOR = BUTTON_REMOVE_PRODUCT_SELECTOR.replace('REPLACE', productName);
        cy.get(BUTTON_REMOVE_PRODUCT_SELECTOR).scrollIntoView().should('be.visible').click();
    }
    
    clickCheckout() {
        cy.get(BUTTON_CHECKOUT).scrollIntoView().should("be.visible").click();
        cy.get(TITLE_SELECTOR).should('be.visible').contains('Checkout: Your Information');
    }

    clickCancelCheckout() {
        cy.get(BUTTON_CANCEL_CHECKOUT).scrollIntoView().should("be.visible").click();
        cy.get(TITLE_SELECTOR).should('be.visible').contains('Your Cart');
    }

}

module.exports = new cartPage();