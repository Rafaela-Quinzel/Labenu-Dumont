import { PostDatabase } from "../data/postDatabase"
import { POST_TYPES } from "./entities/post"
import { AuthenticationData } from "./entities/user"
import { getTokenData } from "./services/authenticator"
import { generateId } from "./services/idGenerator"

const postDatabase: PostDatabase = new PostDatabase()

export class PostBusiness {


    businessCreatePost = async (input: any) => {


        if (!input.photo) {

            throw new Error("Photo not informed!")
        }

        if (!input.description) {

            throw new Error("Description not informed!")
        }
    
    
        if (input.type !== POST_TYPES.NORMAL && input.type !== POST_TYPES.EVENT) {
    
            throw new Error(`Please fill in a type valid:"normal" or "event"`)
        }
    

        const tokenData: AuthenticationData = getTokenData(input.token)

        const id: string = generateId()

        let today = Date.now()
        let dayjs = require('dayjs')
        today = dayjs(today, 'x').format('DD/MM/YYYY')

        const newPost = {
            id: id,
            photo: input.photo,
            description: input.description,
            type: input.type,
            created_at: input.today,
            author_id: tokenData.id
        }

        await postDatabase.insertPost(newPost)
    
    }


    businessGetPostById = async (id: string) => {

        const result = await postDatabase.selectPostById(id)

        if (!result) {

            throw new Error("Post not found!")

        } else {

            return result
        }
    

    }

}
 
