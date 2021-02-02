import { Request, Response } from 'express'
import { getTokenData } from '../business/services/authenticator'
import { businessCreateUser, businessGetUserById } from '../business/userBusiness'

export const createUser = async (req: Request, res: Response) => {

    try {
    
        const {name, nickname, email} = req.body

        const newUser = {
            name: name, 
            nickname: nickname, 
            email: email
        }

        const token = await businessCreateUser(newUser)
    
        res.status(201)
           .send({
            message: "The user successfully created!",
            token
         })

    } catch (error) {

        res.status(400).send(error.message)

    }
}


export const editUser = async (req: Request, res: Response) => {

    try {

        const { name, nickname } = req.body

        const newUser = {
            name: name, 
            nickname: nickname
        }
    
        const token = await businessCreateUser(newUser)

        res.status(201)
           .send({
               message: "User edited successfully!", 
               token
            })
        
    } catch (error) {

        res.status(400).send(error.message || error.sqlMessage)
    }
}


export const getUserById = async (req: Request, res: Response) => {

    try {

      const verifiedToken = getTokenData(req.headers.authorization as string)

      const id = verifiedToken.id

      
      const result = await businessGetUserById(id)

      res.status(200).send(result)

    } catch (error) {

       res.status(400).send({message: error.message})
    }
}