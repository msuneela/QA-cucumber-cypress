@MENU @REGRESSION
Feature: Luma menus
verifying menu names and navigate to correct pages by checking breadcrumbs and titles
Scenario Outline: menu items ,breadcrumbs and Title
    Given I am in Luma main page
    When I select menu as "<menu>"
    Then I should able to see breadcrums as "<menu>"
    And Title as "<menu>"
Examples:
    | menu|
    |What's New|
    |Women|
    |Men|
    |Gear|
    |Sale|