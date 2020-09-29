// Exercício 1 de interpretação de código:

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)  ---> mensagem: "a. false"

// resultado = bool1 && bool2 && bool3
// console.log("b. ", resultado)  ---> mensagem: "b. false"

// resultado = !resultado && (bool1 || bool1)
// console.log("c. ", resultado)  ---> mensagem: "c. true"

// console.log("e. ", typeof resultado)  ---> mensagem: "e. boolean"



// Exercício 2 de interpretação de código:

// let array
// console.log('a. ', array) ---> mensagem: "a. undefined"

// array = null
// console.log('b. ', array) ---> mensagem: "b. null"

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//console.log('c. ', array.length) //---> mensagem: "c. 11"

//  let i = 0
// console.log('d. ', array[i]) ---> mensagem: "d. 3"

// array[i+1] = 19
// console.log('e. ', array) ---> mensagem: "e. [3, 19,  5,  6,  7, 8,  9, 10, 11, 12,13]

// const valor = array[i+6]
// console.log('f. ', valor) ---> mensagem: "f. 9"



//Exercício 1 de escrita de código:

let idadeUsuario
let outraIdade

idadeUsuario = prompt("Qual é a sua idade?")
outraIdade = prompt("Qual é a idade do seu melhor amigo ou amiga?")

let diferenca = Number(idadeUsuario) - Number(outraIdade)

console.log("Sua idade é maior do que a do(a) seu(ua) melhor amigo(a)? \n Resposta: true")
console.log(diferenca)


//Exercício 2 de escrita de código:

let numeroPar

numeroPar = prompt("Insira um número PAR")

let resposta = Number(numeroPar) % 2  

console.log(resposta)  //---->> Quando é inserido um número par retorna o número 0 e quando inserido um número impar retorno 1.


//Exercício 3 de escrita de código:

let listaDeTarefas = []

alert("Por gentiza, cite 3 tarefas que você precise realizar hoje:")

tarefa1 = prompt("Primeria tarefa")
tarefa2 = prompt("Segunda tarefa")
tarefa3 = prompt("Teceira tarefa")

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)

let tarefaRealizada = prompt("Qual das tarefas você já realizou? 0, 1 ou 2?")

listaDeTarefas.splice(tarefaRealizada, 1)
console.log(listaDeTarefas)

alert("Só mais duas perguntinhas:")


//Exercício 4 de escrita de código:

let nomeUsuario
let emailUsuario

nomeUsuario = prompt("Qual seu nome?")
emailUsuario = prompt("Qual seu email")
console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem vinda(o), ${nomeUsuario}!`)
 
alert("Muito Obrigada! :)")

