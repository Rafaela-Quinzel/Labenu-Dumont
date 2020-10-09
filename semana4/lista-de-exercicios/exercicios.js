//------------------------------------LISTA DE EXERCÍCIOS------------------------------------//

//Exercícios de interpretação de código:

// Exercício 01 //
/*function conversorDeMoeda(valorEmDolar){
    const cotacao = Number(prompt("Informe o valor da cotação do Dólar")) //---> Está variável está solicitando ao usuário que digite um número e vai guardar esse valor.

    return "R$" + (valorEmDolar * cotacao) //---> Vai retornar R$ + o parâmetro da função * resultado do número digitado pelo usuário na variável cotacao, ex: R$500.
}
  const meuDinheiro = conversorDeMoeda(100) //---> Foi criado outra variável que vai armazenar a função com o novo valor de parâmetro(100). Agora valorEMDolar vale 100.
  console.log(meuDinheiro) //---> Está imprimindo a variável meuDinheiro que, está pegando a função que traz o valor digitado * o valor que seu parâmetro tem dentro desta variável.
  */

// Exercício 02 //
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

// Exercício 03 //
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
                            







