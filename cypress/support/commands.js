import itemsListPage from "../page-objects/common-helper/items-list-page";
import mainPage from "../page-objects/main-page"

Cypress.Commands.add("selectMenu",(menu)=> {
    mainPage.menu.contains(menu).click();
})
Cypress.Commands.add("selectSubMenu",(menu,submenu1,submenu2)=>{
    mainPage.menu.contains(menu).trigger('mouseover');
    cy.wait(1000);
    mainPage.submenuA.contains(submenu1).trigger('mouseover');
    cy.wait(1000);
    mainPage.submenuB.contains(submenu2).click();
});

Cypress.Commands.add("selectCategory",(categoryItem)=> {
    itemsListPage.selectCategory.contains(categoryItem).click();
})

Cypress.Commands.add("selectOption",(shopOption)=> {
    itemsListPage.shopOption.contains(shopOption).click({force:true});
})