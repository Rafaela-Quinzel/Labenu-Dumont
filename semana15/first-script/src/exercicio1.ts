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
            nome: "Jacira",
            idade: 30,
            corFavorita: coresArcoIris.LARANJA
        }



