import { assert } from 'chai';
import { getUserByKeyword } from '../../support/dataManager';
import checkoutStepOnePage from '../pages/checkoutStepOnePage';
import checkoutStepTwoPage from '../pages/checkoutStepTwoPage';
import checkoutStepThreePage from '../pages/checkoutStepThreePage';

And('I must be on checkout page', () => {
    checkoutStepOnePage.validateCheckoutPage();
});

And('I cancel the checkout information page', () => {
    checkoutStepOnePage.clickCancelButton();
});

And('I cancel the checkout overview page', () => {
    checkoutStepTwoPage.clickCancelButton();
});

And('I fill checkout information', () => {
    cy.fixture("data-driven/users").then((data) => {
        let userData = getUserByKeyword(data, "standard");
        checkoutStepOnePage.completeCheckoutInformation(userData.firstname, userData.lastname, userData.zipcode);
    });
});

And('I continue with the checkout', () => {
    checkoutStepOnePage.clickContinueButton();
});

And('I should be on checkout overview page',() => {
    checkoutStepTwoPage.validateCheckoutOverbiewPage();
});

And('I click on finish checkout', () => {
    checkoutStepTwoPage.clickFinishButton();
});

Then('I must be on checkout complete page', () => {
    checkoutStepThreePage.validateCheckoutCompletePage();
});