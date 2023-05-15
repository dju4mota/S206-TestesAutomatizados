Feature: Testando API Pokemon.

Scenario: Testando retorno ditto.
    Given "https://pokeapi.co/api/v2/pokemon/ditto"
    When method get
    Then status 200 

Scenario: Testando retorno aleatorio. 
    Given "https://pokeapi.co/api/v2/pokemon/12412421"
    When method get
    Then status 404