// EXERCÍCIO 1 - Iterpretação de código //
// let valor = 0
// for(let i = 0; i < 5; i++) { //---> Ele está pegando o começo fazendo a contagem com o incremento para gerar o loop até chegar no final da condição de continuação.
//   valor += i
// }
// console.log(valor) //---> Resposta: foi impresso o número 10 no console.


// EXERCÍCIO 2 - Iterpretação de código //
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero) //---> Resposta a.: está sendo impresso os números (19, 21, 23, 25, 27, 30) um em baixo do outro no console. Pois a let numero está pedindo maiores que 18.
// 	}
// }

// let i = 0
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let indice of lista) {
//     console.log("Índice: ", i)    //---> Resposta exercício b - fazendo algumas alterações no código é possível imprimir os índices de cada elemento do array.
//   if (indice > 0) {
//         console.log(indice)
//     }
//     i++
// }


// DESAFIO 1 - Interpretação de Código //
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "0"
//   }
//   console.log(linha)    //---> Resposta: foi impresso os números (0, 00, 000, 0000) no console. Está contando 4 vezes o número "0" e aumentando a quantidade de zeros até chegar no final da contagem, que é 4.
//   quantidadeAtual++
// }



// EXERCÍCIO 3 - Escrita de código //
let arrayOriginal = [10, 21, 30, 45, 50, 56]

for(let i = 0; i < arrayOriginal.length; i = i + 1) {
    console.log(arrayOriginal[i])        //---> Resposta a.: foram impressos todos os valores do arrayOriginal no console.
}


for(let i = 0; i < arrayOriginal.length; i = i + 1) {
     console.log(arrayOriginal[i] / 10)     //---> Resposta b.: foram impressos no console (1, 2.1, 3, 4.5, 5, 5.6)
}


let arrayOriginal = [10, 21, 30, 45, 50, 56]
let novoArray = []

for(let numero of arrayOriginal){
    if(numero % 2 === 0){
        novoArray.push(numero)     //---> Resposta c.: imprimiu os números [10, 30, 50, 56]
    }
}
console.log(novoArray)


let arrayOriginal = [10, 21, 30, 45, 50, 56]
let i = 0
let arrayStrings = []      

for(let numero of arrayOriginal) {                 //---> Resposta d.: Imprimiu no console o índice de cada valor do array.
     console.log("O elemento do índex: " + i + " é " + numero)
     i ++
}


let arrayOriginal = [10, 21, 30, 45, 50, 56]
let valorMaximo = arrayOriginal[0]
let valorMinimo = arrayOriginal[0]

for(let numero of arrayOriginal){
    if(numero > valorMaximo){               
        valorMaximo = numero                 //---> Resposta e.: "O maior número é 56 e o menor é 10"
    }
    if(numero < valorMinimo){
        valorMinimo = numero
    }
}
console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}`)



// DESAFIO 2 - Escrita de Código //
let numeroPensado = Number(prompt("Escolha um número! \n De 1 a 10"))
console.log("Vamos jogar!")

let numeroChutado = Number(prompt("Chute um número de 1 a 10 e te digo se acertou!"))
console.log(`Q número chutado foi: ${numeroChutado}`)

let tentativas = 1

while (numeroPensado !== numeroChutado){
    if (numeroPensado > numeroChutado){
        alert("Errrrrrrrou, é maior!")
        console.log("Errrrrrrrou, é maior!")
    } 
    else if(numeroPensado < numeroChutado){
        alert("Errrrrrrrou, é menor!")
        console.log("Errrrrrrrou, é menor!")
    }

    tentativas++
    numeroChutado = Number(prompt("Chute um número de 1 a 10 e te digo se acertou!"))
    console.log(`Q número chutado foi: ${numeroChutado}`)
}
alert("Acertou!!!")
console.log("Acertou!!!")
console.log(`O número de tentativas foi: ${tentativas}`)


// DESAFIO 3 - Escrita de Código //
let numeroPensado = Math.floor(Math.random()*100) //---> Foi tranquilo fazer a alteração, pois alterei somente a primeira linha do código.
console.log("Vamos jogar!")

let numeroChutado = Number(prompt("Chute um número de 1 a 100 e te digo se acertou!"))
console.log(`Q número chutado foi: ${numeroChutado}`)

let tentativas = 1

while (numeroPensado !== numeroChutado){
    if (numeroPensado > numeroChutado){
        alert("Errrrrrrrou, é maior!")
        console.log("Errrrrrrrou, é maior!")   
    } 
    else if(numeroPensado < numeroChutado){
        alert("Errrrrrrrou, é menor!")
        console.log("Errrrrrrrou, é menor!")
    }

    tentativas++
    numeroChutado = Number(prompt("Chute um número de 1 a 100 e te digo se acertou!"))
    console.log(`Q número chutado foi: ${numeroChutado}`)
}
alert("Acertou!!!")
console.log("Acertou!!!")
console.log(`O número de tentativas foi: ${tentativas}`)