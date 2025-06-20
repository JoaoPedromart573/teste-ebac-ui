///<reference types="cypress"/>
const perfil = require ('../../fixtures/perfil.json')

describe( 'Funcionalidade: Login', () => {

    beforeEach(() => {
         cy.visit ('minha-conta')
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

it('Deve fazer login com sucesso - Usando massa de dados ', () => {
    cy.get('#username').type(perfil.usuario)
       cy.get('#password').type(perfil.senha)
       cy.get('.woocommerce-form > .button').click()
cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, jpteste (não é jpteste? Sair)')
});

it('Deve fazer login com sucesso - Usando Fixture', () => {
    cy.fixture('perfil').then( dados => { 
         cy.get('#username').type(dados.usuario , {log: false})
       cy.get('#password').type(dados.senha , { log: false });
       })
       cy.get('.woocommerce-form > .button').click()
cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, jpteste (não é jpteste? Sair)')
    })
it.only('Deve fazer login com sucesso-Usando login costomizado', () => {
  cy.login('jpteste@ebac.com.br', 'jpm123.')  
  cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, jpteste (não é jpteste? Sair)')
});

})

