class  termsPage {

    elements = {
        acceptButton: cy.get('[ng-click="accept()"]'),
        cancelButton: cy.get('[ng-click="cancel()"]')
    }

    acceptTerms(){
        this.elements.acceptButton().click();
    }


}

module.exports = new termsPage();