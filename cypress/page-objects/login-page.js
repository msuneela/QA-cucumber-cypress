class LoginPage{
get userName(){
    return cy.get('#email');
}
get password(){
    return cy.get('#pass')
}
get submit(){
    return cy.get('#send2')
}
get errorText(){
    return cy.get('[data-ui-id="message-error"]');
}
login(username, password){
    this.userName.type(username);
    this.password.type(password);
    this.submit.click();
}
}export default new LoginPage;