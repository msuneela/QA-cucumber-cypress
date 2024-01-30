import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import itemsListPage from "../../page-objects/common-helper/items-list-page";


When("I select menus as {string}, {string}, {string}", (menu, submenu1,submenu2) => {
    cy.selectSubMenu(menu,submenu1,submenu2)    
});


Then("I select add to basket and see error for not selcting required fields", () => {
    itemsListPage.productInfo.eq(0).click({ force: true });
    cy.wait(500);
    itemsListPage.addTocartButton.should('be.visible').then(() =>{
    itemsListPage.addTocartButton.trigger('mouseover').contains('Add to Cart').first().click(2,1.5);;
    })
    itemsListPage.errortext.first().should('contain','This is a required field.')
});

Then("I select {string} and {string}, click add to cart and see success message for cart", (size,colour) => {
    itemsListPage.itemSizeColour(colour).trigger('mouseover').click(12,10);
    itemsListPage.itemSizeColour(size).trigger('mouseover').click(12,10);
    itemsListPage.addTocartButton.contains('Add to Cart').first().click(2,1.5);
    cy.wait(2000);
    itemsListPage.succesText.trigger('mouseover').should('contain','You added');
});