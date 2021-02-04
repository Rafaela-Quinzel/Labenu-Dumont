import { PostDatabase } from "../data/postDatabase"
import { Post, POST_TYPES } from "./entities/post"
import { generateId } from "./services/idGenerator"



const postDatabase: PostDatabase = new PostDatabase()

export const businessCreatePost = async (input: any) => {


    if (!input.photo || !input.description) {

        throw new Error("Photo or description not informed!")
    }
 
 
    if (input.type !== POST_TYPES.NORMAL && input.type !== POST_TYPES.EVENT) {
 
        throw new Error(`Please fill in a type valid:"NORMAL" or "EVENT"`)
    }
 
    const id: string = generateId()
 
    const newPost = {
        id: id, 
        photo: input.photo, 
        description: input.description,
        type: input.type, 
        createdAt: input.createdAt, 
        authorId: input.authorId
    }  
 
    await postDatabase.insertPost(newPost)
 
}


export const businessGetPostById = async (id: string) => {

    const result = await postDatabase.selectPostById(id)

      if (!result) {

        throw new Error("Post not found!")

      } else {

        return result
    }
 

}
 
