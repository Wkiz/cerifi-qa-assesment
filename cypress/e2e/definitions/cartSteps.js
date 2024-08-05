import { assert } from 'chai';
import inventoryPage from '../pages/inventoryPage';
import cartPage from '../pages/cartPage';

And('I add all products to cart', () => {
    inventoryPage.addAllProductsToCart();
});

And('I go to the cart', () => {
    inventoryPage.clickCartList();
    cartPage.validateCartPage();
});

And('I remove {string} product from cart', (productName) => {

    const productMap = {
        "Sauce Labs Bike Light": 'sauce-labs-bike-light',
        "Sauce Labs Bolt T-Shirt": 'sauce-labs-bolt-t-shirt',
        "Sauce Labs Fleece Jacket": 'sauce-labs-fleece-jacket',
        "Sauce Labs Onesie": 'sauce-labs-onesie',
        "Test.allTheThings() T-Shirt (Red)": 'test',
        "Sauce Labs Backpack": 'sauce-labs-backpack'
    };
    
    function getProductSelector(productName) {
        return productMap[productName] || null;
    }
    
    const productSelector = getProductSelector(productName);
    if (productSelector) {
        cartPage.removeProductFromCart(productSelector);
    } else {
        console.warn(`Product name '${productName}' does not match any selector.`);
    }
});

And('I click on checkout button', () => {
    cartPage.clickCheckout();
});

And('I click cancel the checkout', () => {
    cartPage.clickCancelCheckout();
});

Then('I should be on cart page', () => {
    cartPage.validateCartPage();
});

And('I add product {string} to cart', (productIndex) => {
    inventoryPage.addProductByIndex(productIndex);
});

Then('I should experiment visual errors on cart page', () => {
    inventoryPage.validateVisualFailure().then(isRotated => {
        assert.isTrue(isRotated, 'The burger menu is rotated 3deg.');
    });
});