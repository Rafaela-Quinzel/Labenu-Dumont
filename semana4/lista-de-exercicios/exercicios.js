//----------------------------------------------LISTA DE EXERCÍCIOS----------------------------------------------//

/****** Exercícios de interpretação de código: ******/

// Exercício 01 
/*function conversorDeMoeda(valorEmDolar){
    const cotacao = Number(prompt("Informe o valor da cotação do Dólar")) //---> Está variável está solicitando ao usuário que digite um número e vai guardar esse valor.

    return "R$" + (valorEmDolar * cotacao) //---> Vai retornar R$ + o parâmetro da função * resultado do número digitado pelo usuário na variável cotacao, ex: R$500.
 }
  const meuDinheiro = conversorDeMoeda(100) //---> Foi criado outra variável que vai armazenar a função com o novo valor de parâmetro(100). Agora valorEMDolar vale 100.
  console.log(meuDinheiro) //---> Está imprimindo a variável meuDinheiro que, está pegando a função que traz o valor digitado * o valor que seu parâmetro tem dentro desta variável.
*/


// Exercício 02 
/* -> Na primeira linha foi criada uma função, a investeDinheiro tem dois parâmetros: tipoDeInvestimento e valor.
   -> Na segunda linha foi criada uma variavél valorAposInvestimento e sem nenhum valor atribuído.
   -> Na quarta linha foi criado um switch com uma condição que traz o parâmetro tipoDeInvestimento que será comprada.
   -> Dentro do switch ha cases que vão indicar as condições. Se a variável valorAposInvestimento for igual o que está dentro do case, o código (ex: valorAposInvestimento = valor * 1.03) vai se executado.
   -> No final do switch tem o default que será executado, caso o valor esteja incorreto, exibindo um alert com uma mensagem:"TIPO DE INVESTIMENTO INFORMADO INCORRETO".
   -> Na linha 21 vai retornar a variável valorAposInvestimento com seu novo valor conforme executado no switch.
   -> Na linha 24 foi criado uma variável novoMontante que traz a função investeDinheiro com novos parâmetros("Ações", 150).
   -> Na linha 25 foi criado uma outra variável chamada segundoMontante que também traz a função investeDinheiro com novos parâmetros("Tesouro Direto", 200).
   -> Na linha 27 vai ser impresso a variável novoMontante. Vai ser verificado dentro do switch da função investeDinheiro caso seja "Ações", o que será executado.
      No caso irá executar: valorAposInvestimento(variável) = "Ações"(parâmetro 1) * 1.1(parâmetro 2) - 165.
   -> Na linha 28 vai ser impresso a variável segundoMontante. Vai ser verificado dentro do switch da função investeDinheiro caso seja "Tesouro Direto", o que será executado.
      No caso irá executar o default com a mensagem:"TIPO DE INVESTIMENTO INFORMADO INCORRETO". Pois foi informado um parâmetro que não está declarado no switch como válido.
*/


// Exercício 03 
  /*const numeros = [25, 12, 55, 64, 121, 44, 11, 84, 51, 48, 14, 73, 111, 283] //---> Foi declarado um array de números.
  const array1 = []  //---> Foi declarado um array vazio para receber um elemento ou mais.
  const array2 = [] //---> Foi declarado um array vazio para receber um elemento ou mais.

  for(let numero of numeros){  //---> Está declarando a variável numero que vai percorrer os elementos do array numeros.
      if(numero % 2 === 0){  //---> Foi criada essa condição para verificar se o resto da divisão da variável numero é igual a 0, ou seja, se é par. Sem sim vai executar o código a baixo.
          array1.push(numero) // O push está adicionando no array1, que está vazio, o resultado da variável numero.
      } else{
          array2.push(numero) //---> Se a condição não for verdadeira, vai retornar com push no array2 a variável numero.
       }
  }
  console.log("Quantidade total de números", numeros.length) //---> Aqui vai ser impresso a frase e o número de elementos dentro do array numeros. Ex: 'Quantidade total de números 14'
  console.log(array1.length) //---> Vai ser impresso no console a quantidade de elementos no array1. Ex: 6
  console.log(array2.length) //---> Vai ser impresso no console a quantidade de elementos no array2. Ex: 8
*/


