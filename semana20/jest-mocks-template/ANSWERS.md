# EXERCÍCIO 03


b) Resposta:
````
export const performAttack = (
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean
  ) => {
      
    if (!validator(attacker) || !validator(defender)) {

      throw new Error("Invalid character")
    }
  
    if (attacker.strength > defender.defense) {

      defender.life -= attacker.strength - defender.defense
    }
}
````

c) Resposta:
- A função não está  dependendo da outra função para validar
 os dados.

- Na inversão de dependência a função 
 de validação está sendo criada/chamada dentro dos 
 parâmetros e retringindo um tipo de retorno boolean.



# EXERCÍCIO 04
 
a) Resposta:
- Acredito que seja a função validateCharacter devido a validação de dados, pois senão não seria possível rodar a próxima função.


b) Resposta:
````
test("Creating Mocks", () => {

    const validatorMock = jest.fn(() => {
		return true
	})
})
````

c) Resposta:
````
test("Creating Mocks", () => {

    const validatorMock = jest.fn(() => {
		return false
	})
})
````