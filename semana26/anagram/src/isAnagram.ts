export function isAnagram(word1: string, word2: string, caseSensitive: boolean = true) {
    if(word1.length !== word2.length) return false
    
    return caseSensitive ?
        word1.toLowerCase().split("").sort().join("") === word2.toLowerCase().split("").sort().join("")
        : word1.split("").sort().join("") === word2.split("").sort().join("")
}
console.log(isAnagram("gato", "toga")) //true
console.log(isAnagram("gato", "Toga")) //true
console.log(isAnagram("gato", "rato")) //false
console.log(isAnagram("gato", "togas")) //false