import { connection } from "./mysql/connection"
import { User } from "../business/entities/user"
import { tableUsers } from "./mysql/tablesNames"


export const insertUser = async(user: User) => {

    await connection.insert({
       id: user.id,
       name: user.name,
       email: user.email,
       password: user.password
    }).into(tableUsers)
}


export const selectUserByLogin = async(email: string) => {
    
    const result = await connection
        .select("*")
        .from(tableUsers)
        .where({ email })

        return result[0]
}


