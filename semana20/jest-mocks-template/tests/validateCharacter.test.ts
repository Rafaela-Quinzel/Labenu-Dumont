import { validateCharacter } from "../src/validateCharacter"


describe("Testing validateCharacter", () => {

    test("Should return false for empty name", () => {
        const result = validateCharacter({
          name: "",
          life: 1500,
          strength: 300,
          defense: 500,
        })
    
        expect(result).toBe(false)
    })


    test("Should return false for 0 life", () => {

        const result = validateCharacter({
          name: "Sindel",
          life: 0,
          strength: 300,
          defense: 500,
        })
    
        expect(result).toBe(false)
    })


    test("Should return false for 0 strength", () => {

        const result = validateCharacter({
          name: "Sindel",
          life: 1500,
          strength: 0,
          defense: 500,
        })
    
        expect(result).toBe(false)
    })


    test("Should return false for 0 defense", () => {

        const result = validateCharacter({
          name: "Sindel",
          life: 1500,
          strength: 300,
          defense: 0,
        })
    
        expect(result).toBe(false)
    })

    test("Should return false for negative numbers", () => {

        const result = validateCharacter({
          name: "Sindel",
          life: -30,
          strength: -50,
          defense: -10,
        })
    
        expect(result).toBe(false)
    })

    test("Should return true for all valid inputs", () => {
        const result = validateCharacter({
          name: "Sindel",
          life: 1500,
          strength: 300,
          defense: 500,
        })
    
        expect(result).toBe(true)
    })
})