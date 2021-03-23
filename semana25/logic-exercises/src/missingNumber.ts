export const findMissingNumber = (array: number[]): number | void => {
    const sortedArray: Array<number | undefined> = []

    for (const num of array) {
        sortedArray[num - 1] = num
    }

    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] === undefined) return i + 1
    }

    if (sortedArray[array.length - 1] !== 100) {
        return 100
    } 
}
console.log(findMissingNumber([1, 2, 3, 5, 6, 7, 8, 9, 10]))