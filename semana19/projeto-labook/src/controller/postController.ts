import { Request, Response } from 'express'
import { Post, POST_TYPES } from '../business/entities/post'
import { AuthenticationData } from '../business/entities/user'
import { businessCreatePost, businessGetPostById } from '../business/postBusiness'
import { getTokenData } from '../business/services/authenticator'
import { PostDatabase } from '../data/postDatabase'
import { UserDatabase } from '../data/userDatabase'


const postDatabase: PostDatabase = new PostDatabase()
const userDatabase: UserDatabase = new UserDatabase()

export const createPost = async (req: Request, res: Response) => {

  try {
  
    const { photo, description, type } = req.body

    const token = req.headers.authorization as string

    const authenticationData = getTokenData(token)

    const authorId = await userDatabase.selectUserById(authenticationData.id)
          
 
    
    let today = Date.now()
    let dayjs = require("dayjs")
    today = dayjs(today, "x").format("YYYY/MM/DD")

      
    const postData = {
      photo: photo,
      description: description,
      type: type,
      createdAt: today,
      authorId: authorId
    }
  
    const tokenPost = await businessCreatePost(postData)
  
    res.status(200).send({message: "Post successfully created!", tokenPost})
  
  } catch (error) {
  
    res.status(400).send(error.message)
  }
}


export const getPostById = async (req: Request, res: Response) => {

  try {

    const id = req.params.id 
    
    const result = await postDatabase.selectPostById(id)
    
    await businessGetPostById(result)
    
    res.status(200).send(result)
    
  } catch (error) {
    
    res.status(400).send(error.message)
    
  }
}
  