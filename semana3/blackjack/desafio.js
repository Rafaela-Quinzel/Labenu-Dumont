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

//DESAFIO 8

alert("Bem vindo(a) ao jogo de BLACKJACK!")
const iniciarJogo = confirm("Quer iniciar uma nova rodada?")

   let cartasUsuario = []
   let pontosUsuario = []
   let revelarCartasUsuario = ""
   let revelarPontosUsuario = 0

   let cartasComputador = []
   let pontosComputador = []
   let revelarCartasComputador = ""
   let revelarPontosComputador = 0


   if(iniciarJogo){
      for(let i = 0; i < 2;){
         let carta = comprarCarta()
         cartasUsuario.push(carta.texto)
         pontosUsuario.push(carta.valor)
         if((cartasUsuario[0] === "A") && (cartasUsuario[1] === "A")){
            i = i
         } else {
            i++
         }
      }
   for(let carta of cartasUsuario){
      revelarCartasUsuario += (carta + " ")
   }
   for(let valor of pontosUsuario){
      revelarPontosUsuario += valor
   }

   for(let i = 0; i < 2;){
      let carta = comprarCarta()
      cartasComputador.push(carta.texto)
      pontosComputador.push(carta.valor)
      if((cartasComputador[0] === "A") && (cartasComputador[1] === "A")){
         i = i
      } else {
         i++
      }
   }
   for(let carta of cartasComputador){
      revelarCartasComputador += (carta + " ")
   }
   for(let valor of pontosComputador){
      revelarPontosComputador += valor
   }
   
   console.log(`Usuário - ${revelarCartasUsuario} - pontuação ${revelarPontosUsuario}`)
   console.log(`Conputador - ${revelarCartasComputador} - pontuação ${revelarPontosComputador}`)

   if(pontosUsuario === pontosComputador){
         console.log("Empate!")
      } else if(pontosUsuario > pontosComputador){
         console.log("O usuário ganhou!")
      } else{
         console.log("O computador ganhou!")
      }

} else {
   console.log("O jogo acabou!")
}

