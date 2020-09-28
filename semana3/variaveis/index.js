// Exercício 1 - Interpretação de código
// a = 10
// b = 10

// console.log(b) -> vai imprimir o valor "10"

// b = 5
// console.log(a, b) -> vai imprimir "10 5"


// Exercício 2 - Interpretação de código

// a = 10
// b = 20
// c = a
// b = c
// a = b

// console.log(a, b, c) -> vai imprimir "10 20 10"



// Exercício 1 - Escrita de código

let nome
let idade

console.log(typeof nome) //resultado - undefined -> este foi o resulatdo, pois não foi declarado valor a variável
console.log(typeof idade) //resultado - undefined -> este foi o resulatdo, pois não foi declarado valor a variável

nome = prompt("Qual seu nome?")
idade = prompt("Qual a sua idade?")

console.log(typeof nome) //respondi as perguntas do prompt e retornou -> string
console.log(typeof idade) //respondi as perguntas do prompt e retornou -> string

console.log("Olá", nome, ",", "você tem", idade, "anos.")



// Exercício 2 - Escrita de código

let cidadeEstado
let cor
let filme
let serie
let musica

cidadeEstado = prompt("Em qual cidade e estado você mora?")
console.log(`Em qual cidade e estado você mora? Resposta: ${cidadeEstado}`)
cor = prompt("Qual a sua cor favorita?")
console.log(`Qual a sua cor favorita? Resposta: ${cor}`)
filme = prompt("Qual seu filme favorito?")
console.log(`Qual seu filme favorito? Resposta: ${filme}`)
serie = prompt("Qual a sua série favorita?")
console.log(`Qual a sua série favorita? Resposta: ${serie}`)
musica = prompt("Qual estilo de músicas você curte?")
console.log(`Qual estilo de músicas você curte? Resposta: ${musica}`)



// Exercício 3 - Escrita de código

let comidasPreferidas = ["batata_frita","churrasco", "lasanha", "pizza", "empada de frango"]

console.log(comidasPreferidas)

console.log(`Essas são as minhas comidas preferidas: \n ${comidasPreferidas[0]} \n ${comidasPreferidas[1]} \n ${comidasPreferidas[2]} \n ${comidasPreferidas[3]} \n ${comidasPreferidas[4]}`)

let comida

comida = prompt("Qual sua comida favorita?")
console.log(`Nova lista: \n ${comidasPreferidas[0]} \n ${comida} \n ${comidasPreferidas[2]} \n ${comidasPreferidas[3]} \n ${comidasPreferidas[4]}`)



// Exercício 4 - Escrita de código

let pergunta = ["Hoje o dia está ensolarado?", "Você está com frio?", "Você está usando uma camisa laranja?"]

let resposta = ["True", "False"]

console.log(`${pergunta[0]} \n ${resposta[0]} \n ${pergunta[1]} \n ${resposta[0]} \n ${pergunta[2]} \n ${resposta[1]}`)
