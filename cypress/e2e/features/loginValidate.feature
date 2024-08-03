@loginValidate
Feature: Login validation

Scenario: Login test validation with standard user
    Given I open saucedemo homepage
    When I submit login with a "standard" user
    Then I should see the inventory page

Scenario: Login test validation with locked out user
    Given I open saucedemo homepage
    When I submit login with a "locked" user
    Then I should see the error message "this user has been locked out"

Scenario: Login test validation with non pass user
    Given I open saucedemo homepage
    When I submit login with a "non pass" user
    Then I should see the error message "Password is required"

Scenario: Login test validation with non username user
    Given I open saucedemo homepage
    When I submit login with a "non username" user
    Then I should see the error message "Username is required"