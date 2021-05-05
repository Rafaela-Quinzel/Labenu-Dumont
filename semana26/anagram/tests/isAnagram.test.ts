import { isAnagram } from "../src/isAnagram"


describe("Testing isAnagram", () => {

    test("Should be true", () => {

        const result = isAnagram("gato", "toga")

        expect(result).toBe(true)
    })

    test("Should be false", () => {

        const result = isAnagram("gato", "togas")

        expect(result).toBe(false)
    })
})