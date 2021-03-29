import { lonelyNumber } from "../src/lonelyNumber"

describe("Testing lonelyNumber", () => {

    test("Should return 3", () => {
        const result = lonelyNumber([5, 4, 4, 5, 3, 5])

        expect(result).toBe(3)
    })

    test("Should return 8", () => {
        const result = lonelyNumber([6, 4, 1, 6, 1, 7, 4, 8, 7])

        expect(result).toBe(8)
    })
})