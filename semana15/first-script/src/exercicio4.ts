//--------------------------------------------- EXERCÍCIO 04 ----------------------------------------------------------//


    /* a) Como você faria, já com a extensão instalada, para gerar um arquivo javascript 
      a partir do  arquivo typescript com o código abaixo? */

        type pokemon = {
            name: string,
            types: string,
            healthPoints: number
        }

        const pokemon1: pokemon = {
        name: "Charmander",
        types: "Fire",
        healthPoints: 28
        }

        const pokemon2: pokemon = {
        name: "Bulbasaur",
        types: "Grass/Poison",
        healthPoints: 31
        }

        const pokemon3: pokemon = {
        name: "Squirtle",
        types: "Water",
        healthPoints: 35
        } 

        //---> Resposta: Usaria o comando: tsc exercicio4.ts no terminal
    


    /* b) E se este arquivo estivesse dentro de uma pasta chamada src.
      O processo seria diferente? Se sim, descreva as diferenças. */
      

      //---> Resposta: Teríamos que entrar na pasta src através do terminal ou indicar o caminho do arquivo.



    /* c) Existe alguma maneira de transpilar múltilplos arquivos de uma vez só? Caso conheça, explique como fazer. */

      //---> Resposta: Utilizando o comando tsc no terminal é possível transpilar todos os arquivos .ts.



    /* d) Compare esse arquivo com o que criamos durante a aula (ele está disponível na área de configuração do projeto ali em cima).
      Leia as descrições sobre cada uma das propriedades. Alguma configuração que chamou sua atenção? 
      O que mudou em comparação com o arquivo criado pelos slides? */

      //---> Resposta:  a propriedade target está "target": "es5", mas utilizamos "target": "es6"
                       /* Advanced Options */
                     /*  "skipLibCheck": true,  -> Aparece está opção no meu projeto, não sei se tem algo a ver com a versão */ 

