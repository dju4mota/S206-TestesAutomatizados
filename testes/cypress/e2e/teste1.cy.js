/// <reference types="cypress"/>

describe('Criando cenário de testes para o site globalsqa',()=> {

  it('Caso de teste: Resgitrando um usuário no site com sucesso', ()=> {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click ()
    cy.get('#firstName').type("Inatel")
    cy.get('#Text1').type("Inatel")
    cy.get('#username').type("Inatel")
    cy.get('#password').type("Inatel")
    cy.get('.btn-primary').click()

    cy.get('.ng-binding').should('contain.text', 'Registration successful')
  })


  it('Caso de teste: Resgitrando um usuário no site com falha (faltando senha)', ()=> {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register')
    cy.get('#firstName').type("Inatel")
    cy.get('#Text1').type("Inatel")
    cy.get('#username').type("Inatel")
    cy.get('#password').type("Inatel")
    cy.get('#password').clear()
    cy.get('.has-error > .help-block').should('have.text', 'Password is required')  
    cy.get('.btn-primary').should('be.disabled')    
  })

  

  it('Caso de teste: Realizando login com sucesso', ()=> {
   
    let info = criarUsuario()
    cy.get('#username').type(info[0])
    cy.get('#password').type(info[1])
    cy.get('.btn-primary').click()

    cy.get('h1.ng-binding').should('contain.text',info[0])
    cy.get('div.ng-scope > :nth-child(2)').should('contain.text',"You're logged in!!")
  })

  it('Caso de teste: Realizando login com falha', ()=> {
   
    let info = criarUsuario()
    cy.get('#username').type(info[0])
    cy.get('#password').type(info[1])
    cy.get('#password').clear()
    
    cy.get('.has-error > .help-block').should('have.text', 'Password is required')  
    cy.get('.btn-primary').should('be.disabled')   
  })


})


function criarUsuario(){ 

  let horas = new Date().getHours().toString()
  let minutes = new Date().getMinutes().toString()
  let segundos = new Date().getSeconds().toString()

  let  usuario = horas + minutes + segundos + 'Id'
  let senha = horas + minutes + segundos + 'Senha'
  let info = [usuario, senha]

  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('.btn-link').click ()
  cy.get('#firstName').type(usuario)
  cy.get('#Text1').type(usuario)
  cy.get('#username').type(usuario)
  cy.get('#password').type(senha)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should('contain.text', 'Registration successful')

  return info
}