// Exercício 04 
// const numeros = [25, 12, 55, 64, 121, 44, 11, 84, 51, 48, 14, 73, 111, 283, 1, 99, 13, 31, 83, 131, 1, 1.1, -10, 25, 1590] //---> Foi declarado um array de números.
// let numero1 = Infinity // Está variável recebeu um valor infinito e sempre vai ser maior que qualquer número.
// let numero2 = 0 // Está variável recebeu o valor 0.

// for(let numero of numeros){ //---> Está declarando a variável numero que vai percorrer os elementos do array numeros.
//     if(numero < numero1){  //---> Foi criada essa condição para verificar se o(os) valor(es) da variável numero é menor que da variável numero1. Sem sim, vai executar o código a baixo.
//         numero1 = numero  //---> Se a condição for verdadeira, vai executar que a variável numero1 vai ser igual a variável numero.
//     }

//     if(numero > numero2){ //---> Foi criada essa condição para verificar se o(os) valor(es) da variável numero é maior que da variável numero2. Sem sim, vai executar o código a baixo.
//         numero2 = numero //---> Se a condição for verdadeira, vai executar que a variável numero2 vai ser igual a variável numero.
//     }
// }
// console.log(numero1) // Vai ser impresso no console o valor da variável numero1.
// console.log(numero2) // Vai ser impresso no console o valor da variável numero2.

 


/****** Exercícios de Lógica de Programação: ******/

// Exercício 01

const arrayListaDeNumeros = [10, 30, 50, 70, 100, 150, 180]

//---> EX 1: Utilizando o while para percorrer o array começando do índice 0 e trazendo os índices dos números iguais ou maiores que 100 do array. 
let i = 0
let novoArray = []
  while(i < arrayListaDeNumeros.length){
      if(arrayListaDeNumeros[i] >= 100){
          novoArray.push(i)
      }
      i++
  }
console.log(novoArray)

//---> EX 2: Utilizando o for para percorrer o array começando do índice 0 e trazendo o maior número do array.
let maiorNumero = 0 

for(let i = 0; i < arrayListaDeNumeros.length; i = i + 1){ // A variável i = 0 é o índice por onde vai começar a percorrer o array. Enquanto o índice for menor que o tamanho do array ele continua executando.
    let elemento = arrayListaDeNumeros[i] 

    if(maiorNumero < elemento){
        maiorNumero = elemento
    }
}
console.log(maiorNumero) //---> Está sendo impresso os elementos do array um em baixo do outro.

//---> EX 3: Utilizando o for of para percorrer o array e trazer seus elementos no console.
for(let i of arrayListaDeNumeros){ // Está declarando a variável índice do arrayDeNumeros.
      console.log(i) //---> Está sendo impresso os elementos do array um em baixo do outro.
    }


// // Exercício 02
// //    const booleano1 = true
// //    const booleano2 = false
// //    const booleano3 = !booleano2
// //    const booleano4 = !booleano3 

// /* a) booleano1 && booleano2 && !booleano4
//      -> true && false && true

//    b) (booleano1 && booleano2) || !booleano3
//      -> (true && false) || true
   
//    c) (booleano2 || booleano3) && (booleano4 || booleano1)
//      -> (false || true) && (false || true)

//    d) !(booleano2 && booleano3) || !(booleano1 && booleano3)
//      -> !(true && false) || !(false && false)

//    e) !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
//      -> !(false) && !(false) || (!true && true && true)
// */


// Exercício 03
const quantidadeDeNumerosPares = (numero) => {
  let i = 0
  while(i <= numero) {
    console.log(i*2)
    i++
  }
}
quantidadeDeNumerosPares(5)


