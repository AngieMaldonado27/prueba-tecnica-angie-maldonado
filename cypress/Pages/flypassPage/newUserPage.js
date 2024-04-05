import termsPage from "./termsPage";

class  newUserPage {
    
    elements = {
        nameInput: ()=> cy.get('#input_16'),
        lastNameInput: ()=> cy.get('#input_17'),
        documentTypeSelect: ()=> cy.get('#select_6'),
        documentNumberInput: ()=> cy.get('#input_8'),
        phoneInput: ()=> cy.get('#input_9'),
        departmentSelect: ()=> cy.get('#select_10'),
        municipalitySelect: ()=> cy.get('#select_12'),
        addressInput: ()=> cy.get('#input_14'),
        emailInput: ()=> cy.get('#input_15'),
        passwordInput: ()=> cy.get('#password'),
        termsCheckbox: ()=> cy.get('md-checkbox[name="terms"]'),
        saveUserButton: ()=> cy.get('#saveUserRegister'),
        userOk:()=> cy.get('h3[class="ng-binding"]')

    }

    createUser(){
        this.elements.nameInput().type('Angie');
        this.elements.lastNameInput().type('Maldonado');
        this.elements.documentTypeSelect().type('CC');
        this.elements.documentNumberInput().type('1111111111');
        this.elements.phoneInput().type('3009889898');
        this.departmentSelect().type('ANTIOQUIA');
        this.elements.municipalitySelect().type('AMAGA');
        this.elements.addressInput().type('pruebas 111');
        this.elements.emailInput().type('pruebas@test.com');
        this.elements.passwordInput().type('1111117');
        this.elements.termsCheckbox().click();
        termsPage.acceptTerms();
        this.elements.saveUserButton().click()
    }


}

module.exports = new newUserPage();