import {  When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../page-objects/login-page";
import mainPage from "../../page-objects/main-page";
import { error_text } from '../../support/page';


When("I Select customer Signin", () => {
mainPage.signIn.click();
});

When("I enter invalid username and password", () => {
    loginPage.login('invalidUser@domain.com', 'password');
});

Then("I should see error message", () => {
    loginPage.errorText.should('contain',error_text)

});

When("I enter valid username and password", () => {
    loginPage.login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'));
});

Then("I should see mainpage with menus", () => {
    mainPage.menu.contains('Women').should('be.visible');
});