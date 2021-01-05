//--------------------------------------------- EXERCÍCIO 01 ----------------------------------------------------------//

    /* a) Crie uma variável minhaString do tipo string e atribua um valor a ela. 
        Tente atribuir um número a esta variável. O que acontece? */

        const minhaString: string = "Olá!" // ---> Da erro, pois ele espera um valor tipo string.


    /*b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. 
        Como podemos fazer para que essa variável também aceite strings? */

        //const meuNumero: number = 2 // ---> Da erro, pois ele espera um valor tipo number.
        const meuNumero: number | string = 2 // ---> Mas se colocar desta forma ele aceita outros tipos.


    /* c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

        `nome`, que é uma string;

        `idade`, que é um número;

        `corFavorita`, que é uma string. */

        const pessoa: {nome: string, idade: number, corFavorita: string} = {
            nome: "Rafaela",
            idade: 31,
            corFavorita: "preto"
        }
    /* d) Crie mais três objetos, que também precisam ter apenas os campos definidos acima. 
        Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.
                              
            OBS: Resposta a baixo, junto com a letra e)

    /* e) Modifique o tipo de objeto para que possamos apenas escolher entre as cores do arco-íris. 
      Utilize um enum para isso. */

        enum coresArcoIris {
           LARANJA = "laranja",
           AMARELO = "amarelo",
           VERDE = "verde",
           AZUL = "azul",
           ANIL = "anil",
           VIOLETA = "violeta"
        }

        type person = {nome: string, idade: number, corFavorita: coresArcoIris}

        const adriano: person = {
            nome: "Adriano",
            idade: 30,
            corFavorita: coresArcoIris.AZUL
        }

        const rosane: person = {
            nome: "Rosane",
            idade: 30,
            corFavorita: coresArcoIris.VIOLETA
        }

        const jacira: person = {
            nome: "Adriano",
            idade: 30,
            corFavorita: coresArcoIris.LARANJA
        }



//--------------------------------------------- EXERCÍCIO 02 ----------------------------------------------------------//


    /* a) Quais são as entradas e saídas dessa função? 
    Copie a função para um arquivo .ts e faça a tipagem desses parâmetros */


        function obterEstatisticas(numeros: number[]) {

            const numerosOrdenados: number[] = numeros.sort(
                (a, b) => a - b
            )

            let soma = 0

            for (let num of numeros) {
                soma += num
            }

            const estatisticas = {
                maior: numerosOrdenados[numeros.length - 1],
                menor: numerosOrdenados[0],
                media: soma / numeros.length
            }

            return estatisticas
        }



    /* b) Que outras variáveis compõem essa função? Explicite a tipagem de todas elas */

    // As variáveis de numerosOrdenados (tipagem: number) e soma (tipegem: number)



    /* c) Crie um type para representar uma amostra de dados, isto é, um objeto com as chaves numeros e obterEstatisticas. 
        Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript: 
        
            const amostraDeIdades = {

		    numeros: [21, 18, 65, 44, 15, 18],

		    obterEstatisticas: (numeros) => {...}
        } */