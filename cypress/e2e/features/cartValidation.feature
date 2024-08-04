@cartValidation
Feature: Cart validation

Scenario: Validate the cart page with standard user
    Given I open saucedemo homepage
    When I submit login with a "standard" user
    And I add all products to cart
    And I go to the cart
    And I remove "Sauce Labs Bike Light" product from cart
    And I click on checkout button
    And I click cancel the checkout
    Then I should be on cart page

Scenario: Validate the cart page with performance glicth user
    Given I open saucedemo homepage
    When I submit login with a "performance" user
    And I add all products to cart
    And I go to the cart
    And I remove "Test.allTheThings() T-Shirt (Red)" product from cart
    And I click on checkout button
    And I click cancel the checkout
    Then I should be on cart page

Scenario: Validate the cart page with error user
    Given I open saucedemo homepage
    When I submit login with a "error" user
    And I add product "1" to cart
    And I go to the cart
    And I remove "Sauce Labs Backpack" product from cart
    And I click on checkout button
    And I click cancel the checkout
    Then I should be on cart page

Scenario: Validate the cart page with visual error user
    Given I open saucedemo homepage
    When I submit login with a "visual" user
    And I add product "1" to cart
    And I go to the cart
    Then I should experiment visual errors on cart page