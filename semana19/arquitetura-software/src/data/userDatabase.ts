import { connection } from './connection'
import { User } from '../business/entities/user'


export const insertUser = async (user: User) => {

    await connection.insert({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        role: user.role
    }).into('Users_Cookenu')
}


