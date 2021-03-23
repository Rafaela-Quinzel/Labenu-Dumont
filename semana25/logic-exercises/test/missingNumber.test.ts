import { findMissingNumber } from "../src/missingNumber"


describe.skip("findMissingNumber Test Flow", () => {

    test("Should return 25", () => {
        const numberArray: number[] = []

        for (let i = 1; i <= 100; i++) numberArray.push(i)
        numberArray.splice(24, 1)

        const result = findMissingNumber(numberArray)

        expect(result).toBe(25)
    })

    test("Should return 100", () => {
        const numberArray: number[] = []

        for (let i = 1; i <= 100; i++) numberArray.push(i)
        numberArray.splice(99, 1)

        const result = findMissingNumber(numberArray)

        expect(result).toBe(100)
    })

    test("Should return undefined if no number is missing", () => {
        const numberArray: number[] = []
    })
})