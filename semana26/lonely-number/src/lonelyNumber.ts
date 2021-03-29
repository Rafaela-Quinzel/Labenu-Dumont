function lonelyNumber(input: number[]) {
    let result = input.filter(function (value: any) {
        return input.indexOf(value) === input.lastIndexOf(value)
    })

    return result[0]

}
console.log(lonelyNumber([2, 2, 1, 1, 3, 3, 4, 5, 4]))