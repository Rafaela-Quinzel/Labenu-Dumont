//------------------------------------ FUNÇÕES ----------------------------------------------------------------//
    
    // EXERCÍCIO 01: 
        /**Escreva uma função que reverte um texto.**

            Exemplo x = '32243'

            Saída esperada : '34223' 
        */
    
        function inverter() {
            let inverter = document.getElementsByName("txt");
            valor = inverter.item(0).value.toString().split("");
            normal = valor.reverse().join("")
            document.body.innerHTML += "<li>" + normal + "<br/>"
        }
        // 'texto aqui'.split('').reverse().join('')
    // FIM



    //EXERCÍCIO 02 :
        /**Escreva uma função javascript que checa se uma palavra é ou não um palindromo**

            Palindromo é uma palavra ou frase que tem exatamente as mesmas letras de trás para a frente, 
            como Arara ou subi no onibus.
        */

        function checkPalindrome(word) {
            let a = ""

            for(let b = word.length - 1; b >= 0; b--) {
                a = a + word[b]
            }

            if(a === word) {
                return 'Sim, é uma Palíndromo!'
            } else {
                return 'Não é um Palíndormo!'
            }

        }
        // console.log(checkPalindrome('arara')) //'Sim, é uma Palíndromo!'
        // console.log(checkPalindrome('casa')) //'Não é um Palíndormo!'
    // FIM



    //EXERCÍCIO 03 :
        /**Escreva uma função javascript que escreva todas as combinacoes de uma string.**

            Exemplo string : 'pão'

            Saída esperada : p,pã,pão,ã,ão,o
        */

        function combinations(current_string, actual_string, seen) {
            let result = []

            if (current_string.length === actual_string.length) {
                return [current_string];
            }
            actual_string.forEach(function(currentChar, index) {
            if (seen.indexOf(index) === -1) {
                result = [].concat.apply(result, combinations(current_string
                + currentChar, actual_string, seen.concat(index)));
            }
            });
            return result;
        }
        // console.log(combinations("", "pão".split(""), []));
    // FIM



    //EXERCÍCIO 04 :
        /**Escreva uma função javascript que retorna uma string com suas letras em ordem alfabetica.**

            Exemplo string : 'joão'

            Saída esperada : 'ãjoo'
        */

        function alphabeticalOrder(word){
            let result = []
            for(let i = 0; i < word.length; i++){
                let letters = word[i]
                result.push(letters)
            }

            return result.sort()
        }
        // console.log(alphabeticalOrder('joao'))
        // console.log(alphabeticalOrder('maria'))
    // FIM




    //EXERCÍCIO 05 :
        /**Escreva uma função javascript que recebe uma string e imprime todas as palavras com a letra inicial maiúscula**

            Exemplo string : 'fala meu peixe'

            Saída esperada : 'Fala Meu Peixe '
        */

        // Outra forma:
        // var result = "fala meu peixe";
        // result = result.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });

        // console.log(result);


        function firstLettersUppercase(text) {
            let loweredText = text.toLowerCase()
            let words = loweredText.split(" ")
            for (let a = 0; a < words.length; a++) {
                let w = words[a]
        
                let firstLetter = w[0]
        
                if( w.length > 2) { 
                    w = firstLetter.toUpperCase() + w.slice(1)
                } else {
                    w = firstLetter + w.slice(1)
                }
        
                words[a] = w
            }
            return words.join(" ")
        }
        // console.log (firstLettersUppercase("fala meu peixe"))
    // FIM



    // EXERCÍCIO 06 :
        /**Escreva uma função javascript que recebe uma string e imprime a maior palavra dessa string**

            Exemplo string : 'O Astrodev é malvado'

            Saída esperada : 'Astrodev'
        */


        // Outra forma:
        // const string = "O Astrodev é malvado";

        // const result = string
        //     .match(/\w+/g)
        //     .sort((a, b) => b.length - a.length)[0];
            
        // console.log(result);

      

        function biggestWord(string) {
            let arrayStr = string.split(" ")
            let bigger = 0
            let word = null

            arrayStr.forEach(function(str) {
                if (bigger < str.length) {
                    bigger = str.length
                    word = str
                }
            });
            return word
        }
        // console.log(biggestWord("O Astrodev é malvado"))
    // FIM




    // EXERCÍCIO 07 :
        /**Escreva uma função javascript que recebe uma string como parametro e conta o numero de vogais na string.**

            Exemplo string : 'Exemplo'

            Saída esperada : 3
       */

        
        function getVowels(string) {
            let total = string.match(/[aeiou]/gi)
            return total === null ? 0 : total.length
        }
        // console.log(getVowels("Exemplo"))
        // console.log(getVowels("otorrinolaringologista"))
    // FIM



    // EXERCÍCIO 08 :
        /**Escreva uma função javascript que recebe um array de números e retorna o segundo maior e o segundo menor, 
            respectivamente**

            Exemplo de array : [3, 2, 5, 1, 4]
            
            Saída esperada : 2,4
        */

        
        const numeros = [3, 2, 5, 1, 4]

        const verficarNumeros = () => {
       
            const max1 = Math.max(...numeros)
            const primeiroMaior = []
            primeiroMaior.push(max1)
        
            numeros.splice(2, 1)
        
            const max2 = Math.max(...numeros)
            const segundoMaior = []
            segundoMaior.push(max2)
            console.log(segundoMaior)
        
            const min1 = Math.min(...numeros)
            const primeiroMenor = []
            primeiroMenor.push(min1)
        
            numeros.splice(2, 1)
        
            const min2 = Math.min(...numeros)
            const segundoMenor = []
            segundoMenor.push(min2)
            console.log(segundoMenor) 
        
            return `O segundo maior número é ${segundoMaior} e o segundo menor número é ${segundoMenor}`
        }
      //console.log(verficarNumeros())
    // FIM




    // EXERCÍCIO 09 :
        /**Escreva uma função javascript para extrair caracteres unicos de uma string**

            Exemplo string : "thequickbrownfoxjumpsoverthelazydog"

            Saída esperada : "thequickbrownfxjmpsvlazydg"
       */
         

        function getCharacters (string) {

           let result = []
        
            for(let i = 0; i < string.length; i++) {
                let letters = string[i]
                result.push(letters)
            }
          
            return result.reduce((unico, item) => {
               return unico.includes(item) ? unico : [...unico, item]
            }, []);
        }
        // console.log(teste("thequickbrownfoxjumpsoverthelazydog").join(''))
    // FIM




    // EXERCÍCIO 10 :
        /**Escreva uma função javascript para pegar o numero de vezes que cada letra aparece numa string.**

            Exemplo string: "teste"

            Saida esperada: "2 t, 2e 1s"
       */
         
       
        function charCount(str, keepCase) {
            if(!keepCase) { 
                str = str.toLowerCase()
            }

            let obj = {}

            for(let i = 0; i < str.length; i++) {
                if(!obj[str[i]]) {
                    obj[str[i]] = 0
                }
                  obj[str[i]]++  
            }
            return obj
        }
        // console.log(charCount('Teste'))
        // console.log(charCount('teste'))
    // FIM

