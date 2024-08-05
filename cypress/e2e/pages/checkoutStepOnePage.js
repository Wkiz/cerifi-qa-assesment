const TITLE_SELECTOR = '.title';
const INPUT_FIRSTNAME_SELECTOR = '#first-name';
const INPUT_LASTNAME_SELECTOR = '#last-name';
const INPUT_POSTALCODE_SELECTOR = '#postal-code';
const BUTTON_CONTINUE_SELECTOR = '#continue'
const BUTTON_CANCEL_SELECTOR = '#cancel';

class checkoutStepOnePage {

    validateCheckoutPage() {    
        cy.get(TITLE_SELECTOR).should('be.visible').contains('Checkout: Your Information');
    }

    enterFirtsName(firstName) {
        cy.get(INPUT_FIRSTNAME_SELECTOR).type(firstName);
    }

    enterLastName(lastName) {
        cy.get(INPUT_LASTNAME_SELECTOR).type(lastName);
    }

    enterZipCode(zipCode) {
        cy.get(INPUT_POSTALCODE_SELECTOR).type(zipCode);
    }

    clickContinueButton() {
        cy.get(BUTTON_CONTINUE_SELECTOR).scrollIntoView().should('be.visible').click();
        cy.get(TITLE_SELECTOR).should('be.visible').contains('Checkout: Overview');
    }

    clickCancelButton() {
        cy.get(BUTTON_CANCEL_SELECTOR).scrollIntoView().should('be.visible').click();
        cy.get(TITLE_SELECTOR).should('be.visible').contains('Your Cart');
    }

    completeCheckoutInformation(firstName, lastName, zipCode) {
        this.enterFirtsName(firstName);
        this.enterLastName(lastName);
        this.enterZipCode(zipCode);
    }
}

module.exports = new checkoutStepOnePage();