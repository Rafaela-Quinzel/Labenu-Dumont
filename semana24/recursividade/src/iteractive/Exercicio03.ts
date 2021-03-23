const calculateSumNumbers = (intereger: number): number => {
    let sum = 0

    for(let i = 1; i <= intereger; i++) {
        sum += i
    }

    return sum
}
console.log(calculateSumNumbers(5))
