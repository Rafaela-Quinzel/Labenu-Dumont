//------------------------------------ FUNÇÕES ----------------------------------------------------------------//
    
    // EXERCÍCIO 01: 
        /**Escreva uma função que reverte um texto.**

            Exemplo x = '32243'

            Saída esperada : '34223' 
        */
    
        function inverter() {
            var inverter = document.getElementsByName("txt");
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

        const number = Math.max(...array)
            const larger = []
            larger.push(number)
        
        return larger
    }
    console.log(higherNumber([1, 3, 9, 5 , 2, 7]))
// FIM

