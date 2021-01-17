import { connection } from '../connections/dataBaseConnection'
import { User, Task } from '../types/types'



export const createUser = async(user: User): Promise<any> => {

    try {

        await connection.insert({
            id: user.id,
            name: user.name,
            nickname: user.nickname,
            email: user.email
          })
          .into("Users");

        console.log("Usuário inserido com sucesso!")

    } catch (error) {

        console.log(error.sqlMessage || error.message)
    }
}

export const createTask = async(task: Task): Promise<void> => {

    try {

        await connection.insert({
            id: task.id,
            title: task.title,
            description: task.description,
            limit_date: task.limit_date,
            creator_user_id: task.creator_user_id
        })
        .into("Tasks")

    } catch (error) {

        console.log(error.sqlMessage || error.message)
    }
}



export const editUser = async (id: string, name: string, nickname: string) => {

    try {
        
        await connection('Users')
        .where('user_id', id)
        .update({
            name: name,
            nickname: nickname
        })

    } catch (error) {

        console.log(error.sqlMessage || error.message)
    }
} 


export const getUserById = async(id: string): Promise<any> => {

    try {

        const result = await connection.raw(`
            SELECT * FROM Users
            WHERE id = '${id}';
        `)

        return result[0]

    } catch (error) {

        console.log(error.sqlMessage || error.message)
    }

}


export const getTaskById = async(id: string): Promise<any> => {

    try{

        const result = await connection.raw(`
            SELECT * FROM Tasks
            WHERE id = '${id}';
        `)

        return result[0]

    }  catch (error) {

        console.log(error.sqlMessage || error.message)
    }

}

export const getAllUsers = async (): Promise<any> => {
    
    try {
    const result = await connection.raw(`
        SELECT id, nickname 
        FROM Users;
    `)
    
     return result[0]
     
    } catch (error) {

        console.log(error.sqlMessage || error.message)
    }
  }




