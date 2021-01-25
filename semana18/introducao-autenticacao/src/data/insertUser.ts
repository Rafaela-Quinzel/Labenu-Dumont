import { connection } from '../index'
import { User } from '../types/user'
import { userTableName } from '../services/tablesDataBase'


export const insertUser = async (user: User) => {
	await connection
	    .insert({
	      id: user.id,
	      email: user.email,
	      password: user.password,
	    })
	    .into(userTableName);
    }
