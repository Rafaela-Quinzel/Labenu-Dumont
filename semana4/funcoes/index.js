//EXERCÍCIO 1 - Interpretação de código:
// function minhaFuncao(variavel) {
// 	return variavel * 5           
// }                                //---> Resposta a.: Vai ser impresso no console os números: 10 e 50

// console.log(minhaFuncao(2))          
// console.log(minhaFuncao(10))

/* minhaFuncao(2)     //---> Resposta b.: Vai aparecer uma mensagem de erro, pois não está imprimindo no console o retorno da função. E teria que armazenar o resultado em uma variável. 
minhaFuncao(10) */


//EXERCÍCIO 2 - Interpretação de código:
// let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Soter"];

// const outraFuncao = function(array) {
// 	for (let i = 0; i < 2; i++) {       //---> Resposta a.: No console foram impressos os nomes: Darvas - Caio. Pois a contagem do for está indo somente até a segunda posição do array.
// 		console.log(array[i])
// 	}
// }                             //---> Resposta b.: Se o array mudasse para ["Amanda", "Caio"], seria impresso no console - Amanda - Caio. Posições [0] e [1] como no exercício a.

// outraFuncao(arrayDeNomes)


//EXERCÍCIO 3 - Interpretação de código:
// const metodo = (array) => {
//     let arrayFinal = [];         //---> Resposta: O arrayFinal está recebendo o resultado de (x * x) e retornando esse resultado. Ele poderia ser chamado de arrayTotal, pois está recebendo o resultado de um número * ele mesmo. 
  
//     for (let x of array) {
//           if (x % 2 === 0) {
//           arrayFinal.push(x * x)
//           }
//     }
  
//     return arrayFinal;
//   }



//EXERCÍCIO 4 - Escrita de código:

//   //---> Resposta a.:
    function printPresentation(){
        console.log("Eu sou Rafaela, tenho 30 anos, moro no Rio Grande do Sul e sou estudante.")
    }
    printPresentation()

    //---> Resposta b.:
    function printMessage(questions){
        let yesNo
        if(questions === "sim"){
           yesNo = "sou estudante"
        } else {
           yesNo = "não sou estudante"
        }
        return yesNo
    }
    const nameUser = prompt("Qual é o seu nome?")
    const ageUser = Number(prompt("Qual a sua idade?"))
    const cityUser = prompt("Em qual cidade você mora?")
    const askUser = prompt("Você é estudante?").toLocaleLowerCase()
    const answerUser = printMessage(askUser)
    
    console.log(`Eu sou ${nameUser}, tenho ${ageUser} anos, moro em ${cityUser} e ${answerUser}.`)
 

//EXERCÍCIO 5 - Escrita de código:

//   //---> Resposta a.:
    let sumTwoNumbers = (number1, number2) => {
        const sum = number1 + number2
        return sum
    }
    const totalSum = sumTwoNumbers(23, 52)
    console.log(totalSum)
  
  //---> Resposta b.:  
    let comparesTwoNumbers = (number1, number2) => {
        let result
        if(number1 > number2){
          result = "O primeiro número é maior que o segundo!"
        } else if(number1 < number2){
            result = "O segundo número é maior que o primeiro!"
        } else{
            result = "O primeiro número e o segundo número são iguais!"
        }
        return result
    }
    const resultCompares = comparesTwoNumbers(23, 52)
    console.log(resultCompares)

//---> Resposta c.:  
    let repeatMessage = () => {
        for(let i = 0; i < 10; i++){
         console.log("Sou estudante da Labenu!");
        }
    }
    repeatMessage()


//EXERCÍCIO 6 - Escrita de código:
 const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

 //---> Resposta a.:
 let printQuantity = (arrayNumbers) => {
     for(let i = 0; i < array.length; i++){
         console.log(array[i])
     }
       return array
 }
 let quantityElements = printQuantity()
 console.log(quantityElements)

//---> Resposta b.:
 let checkNumber = (number) => {
    let resultNumber
    if(number % 2 === 0){
    resultNumber = "O número é PAR!"
    } else{
        resultNumber = "O número é IMPAR!"
    }
  return resultNumber
}
const resultCheck = checkNumber(78)
console.log(resultCheck)

//---> Resposta c.:
let checkEvenNumbers = (array) => {
   for(let i = 0; i < array.length; i++){
     let evenNumbers = array[i] % 2
       if(evenNumbers === 0){
           pairs++
       }
   }
   return pairs
}
let pairs = 0
console.log(checkEvenNumbers(array))

//---> Resposta d.:
let checkNumber = (number) => {
    let resultNumber
    for(let i = 0; i < array.length; i++){
    if(number % 2 === 0){
    resultNumber = true
    } else{
        resultNumber = false
    }
}
  return resultNumber
}
const resultCheck = checkNumber(array)
console.log(resultCheck)



//DESAFIO - 1
let printParameter = (parameter) =>{
    console.log(parameter)
}

let sumParameters = (parameter1, parameter2) =>{
    sum (parameter1, parameter2)

    console.log(printParameter(sum))
}









