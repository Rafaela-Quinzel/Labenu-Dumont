import { Request, Response } from 'express'
import { postInputDTO } from '../business/entities/post'
import { businessCreatePost, businessGetPostById } from '../business/postBusiness'
import { PostDatabase } from '../data/postDatabase'



const postDatabase: PostDatabase = new PostDatabase()

export const createPost = async (req: Request, res: Response) => {

  try {
  
    const { photo, description, type } = req.body


    const token: string = req.headers.authorization as string


    const postData: postInputDTO = {
      token, 
      photo,
      description, 
      type
    }

        
    await businessCreatePost(postData)
    
    res.status(200).send({message: "Post successfully created!"})
  
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
  