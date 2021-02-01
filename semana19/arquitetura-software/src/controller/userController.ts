import { Request, Response } from 'express'
import  businessSignup  from '../business/userBusiness'


export const signup = async (req: Request, res: Response) => {

    try {

        const { name, email, password, role } = req.body

        const newUser = {
            name: name,
            email: email,
            password: password,
            role
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