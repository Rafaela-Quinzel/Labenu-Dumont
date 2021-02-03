import { insertPost, selectPostById } from "../data/postDatabase"
import { Post, POST_TYPES } from "./entities/post"
import { generateId } from "./services/idGenerator"



export const businessCreatePost = async (post: Post) => {


    if (!post.photo || !post.description || !post.authorId) {

        throw new Error("Photo, description or id of author not informed!")
 
    }
 
 
    if (post.type !== POST_TYPES.NORMAL && post.type !== POST_TYPES.EVENT) {
 
        throw new Error(`Please fill in a type valid:"NORMAL" or "EVENT"`)
    }
 
    const id: string = generateId()
 
    const newPost: Post = {
        id, 
        photo: post.photo, 
        description: post.description,
        type: post.type, 
        createdAt: post.createdAt, 
        authorId: post.authorId
    }  
 
    await insertPost(newPost)
 
}


export const businessGetPostById = async (id: string) => {

    const result = await selectPostById(id)

      if (!result) {

        throw new Error("Post not found!")

      } else {

        return result
    }
 

}
 
