const TITLE_SELECTOR = '.title';
const CONTAINER_CARTLIST_SELECTOR = '[data-test="cart-list"]';
const CONTAINER_SUMMARY_INFO_SELECTOR = '[class="summary_info"]';
const BUTTON_FINISH_SELECTOR = '#finish'
const BUTTON_CANCEL_SELECTOR = '#cancel';

class checkoutStepTwoPage {

    validateCheckoutOverbiewPage() {
        cy.get(TITLE_SELECTOR).should('be.visible').contains('Checkout: Overview');
        cy.get(CONTAINER_CARTLIST_SELECTOR).should('be.visible');
        cy.get(CONTAINER_SUMMARY_INFO_SELECTOR).should('be.visible');
    }

    clickFinishButton() {
        cy.get(BUTTON_FINISH_SELECTOR).scrollIntoView().should('be.visible').click();
        cy.get(TITLE_SELECTOR).should('be.visible').contains('Checkout: Complete!');
    }

    clickCancelButton() {
        cy.get(BUTTON_CANCEL_SELECTOR).scrollIntoView().should('be.visible').click();
        cy.get(TITLE_SELECTOR).should('be.visible').contains('Products');
    }

}

module.exports = new checkoutStepTwoPage();