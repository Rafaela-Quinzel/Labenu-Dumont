import { Request, Response } from 'express'
import { generate } from '../services/idGenerator'
import { generateToken } from '../services/authenticator'
import { User } from '../types/user'
import { hash } from '../services/hashManager'
import { USER_ROLES } from '../types/user'
import  insertUser  from '../data/insertUser'
import { getTokenData } from '../services/authenticator'
import { Recipes } from '../types/recipes'
import insertRecipe from '../data/insertRecipe'
import selectUserById from '../data/selectUserById'
import { AuthenticationData} from '../types/authenticationData'


export default async function createRecipes(req: Request, res: Response) {

    try {

        const { title, description, cratedAt } = req.body

        if (!req.body.title) {

            throw new Error("Please fill in a title.")
        }
 
        if (!req.body.description) {

            throw new Error("Please fill in a description.")
        }
  
  
        const id: string = generate()

        const token = req.headers.authorization as string
        
        const tokenData: AuthenticationData = getTokenData(token)

        const user_id = tokenData.id

        console.log(tokenData)
       

        let today = Date.now()
        let dayjs = require('dayjs')
        today = dayjs(today, 'x').format('DD/MM/YYYY')



        const newRecipe: Recipes = {
            id,
            title,
            description,
            cratedAt: today,
            user_id
        }

        await insertRecipe(newRecipe)


        console.log(user_id)
 
        res
          .status(200)
          .send({message: "User created successfully!", token })
 
    } catch (error) {

       res.status(400).send({

          message: error.message || error.sqlMessage
       })
    }
}

