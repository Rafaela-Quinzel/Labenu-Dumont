import { BaseDatabase } from "./mysql/BaseDataBase"
import { Post } from "../business/entities/post"
import { tablePosts } from "./mysql/tablesNames"

export class PostDatabase extends BaseDatabase{

    insertPost = async(post: Post) => {

        await BaseDatabase.connection.insert({
            id: post.id,
            photo: post.photo,
            description: post.description,
            type: post.type,
            createdAt: post.createdAt,
            authorId: post.authorId
        }).into(tablePosts)
    }


    selectPostById = async(id: string) => {

        const result = await BaseDatabase.connection.raw(`
            SELECT * FROM ${tablePosts}
            WHERE id = "${id}";
        `)

        return result[0]
    }

}