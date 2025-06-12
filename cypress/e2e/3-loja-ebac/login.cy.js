///<reference types="cypress"/>

describe( 'Funcionalidade: Login', () => {

    beforeEach(() => {
         cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

afterEach(() => {
    cy.screenshot()
});

    it ('Deve fazer login com sucesso', () => { 
       cy.get('#username').type('jpteste@ebac.com.br')
       cy.get('#password').type('jpm123.')
       cy.get('.woocommerce-form > .button').click()
cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, jpteste (não é jpteste? Sair)')
    })
it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
       cy.get('#username').type('jpteste34@ebac.com.br')
       cy.get('#password').type('jpm123.')
       cy.get('.woocommerce-form > .button').click()
       cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido.')
});

it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
       cy.get('#username').type('jpteste@ebac.com.br')
       cy.get('#password').type('jpm1.')
       cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail jpteste@ebac.com.br está incorreta. Perdeu a senha?')
      cy.get('.woocommerce-error').should('exist')
});

})