// FIM EXERCÍCIOS DE FUNÇÕES


//------------------------------------- LAÇOS -----------------------------------------------------------------//

// EXERCÍCIO 01 :
        /**Escreva um programa que receba um array de números e exiba o maior número.**

            Exemplo: [1, 3, 9, 5 , 2, 7]

            Saída: 9
       */
         
        function higherNumber(array) {

            const numbersArray = []

            for(let i = 0; i < array.length; i++) {
                let numbers = array[i]
                numbersArray.push(numbers)
            }

            const number = Math.max(...array)
                const larger = []
                larger.push(number)

            return larger
        }
        // console.log(higherNumber([1, 3, 9, 5 , 2, 7]))
    // FIM



    // EXERCÍCIO 02 :
        /**Escreva um programa que receba um array de strings e exiba a string mais longa.**

            Exemplo: ["Casa", "Elefante", "Espelho", "Internacional"]

            Saída: Internacional
       */
       
        function getLongerString(arrayStrings) {
            let lengthWord = 0
            let biggerWord = ""

            for (let i = 0; i < arrayStrings.length; i++) { 
                if (arrayStrings[i].length > lengthWord) {
                    lengthWord = arrayStrings[i].length
                    biggerWord = arrayStrings[i]
                }
            }

            return biggerWord
        }
        // console.log(getLongerString(["Casa", "Elefante", "Espelho", "Internacional"]))
    // FIM


   
    // EXERCÍCIO 03 :
        /**Escreva um programa que receba três números e os ordene do menor para o maior.**

            Exemplo: 3, 27, 12

            Saída: 3, 12, 27
       */
         
        function orderNumbers(arrayNumbers) {

            let order = arrayNumbers.sort(function(a,b) {
                return a - b
            })

            let orderly = []

            for (let i = 0; i < order.length; i++) {
                orderly += order[i] + ", "
            }

            return orderly
        }
        // console.log(orderNumbers([3, 27, 12]))
    // FIM




    // EXERCÍCIO 04 :
        /**Altere o programa anterior para que ele também exiba com um alert o maior valor**

            Exemplo: 3, 27, 12

            Saída: 3, 12, 27, com alerta imprimindo 27
       */
         
        function largerNumber(arrayNumbers) {

            let order = arrayNumbers.sort(function(a,b) {
                return a - b
            })

            let orderly = []

            let biggerNumber = 0

        
            for (let i = 0; i < order.length; i++) {
                  orderly += order[i] + ", " 
            }

            for (let i = 0; i < orderly.length; i++) {
                    element = arrayNumbers[i]

                if(biggerNumber < element) {
                    biggerNumber = element
                }  
            }

            // return  orderly + alert(`Números ordenados : ${orderly} \n  O maior número é: ${biggerNumber}`) && biggerNumber
        }
        const result = largerNumber([3, 27, 12])
        // console.log(`O maior número é: ${result}`)
    // FIM



    // EXERCÍCIO 05 :
        /**Escreva um laço que itere de 0 a 30. Para cada iteração, cheque se o número é par, ou se é divisível por 3. 
           Caso o número seja divisível por 2 e 3, imprima uma mensagem que aponte "o número é par e divisível por 3" para cada vez que a condição for atendida.
           Saída: "2 é par", "3 é divisível por 3", "4 é par", "6 é par e divisível por 3"
       */
         
        function divisionNumbers() {

            for (let i = 0; i < 30; i++) {
                if (((i % 2) === 0) && ((i % 3) === 0)) {
                    console.log ("O número " + i + " é Divisivel por 2 e 3");
                } else  if ((i % 2) == 0) {
                    console.log ("O número " + i + " é Divisivel por 2");
                } else if ((i % 3) == 0) {
                        console.log ("O número " + i + " é Divisivel por 3");
                }
            }

            return 
        }
        // console.log(divisionNumbers())
    // FIM



     // EXERCÍCIO 06 :
        /**Escreva um laço que itere de 0 a 30. Para cada iteração, cheque se o número é par, ou se é divisível por 3. 
           Caso o número seja divisível por 2 e 3, imprima uma mensagem que aponte "o número é par e divisível por 3" para cada vez que a condição for atendida.
           Saída: "2 é par", "3 é divisível por 3", "4 é par", "6 é par e divisível por 3"
       */
         
        function asterisksPrint() {

            for (let i = 0; i < 1; i++) {
                let line = ""
                for(let column = 0; column < 5; column++) {
                    line = line + "*"
                    // console.log( line)
                }
            }
            
        }
        // console.log(asterisksPrint())
    // FIM



    // EXERCÍCIO 07 :
        /**Escreva um código que, considerando os scores abaixo, consiga dar uma nota para os alunos.**

            Saída: 
            ["Soter: Nota C",
            "Paula: Bota C",
            "Caio: Nota B",
            "Amanda: Nota A",
            "Mateus: Nota C"]
       */
         
        function giveNotes() {

            

            let aluno = prompt('Nome do aluno:')
            let score = prompt('Score do aluno:')

            let result = aluno + score

            let nota = []
        
            for(let i = 0; i < 5; i++) {
                nota.push(result)
              
            if(score <= 30) {
                return `${aluno}: \n Nota E`
            } else if (score <= 40) {
                return `${aluno}: \n Nota D`
            } else if (score <= 60) {
                return `${aluno}: \n Nota C`
            } else if (score <= 80) {
                return `${aluno}: \n Nota B`
            } else {
                return `${aluno}: \n Nota A`
            }

        }
        }
        console.log(giveNotes())
    // FIM




