import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { base_url } from '../../support/page';
import itemsListPage from "../../page-objects/common-helper/items-list-page";
import menuPage from "../../page-objects/common-helper/menu-page";


Given("I am in Luma main page", () => {
    cy.visit(base_url);
});

When("I select menu as {string}", (menu) => {
    cy.selectMenu(menu)
});

Then("I should able to see breadcrums as {string}", (menu) => {
    menuPage.breadcrumbs.should('contain',menu);
});

Then("Title as {string}", (menu) => {
    menuPage.pageTitle.should('contain',menu);
});

