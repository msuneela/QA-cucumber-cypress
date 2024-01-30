@ADDTOCART @REGRESSION
Feature: Luma Cart
Tests to selct product and validate add to cart 

    Scenario Outline: add item to cart
    Given I am in Luma main page
    When I Select customer Signin
    And I enter valid username and password
    And I select menus as "<menu>", "<submenu1>", "<submenu2>"
    Then I select add to basket and see error for not selcting required fields
    And I select "<size>" and "<colour>", click add to cart and see success message for cart
Examples:
    |menu |submenu1|submenu2|size|colour|
    |Women|Tops|Jackets|XS|Black|