//Exercício 04
const verficarTriangulo = (a, b, c) => {
    if(a === b && b === c){
        console.log("É um triângulo Equilátero!")
    } else if (a === c || b === c || a === b){
        console.log("É um triângulo Isósceles!")
    } else{
        console.log("É um triângulo Escaleno!")
    }

}
verficarTriangulo(20, 20, 20)


// Exercício 05

//---> i. indique qual é o maior
const arrayNumeros = [15, 30]
let maiorNumero = 0

    for(let i = 0; i < arrayNumeros.length; i = i + 1){ 
        let numero = arrayNumeros[i] 

        if(maiorNumero < numero){ 
            maiorNumero = numero
        } 
    }
console.log(`O maior número é: ${maiorNumero}`)

// //---> ii. determine se eles são divisíveis um pelo outro
const numero1 = 15
const numero2 = 30

    if (numero1 % numero2 === 0){
        console.log(`O ${numero1} é divisível por ${numero2}`)
    } else{
        console.log(`O ${numero1} não é divisível por ${numero2}`)
    }

// //---> iii. determine a diferença entre eles
const diferenca = numero2 - numero1
console.log(`A difrença entre eles é: ${diferenca}`)



 /****** Exercícios de Funções: ******/

//Exercício 01

const numeros = [67, 89, 50, 10, 95, 20]

const verficarNumeros = () => {

  const max1 = Math.max(...numeros)
  const primeiroMaior = []
  primeiroMaior.push(max1)
  // console.log(primeiroMaior) // Resultado 95 no console

  // console.log(numeros.indexOf(95))

  numeros.splice(4, 1)
  // console.log(numeros)

  const max2 = Math.max(...numeros)
  const segundoMaior = []
  segundoMaior.push(max2)
  console.log(segundoMaior) // Resultado 89 no console

  const min1 = Math.min(...numeros)
  const primeiroMenor = []
  primeiroMenor.push(min1)
  // console.log(primeiroMenor) // Resultado 10 no console

  // console.log(numeros.indexOf(10)) 

  numeros.splice(3, 1)
  // console.log(numeros)

  const min2 = Math.min(...numeros)
  const segundoMenor = []
  segundoMenor.push(min2)
  console.log(segundoMenor) // Resultado 20 no console

 return `O segundo maior número é ${segundoMaior} e o segundo menor número é ${segundoMenor}`
}
console.log(verficarNumeros())


//Exercício 02
let exibirMensagem = function(a, b) {
  return a + b
}
const mensagem = exibirMensagem("Hello ", " Future4")
window.alert(mensagem)



// /****** Exercícios de Objetos: ******/

//Exercício 01
//Explique com as suas palavras o que são e quando podemos/devemos utilizar arrays e objetos:
//---> Arrays são uma variável especial que contém mais de um valor por vez. Você pode armazenar muitos valores ao mesmo tempo com um único nome e pode acessá-los pelo número de índice quando você precisar.
//---> Ojetos são uma coleção de propriedades e uma associação entre um nome(ou chave) e um valor. Com as propridades dos objetos podemos guardar as informações de forma ordenada.


//Exercício 02
let criaRetangulo = (lado1, lado2) =>{
  const retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * [lado1 + lado2],
    area: lado1 * [lado2]
  }
  
  return retangulo
}
const resultado = criaRetangulo(5, 2)
console.log(resultado)


//Exercício 03
const filmeFavorito = {
  titulo: 'Invocação do Mal',
  ano: 2013,
  diretor: 'James Wan',
  elenco: ['Vera Farmiga', ' Patrick Wilson', ' Ron Livingston', ' Lili Taylor']
}
console.log(`Venha assistir ao filme ${filmeFavorito.titulo}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.elenco}!`)


//Exercício 04
const usuario = {
  nome: 'Maria dos Santos',
  idade: 56,
  email: 'mSantos@gmail.com',
  endereco: 'Rua Caí, 121, Porto Alegre/RS'
}

