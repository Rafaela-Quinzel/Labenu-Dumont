import express, { Express, Request, Response } from 'express'
import cors from 'cors'

import { AddressInfo } from 'net'

import { Account, Transaction } from './types'
import { accounts } from './users'



const app: Express = express()


app.use(express.json())
app.use(cors())


// Criar novo usuário/ conta
app.post('/users/createNewUser', (req: Request, res: Response) => {

    let errorCode: number = 400
     
    try {

        // desestruturando o body para pegar estes dados.
        const { name, CPF, birthDateAsString } = req.body
        
        // Vai pegar a data ("01/01/2021") e nas barras vai quebrar a string e transformar e um array. 
        const [day, month, year] = birthDateAsString.split("/") 

        const birthDate: Date = new Date(`${year}-${month}-${day}`)
        
        // O new Date().getTime() vai passar o timestemp desse monento. O mesmo que utilizado a baixo.
        const ageInMilisseconds: number = Date.now() - birthDate.getTime()


        // Está pegando ageInMilisseconds e convertendo até chegar em anos
        const ageInYears: number = ageInMilisseconds / 1000 / 60 / 60 / 24 /365


        if(ageInYears < 18) {
            errorCode = 406
            throw new Error("Idade deve ser maior que 18 anos!")
        }

        accounts.push({
            name,
            CPF,
            birthDate,
            balance: 0,
            statement: []
        })


        if(!req.body.name) {
            errorCode = 422
            throw new Error("Nome não preenchido. Por favor, preencha um nome.")
        }

        if(!req.body.CPF) {
            errorCode = 422
            throw new Error("CPF inválido. Tente novamente.")
        }

        res.status(201).send("Conta criada com sucesso!")

    } catch(error) {
        res.status(errorCode).send(error.message)
    }

})


// Pegar todos os usuários/ contas cadastrados
app.get('/users/all', (req: Request, res: Response) => {

    let errorCode: number = 400

    try {

        if(!accounts.length) {
            res.statusCode = 404
            throw new Error("Nenhuma conta encontrada!")
        }

        res.status(200).send(accounts)

    } catch(error) {
        res.status(errorCode).send(error.message)
    }
    
})




const server = app.listen(process.env.PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
        console.log(`Failure upon starting server.`)
    }
})