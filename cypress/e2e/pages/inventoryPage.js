const TITLE_SELECTOR = '.title';
const BURGUER_BUTTON_SELECTOR = '#react-burger-menu-btn';
const BURGUER_ITEMS_SELECTOR = '#inventory_sidebar_link';
const PRODUCT_LIST_SELECTOR = '[data-test="inventory-item"]';
const FILTER_DROPDOWN_SELECTOR = '[data-test="product-sort-container"]';
const CART_LIST_BUTTON = '[data-test="shopping-cart-link"]';

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
}

module.exports = new inventoryPage();