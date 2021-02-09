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


