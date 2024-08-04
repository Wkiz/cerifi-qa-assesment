const BASE_URL = 'https://www.saucedemo.com';
const TITLE_SELECTOR = '.login_logo';
const USERNAME_INPUT_SELECTOR = '#user-name';
const PASSWORD_INPUT_SELECTOR = '#password';
const LOGIN_BUTTON_SELECTOR = '#login-button';
const ERROR_MESSAGE_SELECTOR = 'h3[data-test="error"]';

class homePage{

    visitLoginPage() {
        cy.visit(BASE_URL);
    }

    validateLoginPage() {
        cy.get(TITLE_SELECTOR).should("be.visible");
    }

    enterUsername(username) {
        cy.get(USERNAME_INPUT_SELECTOR).type(username);
    }

    enterPassword(password) {
        cy.get(PASSWORD_INPUT_SELECTOR).type(password);
    }

    clickLogin() {
        cy.get(LOGIN_BUTTON_SELECTOR).click();
    }

    validateErrorMessage(message) {
        cy.get(ERROR_MESSAGE_SELECTOR).should("be.visible").contains(message);
    }

    completeLogin(username, password) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLogin();
    }

}

module.exports = new homePage();