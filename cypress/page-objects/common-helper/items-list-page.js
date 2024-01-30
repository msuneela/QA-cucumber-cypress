class ItemList{
    get selectCategory() {
        return cy.get('.item');
    }
    get shopOption() {
        return cy.get('[data-role="title"]', {timeout:2000});
    }

    get productInfo() {
        return cy.get('.product-image-photo');
    }
    get addTocartButton(){
        return cy.get('#product-addtocart-button',{timeout:10000})
    }
     itemSizeColour(colour){
        return cy.get(`[option-label="${colour}"]`)
    }
    get errortext(){
        return cy.get('div.mage-error',{timeout:1000});
    }
    get succesText(){
        return cy.get('.message-success',{timeout:2000});
    }
    }export  default new ItemList;