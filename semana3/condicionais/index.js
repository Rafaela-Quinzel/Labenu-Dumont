// Exercício 1 - Interpretação de código //
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if(numero % 2 === 0) {
//   console.log("Passou no teste.") //---> Resposta: Ele verifca se oas números digitados pelo usuário são divisíveis por 2.
// } else {
//   console.log("Não passou no teste.") //---> Resposta: Esta mensagem apareceu para os números que não são divisíveis por 2.
// }


// Exercício 2 - Interpretação de código //
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {           //---> Resposta a.: O código serve para informar o preço das frutas que ele escolher.
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":       //---> Resposta b.: mensagem impressa no console: "O preço da fruta  Maçã  é  R$  2.25"
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c. //---> Resposta c.: mensagem impressa no console: "O preço da fruta  Pêra  é  R$  5"
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)



// Exercício 3 - Interpretação de código //
const numero = Number(prompt("Digite o primeiro número.")) //---> Resposta a.: Está pedindo ao usuário que digite o primeiro número.

if(numero > 0) {
  console.log("Esse número passou no teste")    //---> Resposta b.: mensagem impressa no console digitando o número 10: "Esse número passou no teste"
	let mensagem = "Essa mensagem é secreta!!!"  //---> Resposta b.: mensagem impressa no console digitando o número -10: "Uncaught ReferenceError: mensagem is not defined"
}        //---> Resposta c.: está faltando o "else" para imprimir uma mensagem ao usuário, caso digite um número que não seja dentro da condição inicial.

console.log(mensagem)



// Exercício 4 - Escrita de código //
let idade
idade = Number(prompt("Qual é a sua idade?"))

if(idade >= 18) {
    console.log("Você pode dirigir!")
} else {
    console.log("Você não pode dirigir!")
}


// Exercício 5 - Escrita de código //
let turno
turno = prompt("Em qual turno você estuda? \n Responda - M (matutino) ou V (vespertino) ou N (noturno)").toLocaleLowerCase()

if(turno === "m"){
    console.log("Bom dia!")
} else if(turno === "v"){
    console.log("Boa tarde!")
} else if(turno === "n"){
    console.log("Boa noite!")
} else {
    console.log("Resposta inválida! Por gentileza digite conforme solicitado.")
}


// Exercício 6 - Escrita de código //
let turno
turno = prompt("Em qual turno você estuda? \n Responda - M (matutino) ou V (vespertino) ou N (noturno)").toLocaleLowerCase()

switch(turno){
  case "m":
    console.log("Bom dia!")
    break;
  case "v":
    console.log("Boa tarde!")
    break;
  case "n":
    console.log("Boa noite!")
    break;
  default:
    console.log("Resposta inválida! Por gentileza digite conforme solicitado.")
    break;
}


// Exercício 7 - Escrita de código //
let genero
let preco

genero = prompt("Qual genero de filme vocês vão assistir?").toLocaleLowerCase()
preco = Number(prompt("Qual é o preço do ingresso?"))

if(genero === "fantasia" && preco <= 15){
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}



// DESAFIOS //

//Desafio 1
let genero
let preco
let snack

genero = prompt("Qual genero de filme vocês vão assistir?").toLocaleLowerCase()
preco = Number(prompt("Qual é o preço do ingresso?"))
snack = prompt("Que snack você vai comprar?").toLocaleLowerCase()

if(genero === "fantasia" && preco <= 15 && snack){
    console.log(`Bom filme! e com: ${snack}`)
} else {
    console.log("Escolha outro filme :(")
}


