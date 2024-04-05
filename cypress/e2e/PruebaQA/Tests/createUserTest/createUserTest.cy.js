import newUserPage from '../../Pages/flypassPage'

describe('Crear Usuario', ()=> {

    it('registrar usuario', ()=>{
        cy.visit('https://cert-clientes.flypass.com.co/#!/register/person')
        newUserPage.createUser();
        newUserPage.elements.userOk().should('have.text','¡Te enviamos un correo!');
    })
})