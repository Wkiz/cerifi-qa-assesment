const TITLE_SELECTOR = '.title';
const CONTAINER_CHECKOUT_COMPLETE_SELECTOR = '#checkout_complete_container';
const BUTTON_BACK_INVENTORY_PAGE_SELECTOR = '#back-to-products';

class checkoutStepThreePage {

    validateCheckoutCompletePage() {
        cy.get(TITLE_SELECTOR).should('be.visible').contains('Checkout: Complete!');
        cy.get(CONTAINER_CHECKOUT_COMPLETE_SELECTOR).should('be.visible');
    }
    
    clickBackInventoryPage() {
        cy.get(BUTTON_BACK_INVENTORY_PAGE_SELECTOR).scrollIntoView().should('be.visible').click();
    }
}

module.exports = new checkoutStepThreePage();