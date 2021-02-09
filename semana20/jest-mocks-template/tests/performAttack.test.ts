import { performAttackMock } from "../src/performAttack"
import { Character } from "../src/validateCharacter"

describe("Testing performAttack", () => {


    test("Should perform attack", () => {

        const validatorMock = jest.fn(() => {

            return true
        })

        const attacker: Character = {
            name: "Scorpion",
            life: 1500,
            defense: 200,
            strength: 600,
        }

        const defender: Character = {
            name: "Sindel",
            life: 1500,
            defense: 400,
            strength: 800,
        }

        performAttackMock(attacker, defender, validatorMock as any)

        expect(defender.life).toEqual(1300)
        expect(validatorMock).toHaveBeenCalled()
        expect(validatorMock).toHaveBeenCalledTimes(2)
        expect(validatorMock).toHaveReturnedTimes(2)
    })



    test("Should return invalid character error", () => {

        expect.assertions(4)

        const validatorMock = jest.fn(() => {
            return false
        })

        const attacker: Character = {
            name: "Millena",
            life: 1500,
            defense: 200,
            strength: 600,
        }

        const defender: Character = {
            name: "Sheeva",
            life: 1500,
            defense: 400,
            strength: 800,
        }

        try {

            performAttackMock(attacker, defender, validatorMock as any)

        } catch (error) {

            expect(error.message).toBe("Invalid character")
            expect(validatorMock).toHaveBeenCalled()
            expect(validatorMock).toHaveBeenCalledTimes(1)
            expect(validatorMock).toHaveReturnedTimes(1)
        }
    })

})