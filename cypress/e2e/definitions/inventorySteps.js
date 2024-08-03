import inventoryPage from '../pages/inventoryPage';

Then('I should see the inventory page', () => {
    inventoryPage.validateInventoryPage();
    inventoryPage.validateProductImages();
});

Then ('I should see errors on product images', () => {
    inventoryPage.validateErrorOnProductImages();
});