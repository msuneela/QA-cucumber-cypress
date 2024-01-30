class Menu{
    get breadcrumbs(){
        return cy.get('.items');
    }
    get pageTitle(){
        return cy.get('[data-ui-id="page-title-wrapper"]')
    }
    }export  default new Menu;