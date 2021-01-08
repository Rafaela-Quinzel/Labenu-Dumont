import express, { Request, Response } from 'express'
import cors from 'cors'

import { AddressInfo } from 'net'

import { user, extractAccount } from './users'



const app = express()


app.use(express.json())
app.use(cors())


app.post('/user', (req: Request, res: Response) => {

    let errorCode: number = 400
     

    try {

        if(!req.body.name) {
            errorCode = 422
            throw new Error("Nome não preenchido. Por favor, preencha um nome.")
        }

        if(!req.body.cpf) {
            errorCode = 422
            throw new Error("CPF inválido. Tente novamente.")
        }


        if(!req.body.birthDate) {
            errorCode = 422
            throw new Error("Data de nascimento inválida. Tente novamente.")
        }

        if(req.body.birthDate.year < 2003) {
            throw new Error("Só é possível realizar o cadastro de usuários maiores de 18 anos!")
        }

    } catch(error) {
        res.status(errorCode).send(error.message)
    }

})


app.get('/users', (req: Request, res: Response) => {
    const result = users
    res.status(200).send("result")
})




const server = app.listen(process.env.PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
        console.log(`Failure upon starting server.`)
    }
})