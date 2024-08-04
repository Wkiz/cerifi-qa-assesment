const TITLE_SELECTOR = '.title';
const BUTTON_BURGER_SELECTOR = '#react-burger-menu-btn';
const ITEMS_BURGER_SELECTOR = '.bm-item-list';
const BUTTON_CLOSE_BURGER_SELECTOR = '#react-burger-cross-btn';
const PRODUCT_LIST_SELECTOR = '[data-test="inventory-item"]';
const FILTER_DROPDOWN_SELECTOR = '[data-test="product-sort-container"]';
const FILTER_OPTIONS = ['Name (A to Z)', 'Name (Z to A)', 'Price (low to high)', 'Price (high to low)'];
const LIST_BUTTONS_ADD_PRODUCTS = ['#add-to-cart-sauce-labs-backpack', '#add-to-cart-sauce-labs-bike-light', 
    '#add-to-cart-sauce-labs-bolt-t-shirt', '#add-to-cart-sauce-labs-fleece-jacket', '#add-to-cart-sauce-labs-onesie', 
    '[data-test*="add-to-cart-test"]'];
const LIST_BUTTONS_REMOVE_PRODUCTS = ['#remove-sauce-labs-backpack', '#remove-sauce-labs-bike-light', 
    '#remove-sauce-labs-bolt-t-shirt', '#remove-sauce-labs-fleece-jacket', '#remove-sauce-labs-onesie', 
    '[data-test*="remove-test"]'];
const BUTTON_GO_CART = '[data-test="shopping-cart-link"]';
const BUTTON_CONTINUE_SHOPPING = '#continue-shopping';
const IMAGE_BURGER_SELECTOR_FAILURE = '[class="bm-icon visual_failure"]'

class inventoryPage {

    validateInventoryPage() {
        cy.get(TITLE_SELECTOR).should("be.visible");
    }

    validateProductImages() {
        cy.get(PRODUCT_LIST_SELECTOR).find('img').should('have.attr', 'src').should('include','.jpg');
    }

    validateErrorOnProductImages() {
        cy.get(PRODUCT_LIST_SELECTOR).find('img').should('have.attr', 'src').should('include','sl-404.168b1cce.jpg');
    }

    validateProductFilter() {
        FILTER_OPTIONS.forEach(option => {
            cy.get(FILTER_DROPDOWN_SELECTOR).select(option);
        });
        cy.get(FILTER_DROPDOWN_SELECTOR).select(0);
    }

    validateBurguerButton() {
        cy.get(BUTTON_BURGER_SELECTOR).should("be.visible").click();
        cy.get(ITEMS_BURGER_SELECTOR).within( () => {
            cy.contains('All Items').should("be.visible");
            cy.contains('About').should("be.visible");
            cy.contains('Logout').should("be.visible");
            cy.contains('Reset App State').should("be.visible");
        });
        cy.get(BUTTON_CLOSE_BURGER_SELECTOR).click();
    }

    addAllProductsToCart() {
        LIST_BUTTONS_ADD_PRODUCTS.forEach(selector => {
            cy.get(selector).scrollIntoView().should("be.visible");
            cy.get(selector).click();
        });
    }

    addProductByIndex(index) {
        cy.get(LIST_BUTTONS_ADD_PRODUCTS[index]).scrollIntoView().should("be.visible");
        cy.get(LIST_BUTTONS_ADD_PRODUCTS[index]).click();
    }

    removeAllProductsFromCart() {
        LIST_BUTTONS_REMOVE_PRODUCTS.forEach(selector => {
            cy.get(selector).scrollIntoView().should("be.visible");
            cy.get(selector).click();
        });
    }

    clickCartList() {
        cy.get(BUTTON_GO_CART).click();
        cy.get(TITLE_SELECTOR).should("be.visible").contains('Your Cart');
        cy.get(BUTTON_CONTINUE_SHOPPING).click();
        cy.get(TITLE_SELECTOR).should("be.visible").contains('Products');
    }

    validateInventoryPerformance() {
        cy.get(TITLE_SELECTOR, { timeout: 0 }).should("be.visible").contains('Products');
        return cy.get(TITLE_SELECTOR, { timeout: 0 }).should('be.visible').then($title => {
            return !($title.is(':visible'));
        });
    }

    validateExceptionAddingProduct(index) {
        this.addProductByIndex(index);
        return new Cypress.Promise((resolve, reject) => {
            cy.on('uncaught:exception', (err, runnable) => {
                if (err.message.includes('uncaught')) {
                    resolve(true);
                    return false;
                }
                resolve(false);
                return false;
            });
            cy.wait(1000).then(() => resolve(false));
        });
    }

    validateVisualFailure() {
        return cy.get(IMAGE_BURGER_SELECTOR_FAILURE).should('be.visible').then($title => {
            return $title.is(':visible');
        });
    }
}

module.exports = new inventoryPage();