//Desafio 1
let kelvin = (77-32)*5/9 + 273.15 
console.log(kelvin, "K") //--->Resposta: 298.15 K

let fah = (80)*9/5 + 32
console.log(fah, "°F") //--->Resposta: 176 °F

let fahr = (30)*9/5 + 32
console.log(fahr, "°F") //--->Resposta: 86 °F

let kelv = (30-32)*5/9 + 273.15
console.log(kelv, "K") //--->Resposta: 272.0388888888889 K

let C
C = prompt("Escolha uma teperatura em °C:")
let F = (C)*9/5 + 32
let K = (C-32)*5/9 + 273.15

console.log(F + "°F", "e", K + "K")


//Desafio 2
let kW = prompt("Quantos quilowatts você consumiu? Somente NÚMEROS.")
let valorTotal = kW *0.05
console.log("Valor total a ser pago, com base no seu consumo: R$ " + valorTotal) //---> Resultado de uma residência que consome 280kw/h - Valor total a ser pago, com base no seu consumo: R$14

let desconto = valorTotal*(0.15)
console.log("Você terá um desconto de R$ " + desconto) //---> Resultado de uma residência que consome 280kw/h - Você terá um desconto de R$2.1

let total = valorTotal - desconto
console.log("Valor total com desconto: R$ " + total) //---> Resultado de uma residência que consome 280kw/h - Valor total com desconto: R$11.9



//Desafio 3
let ib = 20
let kg = ib/2.2046

console.log("20ib equivalem a", kg + "kg") //---> Resultado: "20ib equivalem a 9.071940488070398kg"


let oz = 10.5
let kg = oz/35.274

console.log("10.5oz equivalem a", kg + "kg") //---> Resultado: "10.5oz equivalem a 0.29766967171287634kg"


let mi = 100
let m = 100/0.00062137

console.log("100mi equivalem a", m + "m") //---> Resultado:  "100mi equivalem a 160934.70878864444m"


let ft = 50
let m = 50/3.2808

console.log("50ft equivalem a", m + "m") //---> Resultado: "50ft equivalem a 15.240185320653499m"


let gal = 103.56
let m = 103.56/0.26417

console.log("103.56gal equivalem a", m + "m") //---> Resultado: "103.56gal equivalem a 392.0202899647954m"


let xic = 450
let l = 450*(6/25)

console.log("450 xic equivalem a", l + "l") //---> Resultado: "450 xic equivalem a 108l"


let unidadeUsuario

unidadeUsuario = prompt("Digite o valor para converter para litros. Somente NÚMEROS")
let litro = unidadeUsuario*(6/25)
console.log("Resultado:", litro + "l")


