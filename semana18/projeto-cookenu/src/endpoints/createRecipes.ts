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


export default async function createRecipes(req: Request, res: Response) {

    try {

        const { title, description, cratedAt } = req.body

        if (!title) {

            throw new Error("Please fill in a title.")
        }
 
        if (!description) {

            throw new Error("Please fill in a description.")
        }
  
  
        const id: string = generate()

        const token = req.headers.authorization as string

        const authenticationData = getTokenData(token)

        const user_id = await selectUserById(authenticationData.id)

    
        const newRecipe: Recipes = {
            id,
            title,
            description,
            cratedAt,
            user_id
        }

        await insertRecipe(newRecipe)
 
 
        res
          .status(200)
          .send({message: "User created successfully!", token })
 
    } catch (error) {

       res.status(400).send({

          message: error.message || error.sqlMessage
       })
    }
}

