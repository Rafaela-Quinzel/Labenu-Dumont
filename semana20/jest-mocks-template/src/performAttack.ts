import { Character, validateCharacter } from "./validateCharacter"


// 3) a. Implemente a função de tal forma que ela utilize a função de validação diretamente na implementação
export const performAttack = (attacker: Character, defender: Character) => {

    if (!validateCharacter(attacker) || !validateCharacter(defender)) {

      throw new Error("Invalid character")
    }
  
    if (attacker.strength > defender.defense) {

      defender.life -= attacker.strength - defender.defense;
    }
}


export const performAttackMock = (
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


