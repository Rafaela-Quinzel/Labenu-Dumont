export const printArray = (array: number[]): void => {
    if (array.length > 0) {
        console.log(array.splice(0, 1)[0])
        printArray(array)
    }
}
printArray([0, 1, 2, 3, 4])

