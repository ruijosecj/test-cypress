/// <reference types="cypress" />

describe('Testes de inclusao, exclusao e alteracao do contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve preencher os inputs e adicionar novo contato', () => {
        cy.get('[type="text"]').type('Rui José')
        cy.get('[type="email"]').type('ruijosecj@gmail.com')
        cy.get('[type="tel"]').type('85999670420')
        cy.get('.adicionar').click()
    })

    it('Deve deletar contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
    })
    
    it('Deve atualizar contato', () => {
        cy.get('.edit').eq(0).click();
        cy.get('[type="text"]').clear().type('Rui')
        cy.get('[type="email"]').clear().type('rui@gmail.com')
        cy.get('[type="tel"]').clear().type('85999670420')
        cy.get('.alterar').click()
    })
    
})