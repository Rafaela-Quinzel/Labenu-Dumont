const sumNumbers = (intereger: number): number => {
    if (intereger > 0) {
        return intereger + sumNumbers(intereger - 1)
    } else return 0
}
console.log(sumNumbers(5))
