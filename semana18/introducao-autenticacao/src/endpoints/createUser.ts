import { Request, Response } from 'express'
import { insertUser } from '../data/insertUser'
import { generate } from '../services/idGenerator'
import { generateToken } from '../services/authenticator'

export default async function createUser(req: Request, res: Response) {
    
    try {

        if (
            !req.body.email ||
            !req.body.password 
        ) {
          throw new Error('Preencha os campos "email" e "password"')
        }

        const id: string = generate()

        await insertUser(
            id,
            req.body.email,
            req.body.password
        );

        const token = generateToken(id)

        res
            .status(200)
            .send({message: "Usuário criado com sucesso!", token})

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}