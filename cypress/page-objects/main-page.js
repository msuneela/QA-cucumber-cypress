class MainPage{
get menu(){
    return cy.get('.level-top.ui-corner-all', {timeout:2000});
}
get submenuA(){
    return cy.get('.ui-corner-all> span:nth-child(2)');
}
get submenuB(){
    return cy.get('.ui-corner-all> span');
}
get signIn() {
    return cy.get('.panel > .header > .authorization-link > a');
}
}export default new MainPage;

