@LOGIN @REGRESSION
Feature: Luma Login
Verifying valid and invalid login scenarios
Scenario: Invalid username and password
   Given I am in Luma main page
    And I Select customer Signin
    When I enter invalid username and password
    Then I should see error message
Scenario: valid username and Password
    Given I am in Luma main page
    And I Select customer Signin
    When I enter valid username and password
    Then I should see mainpage with menus