# S206-TestesAutomatizados

## Aula 2 
* npm install cypress
* ./node_modules/.bin/cypress open (com o git bash como adm)

## Aula 3 
* describe ->  cenário de testes
* it -> casos de testes
### Comandos 
* visit
* get 
* click
* type
* should 
    * contain -> não exclusivo
    * have -> exclusivamente esse texto 
* clear

## Aula 4
* criando comando próprio 
    * Cypress.Commands.add() no arquivo support/commands.js
* rodar pelo terminal 
    ./node_modules/.bin/cypress run --spec 'cypress/e2e/**/' (com o git bash como adm)
* Gerar relatórios 
    precisa configurar o pcatoe mochawesome 