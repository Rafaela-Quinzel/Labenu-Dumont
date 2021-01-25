import { connection } from '../index'

const userTableName = "Users_aula50"

export const insertUser = async (
	id: string, 
	email: string, 
    password: string
) => {
	await connection
	    .insert({
	      id,
	      email,
	      password,
	    })
	    .into(userTableName);
    }
