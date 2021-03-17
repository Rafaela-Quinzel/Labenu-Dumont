// a)
const printNumbersAscendingOrder = (n: number): void => {
  if (Math.floor(n) >= 0) {
    printNumbersAscendingOrder(n - 1)
    console.log(Math.floor(n))
  }
}
printNumbersAscendingOrder(5)


// b)
const printNumbersDescendingOrder = (n: number): void => {
  if (Math.floor(n) >= 0) {
    console.log(Math.floor(n))
    printNumbersDescendingOrder(n - 1)
    
  }
}
printNumbersDescendingOrder(5)