let anonimizarPessoa = () => {

const usuarioAnonimo = {
  ...usuario,
  nome: 'ANÔNIMO'
}

return usuarioAnonimo

}
console.log(anonimizarPessoa(usuario))



/****** Exercícios de Funções de array: ******/

//Exercício 01
//---> Resposta a.:
const usuarios = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

const retornarAdultos = usuarios.filter((usuario, index, usuarios) => {
  if(usuario.idade >= 20){
    return true
  }
  return false
})
console.log(retornarAdultos)

//---> Resposta b.:
const usuarios = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

const retornarCriancas = usuarios.filter((usuario, index, usuarios) => {
  if(usuario.idade < 20){
    return true
  }
  return false
})
console.log(retornarCriancas)


//Exercício 02
//---> Resposta a.:
const array = [1, 2, 3, 4, 5, 6]

const multiplicarPorDois = array.map((numeros, index, array) => {
    return numeros * 2
})
console.log(multiplicarPorDois)


 //---> Resposta b.:
const array = [1, 2, 3, 4, 5, 6]

const multiplicarPorTres = array.map((numeros, index, array) => {
    return numeros * 3
})
console.log(multiplicarPorTres)


 //---> Resposta c.:
const array = [1, 2, 3, 4, 5, 6]
const novo = []

const multiplicarPorDois = array.map((numero, index, array) => {
  if(numero % 2 === 0){
    return `${numero} é par`
  } else{
    return `${numero} é impar`
  }
})
console.log(multiplicarPorDois)


//Exercício 03
const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

//---> Resposta a.:
const verificarRequisitos = pessoas.filter((usuario, index, pessoas) => {
    if(usuario.altura >= 1.5 && usuario.idade >= 14){
      return true
    } 
})
console.log(verificarRequisitos)


//---> Resposta b.:
const verificarRequisitos = pessoas.filter((usuario, index, pessoas) => {
    if(usuario.altura < 1.5 || usuario.idade < 14){
      return true
    } 
})
console.log(verificarRequisitos)


//Exercício 04
const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

//---> E-mail para as consultas não canceladas:
const verificarNaoCanceladas = consultas.filter((consulta, index, consultas) => {
    if(consulta.cancelada === false){
      return true
    }
    return false

}) .map((consulta) => {
  if(consulta.genero === 'feminino'){
   return `Olá Sra. ${consulta.nome}. Estamos enviando esta mensagem para lembrá-la da sua consulta no dia ${consulta.dataDaConsulta}. Por favor, acuse recebimento deste e-mail.`
  } else if(consulta.genero === 'masculino'){
    return `Olá Sr. ${consulta.nome}. Estamos enviando esta mensagem para lembrá-lo da sua consulta no dia ${consulta.dataDaConsulta}. Por favor, acuse recebimento deste e-mail.`
  }
})
console.log(verificarNaoCanceladas)

//---> E-mail para as consultas canceladas:
const verificarCanceladas = consultas.filter((consulta, index, consultas) => {
  if(consulta.cancelada === true){
    return true
  }
  return false

}) .map((consulta) => {
    if(consulta.genero === 'feminino'){
       return `Olá Sra. ${consulta.nome}. Infelizmente, sua consulta marcada para o dia ${consulta.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`
    } else if(consulta.genero === 'masculino'){
       return `Olá Sr. ${consulta.nome}. Infelizmente, sua consulta marcada para o dia ${consulta.dataDaConsulta}. foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`
    }
})
console.log(verificarCanceladas)


//Exercício 05
const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

contas.forEach((cliente, index, array) => {
    let soma = 0
    for (let compra of cliente.compras) {
        soma += compra
    }
    cliente.saldoTotal -= soma
   for (let i = 0; i < cliente.compras.length; i++) {
    soma += cliente.compras[i]    
    console.log(Number(soma))           
   }
})
console.log(contas)





