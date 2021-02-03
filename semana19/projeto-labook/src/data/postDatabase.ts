import { connection } from "./mysql/connection"
import { Post } from "../business/entities/post"
import { tablePosts } from "./mysql/tables"


export const insertPost = async(post: Post) => {

    await connection.insert({
        id: post.id,
        photo: post.photo,
        description: post.description,
        type: post.type,
        createdAt: post.createdAt,
        authorId: post.authorId
    }).into(tablePosts)
}


export const selectPostById = async(id: string) => {

    const result = await connection.raw(`
        SELECT * FROM ${tablePosts}
        WHERE id = "${id}";
    `)

    return result[0]
}