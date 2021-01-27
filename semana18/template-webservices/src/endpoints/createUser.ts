import { Request, Response } from 'express'
import { generateId } from '../services/idGenerator'
import { generateToken } from '../services/authenticator'
import { User } from '../types/user'
import { hash } from '../services/hashManager'
import { USER_ROLES } from '../types/user'
import  insertUser  from '../data/insertUser'


export default async function createUser(req: Request, res: Response): Promise<void> {

    try {

        const { email, password, role } = req.body
 
        if (!email || email.indexOf("@") === -1) {

            throw new Error("E-mail inválido!")
        }
  
  
        if (!password || password.length < 6) {
  
            throw new Error("A senha deve conter mais de seis digitos!")

        }

        if (role !== USER_ROLES.ADMIN && role !== USER_ROLES.NORMAL) {
            throw new Error(`"role" deve ser "NORMAL" ou "ADMIN"`)
         }
   
 
        const id: string = generateId()

        const cypherPassword: string = await hash(password)
 
        const newUser: User = {
            id,
            email,
            password: cypherPassword,
            role
        }

        await insertUser(newUser)
 
        const token = generateToken({
            id,
            role: req.body.role
         })
 
        res
          .status(200)
          .send({message: "Usuário criado com sucesso!", token })
 
    } catch (error) {

       res.status(400).send({

          message: error.message || error.sqlMessage
       })
    }
}

