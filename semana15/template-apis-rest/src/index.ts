//importando express com Request e Response e cors
import express, {Request, Response} from 'express';
import cors from 'cors';

//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

type user = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}


let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
]

//----------------------------------- EXERCÍCIO 01 -----------------------------------------------------//

 /* Vamos começar fazendo um endpoint que busque todos os usuários de uma lista. */

    /* a) Qual método HTTP você deve utilizar para isso?
    
        R: Devemos utilizar o método GET, que vai retornar toda a lista de usuários.

    */

    /* b) Vamos começar fazendo um endpoint que busque todos os usuários de uma lista. 
    
       R: A entidade que está sendo manipulada é "user".
    
    */

    app.get("/users", (req: Request, res: Response) => {
        const result = users.map(user => ({
            id: user.id,
            name: user.name
        }))
    
        res
            .status(200)
            .send(result)
    })


//----------------------------------- EXERCÍCIO 02 -----------------------------------------------------//

 /*  Agora, vamos criar um novo endpoint, que busque todos os usuários que tenham um type específico, recebendo um type por vez.
   Após isso, responda:                                                                                                         */

    /* a)  Como você passou os parâmetros de type para a requisição? Por quê?
    
        R: Através de Query, pois possibilita ampliar a busca a mais tipos se necessário.

    */

    /* b)  Você consegue pensar em um jeito de garantir que apenas types válidos sejam utilizados? 
    
       R: Criando uma lista enum de tipos válidos e atribuindo a mesma no type user
    
    */

    app.get('/users/searchByType', (req: Request, res: Response) => {
        let errorCode: number = 400;

        try {
            if (!req.query.type) {
                errorCode = 400;
                throw new Error("Tipo não definido. Preencha algum tipo.")
            }

            if (req.query.type !== "ADMIN" && req.query.type !== "NORMAL") {
                errorCode = 422;
                throw new Error("Tipo inválido. Preencha um tipo existente.");
            }

            const result = users.filter(
                user => user.type === req.query.type
            )

            if (result.length === 0) {
                errorCode = 404;
                throw new Error("Usuários não encontrados!")
            }

            res
                .status(200)
                .send(result)

        } catch (error) {
            res.status(errorCode).send({message: error.message});
        }
    })


//----------------------------------- EXERCÍCIO 03 -----------------------------------------------------//

  /*   Vamos agora praticar o uso de buscas mais variáveis.
    Faça agora um endpoint de busca que encontre um usuário por nome.                                                                                                         */

    /* a)  Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?
    
        R: O envio é através de Query.

    */

    /* b)  Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado. */


    app.get('/users/searchByName', (req: Request, res: Response) => {
        let errorCode: number = 400;

        try {
            if (!req.query.name) {
                errorCode = 400;
                throw new Error("Nome não definido! Por favor, preencha algum nome.")
            }

            const result = users.filter(
                user => user.name.toLocaleLowerCase().includes(req.query.name as string)
            )

            if (result.length === 0) {
                errorCode = 404;
                throw new Error("Usuário não encontrado!")
            }

            res
                .status(200)
                .send(result)

        } catch (error) {
            res.status(errorCode).send({message: error.message});
        }
    })



//----------------------------------- EXERCÍCIO 04 -----------------------------------------------------//

  /*   Crie um endpoint que use o método POST para adicionar um item ao nosso conjunto de usuários.                                                                                                         */

    /* a)  Mude o método do endpoint para PUT. O que mudou?
    
        R: A requesição continuou funcionando.

    */

    /* b)  Você considera o método PUT apropriado para esta transação? Por quê? 
    
        R: Acredito que o método PUT não seria apropriado, pois ele é mais utilizado para atualizar os dados existentes.

    */

    // app.put("/user", (req: Request, res: Response) => {
    app.post("/users", (req: Request, res: Response) => {

        let errorCode: number = 400
    
        try {
            const reqBody: user = {
            id: new Date().getDate(), // ou id: Date.now() para retornar um número aleatório 
            name: req.body.name,
            email: req.body.email,
            type: req.body.type,
            age: req.body.age
            }
    
            if(!reqBody.name || !reqBody.email || !reqBody.type || !reqBody.age) {
                errorCode = 422
                throw new Error("Algum campo está inválido. Preencha corretamente")
            }
    
            users.push(reqBody)
            res.status(200).send("Usuário inserido com sucesso!")
    
        } catch(error) {
            res.status(errorCode).send({message: error.message})
    
        }
    
    })


//----------------------------------- EXERCÍCIO 05 -----------------------------------------------------//

    /*   Vamos alterar nosso último usuário. Crie um endpoint com o método PUT para alterar o nome do nosso usuário recém criado. 
       Adicione em seu nome o sufixo -ALTERADO.  
    */

        app.put("/users/:id", (req: Request, res: Response) => {

            let errorCode: number = 400
            try {
                const requestBody = {
                    name: req.body.name
                }
                const lastUserIndex = users.length - 1
                users[lastUserIndex].name = `${requestBody.name}-ALTERADO`
                res.status(200).send(`Usuário alterado!`)
            } catch (error) {
                res.status(errorCode).send(error.message)
            }

        })


//----------------------------------- EXERCÍCIO 06 -----------------------------------------------------//

    /*  Essa não! Alteramos um dado por engano. Vamos realterar nosso último usuário. 
     Crie um endpoint com o método PATCH para alterar mais uma vez o nome do nosso usuário recém alterado. 
     Adicione em seu nome o sufixo -REALTERADO.  
    */

        app.patch('/users/:id', (req: Request, res: Response) => {

            let errorCode: number = 400

            try {
                const requestBody = {
                    name: req.body.name
                }
                const lastUserIndex = users.length - 1
                users[lastUserIndex].name = `${requestBody.name}-REALTERADO`
                res.status(200).send(`Usuário realterado!`)
            } catch (error) {
                res.status(errorCode).send(error.message)
            }
        })



//----------------------------------- EXERCÍCIO 07 -----------------------------------------------------//

    /*  Essa não! Alteramos um dado por engano. Vamos realterar nosso último usuário. 
     Crie um endpoint com o método PATCH para alterar mais uma vez o nome do nosso usuário recém alterado. 
     Adicione em seu nome o sufixo -REALTERADO.  
    */

        app.delete('/users/deleteUser/:id', (req: Request, res: Response) => {

            let errorCode: number = 400

            try {
                const lastUserIndex = users.length - 1

                users.splice(lastUserIndex)

                res.status(200).send(`Usuário deletado!`)

            } catch (error) {
                res.status(errorCode).send(error.message)
            }
        })


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
  
