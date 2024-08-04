@inventoryValidation
Feature: Inventory validation

Scenario: Validate the inventory page with standard user
    Given I open saucedemo homepage
    When I submit login with a "standard" user
    Then I validate the inventory page

Scenario: Validate the inventory page with problem user
    Given I open saucedemo homepage
    When I submit login with a "problem" user
    Then I should see errors on product images

Scenario: Validate the inventory page with performance glitch user
    Given I open saucedemo homepage
    When I submit login with a "performance" user
    Then I should experiment delay showing inventory page

Scenario: Validate the inventory page with error user
    Given I open saucedemo homepage
    When I submit login with a "error" user
    Then I should experiment errors adding products to cart

Scenario: Validate the inventory page with visual error user
    Given I open saucedemo homepage
    When I submit login with a "visual" user
    Then I should experiment visual errors on inventory page