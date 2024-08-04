import { assert } from 'chai';
import inventoryPage from '../pages/inventoryPage';

Then('I should see the inventory page', () => {
    inventoryPage.validateInventoryPage();
    inventoryPage.validateProductImages();
});

Then('I should see errors on product images', () => {
    inventoryPage.validateErrorOnProductImages();
});

Then('I validate the inventory page', () => {
    inventoryPage.validateProductImages();
    inventoryPage.validateBurguerButton();
    inventoryPage.validateProductFilter();
    inventoryPage.addAllProductsToCart();
    inventoryPage.removeAllProductsFromCart();
    inventoryPage.clickCartList();
});

Then('I should experiment delay showing inventory page', () => {
    inventoryPage.validateInventoryPerformance().then(isVisible => {
        assert.isFalse(isVisible, 'The inventory page was displayed early.');
    });
});

Then('I should experiment errors adding products to cart', () => {
    inventoryPage.validateExceptionAddingProduct(3).then(hasExceptionOcurred => {
        assert.isTrue(hasExceptionOcurred, 'The exception does not occurred.');
    });
});

Then('I should experiment visual errors on inventory page', () => {
    inventoryPage.validateVisualFailure().then(isRotated => {
        assert.isTrue(isRotated, 'The burger menu is rotated 3deg.');
    });
});