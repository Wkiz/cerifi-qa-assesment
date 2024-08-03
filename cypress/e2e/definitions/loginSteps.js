import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import homePage from '../pages/homePage'
import { getUserByKeyword } from '../../support/dataManager';


Given('I open saucedemo homepage', () => {
    homePage.visitLoginPage();
    homePage.validateLoginPage();
});

When('I submit login with a {string} user', (user) => {
    cy.fixture("data-driven/users").then((data) => {
        let userData = getUserByKeyword(data, user)
        if (!user.includes("non")) {
            homePage.completeLogin(userData.username, userData.password);
        } else {
           if (user.includes("non pass")) {
                userData = getUserByKeyword(data, "non_pass")
                homePage.enterUsername(userData.username);
           } else {
                userData = getUserByKeyword(data, "")
                homePage.enterPassword(userData.password);
           }
           homePage.clickLogin();
        }
    });
});

Then('I should see the error message {string}', (message) => {
    homePage.validateErrorMessage(message);
});

