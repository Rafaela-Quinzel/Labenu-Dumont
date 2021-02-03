import { Request, Response } from 'express'
import { loginInput } from '../business/entities/user'
import  { businessLogin, businessSignup }  from '../business/userBusiness'



export const signup = async (req: Request, res: Response) => {

    try {

        const { name, email, password } = req.body

        const newUser = {
            name: name,
            email: email,
            password: password
        }

        const token = await businessSignup(newUser)

        res.status(200).send({
            message: "User created successfully!", 
            token 
        })

    } catch (error) {

       res.status(400).send({

          message: error.message || error.sqlMessage
       })
    }
} 


export const login = async (req: Request, res: Response) => {
    
    try {

        const input: loginInput = {
            email: req.body.email,
            password: req.body.password
        }

        const token = await businessLogin(input)


        res.status(200).send({
            message: "Success", 
            token
        })

    } catch (error) {

        res.status(400).send({

            message: error.message || error.sqlMessage
        })
    }
} 