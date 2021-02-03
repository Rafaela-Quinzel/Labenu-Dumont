import { Request, Response } from 'express'
import { AuthenticationData } from '../business/entities/user'
import { businessCreatePost, businessGetPostById } from '../business/postBusiness'
import { getTokenData } from '../business/services/authenticator'
import { selectPostById } from '../data/postDatabase'



export const createPost = async (req: Request, res: Response) => {

  try {
  
    const { photo, description, type } = req.body

    const token: string = req.headers.authorization as string

    const tokenData: AuthenticationData = getTokenData(token)
  
    let today = Date.now()
    let dayjs = require("dayjs")
    today = dayjs(today, "x").format("YYYY/MM/DD")

      
    const newPost = {
      photo,
      description,
      type,
      createdAt: today,
      authorId: tokenData.id
    }
  
    await businessCreatePost(newPost)
  
    res.status(200).send("Post successfully created!")
  
  } catch (error) {
  
    res.status(400).send(error.message)
  }
}


export const getPostById = async (req: Request, res: Response) => {

  try {

    const id = req.params.id 
    
    const result = await selectPostById(id)
    
    await businessGetPostById(result)
    
    res.status(200).send(result)
    
  } catch (error) {
    
    res.status(400).send(error.message)
    
  }
}
  