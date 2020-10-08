/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


 /*** Montando o jogo ***/
alert("Bem vindo(a) ao jogo de BLACKJACK!")

if(confirm("Quer iniciar uma nova rodada?")){
   console.log("Vamos jogar! \n \nResultado:")

   /* Começando uma rodada */
   //Usuário
   const carta1 = comprarCarta()
   const cartaUsuario1 = carta1.texto
   const valorCartaUsuario1 = carta1.valor

   const carta2 = comprarCarta()
   const cartaUsuario2 = carta2.texto
   const valorCartaUsuario2 = carta2.valor

   const somaCartasUsuario = Number(valorCartaUsuario1) + Number(valorCartaUsuario2)
   console.log(`Usuário - cartas ${cartaUsuario1} ${cartaUsuario2} - pontuação ${somaCartasUsuario}`)


   //Computador
   const cartaComp1 = comprarCarta()
   const cartaComputador1 = cartaComp1.texto
   const valorCartaComputador1 = cartaComp1.valor

   const cartaComp2 = comprarCarta()
   const cartaComputador2 = cartaComp2.texto
   const valorCartaComputador2 = cartaComp2.valor

   const somaCartasComputador = Number(valorCartaComputador1) + Number(valorCartaComputador2)
   console.log(`Computador - cartas ${cartaComputador1} ${cartaComputador2} - pontuação ${somaCartasComputador}`)


/***Resultado do jogo***/
   if(somaCartasUsuario === somaCartasComputador){
      console.log("Empate!")
   } else if(somaCartasUsuario > somaCartasComputador){
      console.log("O usuário ganhou!")
   } else{
      console.log("O computador ganhou!")
   }

} else {
   console.log("O jogo acabou!")
}
