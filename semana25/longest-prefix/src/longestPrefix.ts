function longestPrefixes(input: string[]) {
    
    if(input.length === 0) return ""

    let commonPrefix = ""
    
    for(let i = 0; i < input[0].length; i++) {
        let currentChar = input[0][i]
        let areAllCharsSame = true
        
        for(let j = 0; j < input.length; j++) {
            if(input[j][i] !== currentChar) {
                return commonPrefix
            }
        }
        
        if(currentChar) {
            commonPrefix += currentChar
        }
    }
    
    return commonPrefix

}
console.log(longestPrefixes(["bala", "banana"]))
console.log(longestPrefixes(["casa", "predio"]))
console.log(longestPrefixes(["flor", "flocos", "flora"]))