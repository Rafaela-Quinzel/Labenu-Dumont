export function isAnagram(word1: string, word2: string) {
    return word1.split("").sort().join("") === word2.split("").sort().join("")
}
console.log(isAnagram("gato", "toga")) //true
console.log(isAnagram("gato", "rato")) //false
console.log(isAnagram("gato", "togas")) //false