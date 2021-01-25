import { connection } from '../index'
import { User } from '../types/user'


const userTableName = "Users_aula50"

export const insertUser = async (user: User) => {
	await connection
	    .insert({
	      id: user.id,
	      email: user.email,
	      password: user.password,
	    })
	    .into(userTableName);
    }
