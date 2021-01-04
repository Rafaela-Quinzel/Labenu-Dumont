const userInfo = require("../userInfo.js") 

const name = userInfo[0].name

const age = Number(userInfo.age)


console.log(`Olá, ${name}! Você tem ${age} anos.`);