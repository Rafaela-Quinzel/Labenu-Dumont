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
   
    app.get("/user", (req: Request, res: Response) => {
        let errorCode: number = 400

        try {
            const nome: string = req.query.name as string

            if(!nome) {
                errorCode = 422
                throw new Error("Nome inválido! Por favor preencha um nome corretamente")
            }

            const myUser = users.find(((u: user) => u.name.toLocaleLowerCase() === nome.toLocaleLowerCase()))
            if (!myUser) {
                errorCode = 404
                throw new Error("Usuário não encontrado!")
            }

            const result = myUser
            res.status(200).send(result)

        } catch(error) {
            res.send(errorCode).send(error.message)
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
  
