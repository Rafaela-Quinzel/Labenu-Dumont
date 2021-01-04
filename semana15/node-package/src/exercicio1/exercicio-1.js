const userInfo = require("../userInfo.js") 

const name = userInfo[0].name

const age = Number(userInfo.age)

const ageInSevenYears = age + 7


console.log(`Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${ageInSevenYears}`);