function checkOneEdit(inputA, inputB) {
    if (Math.abs(inputB.length - inputA.length) > 1) {
        return false;
    }
    if (inputA.length > inputB.length) {
        return inputA.includes(inputB);
    }
    if (inputB.length > inputA.length) {
        return inputB.includes(inputA);
    }
    let charsDiffCount = 0;
    for (let i = 0; i < inputA.length; i++) {
        if (inputA[i] !== inputB[i]) {
            charsDiffCount++;
        }
    }
    return charsDiffCount === 1;
}
console.log(checkOneEdit("banan", "banana"));
console.log(checkOneEdit("bananaaaa", "banana"));
