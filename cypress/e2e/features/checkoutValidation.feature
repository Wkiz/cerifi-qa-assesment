@checkoutValidation
Feature: Checkout validation

@happyPath
Scenario: Complete three steps of the checkout with standard user
    Given I open saucedemo homepage
    When I submit login with a "standard" user
    And I add all products to cart
    And I go to the cart
    And I click on checkout button
    And I fill checkout information
    And I continue with the checkout
    And I should be on checkout overview page
    And I click on finish checkout
    Then I must be on checkout complete page

@happyPath
Scenario: Complete two steps of the checkout with standard user and cancel checkout in overview page
    Given I open saucedemo homepage
    When I submit login with a "standard" user
    And I add all products to cart
    And I go to the cart
    And I click on checkout button
    And I fill checkout information
    And I continue with the checkout
    And I should be on checkout overview page
    And I cancel the checkout overview page
    Then I should see the inventory page

@happyPath
Scenario: Complete first step of the checkout with standard user and cancel checkout in information page
    Given I open saucedemo homepage
    When I submit login with a "standard" user
    And I add all products to cart
    And I go to the cart
    And I click on checkout button
    And I cancel the checkout information page
    Then I should be on cart page

Scenario: Complete three steps of the checkout with performance glicth user
    Given I open saucedemo homepage
    When I submit login with a "performance" user
    And I add all products to cart
    And I go to the cart
    And I click on checkout button
    And I fill checkout information
    And I continue with the checkout
    And I should be on checkout overview page
    And I click on finish checkout
    Then I must be on checkout complete page