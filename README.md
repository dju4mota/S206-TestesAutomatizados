# S206-TestesAutomatizados

## Cypress
Testes em sites
### Aula 2 
* npm install cypress
* ./node_modules/.bin/cypress open (com o git bash como adm)
### Aula 3 
* describe ->  cenário de testes
* it -> casos de testes
#### Comandos 
* visit
* get 
* click
* type
* should 
    * contain -> não exclusivo
    * have -> exclusivamente esse texto 
* clear
### Aula 4
* criando comando próprio 
    * Cypress.Commands.add() no arquivo support/commands.js
* rodar pelo terminal 
    * ./node_modules/.bin/cypress run --spec 'cypress/e2e/**/' (com o git bash como adm)
* Gerar relatórios 
    * precisa configurar o pcatoe mochawesome 

## Karate 
Testes em API 
### Aula 5
Principais comandos -> 200 é o feedback de OK
* GET
* POST 
* PUT 
Principais Erros 
* 403 Forbidden
* 404 not found 
* 400 bad request 
* 503 service unavailable 



