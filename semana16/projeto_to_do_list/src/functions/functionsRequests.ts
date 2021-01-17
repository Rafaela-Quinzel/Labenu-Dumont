import { connection } from '../connections/dataBaseConnection'
import { User } from '../types/users'
import { Task } from '../types/task'
import { idText } from 'typescript';



export const createUser = async(user: User): Promise<any> => {

    try {

        await connection.insert({
            id: user.id,
            name: user.name,
            nickname: user.nickname,
            email: user.email
          })
          .into("ToDoListUser");

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
        .into("ToDoListTask")

    } catch (error) {

        console.log(error.sqlMessage || error.message)
    }
}






export const editUser = async(user: User): Promise<void> => {

    try {

        await connection ("ToDoListUser")
        .update({
           name: user.name,
           nickname: user.nickname
        })
        .where("id")

    } catch (error) {

        console.log(error.sqlMessage || error.message)
    }
}


export const getUserById = async(id: string): Promise<any> => {

    const result = await connection.raw(`
        SELECT * FROM NOME_TABELA
        WHERE id = '${id}';
    `)

    return result[0]

}



export const getTaskById = async(id: string): Promise<any> => {

    const result = await connection.raw(`
        SELECT * FROM NOME_TABELA
        WHERE id = '${id}';
    `)

    return result[0]

}


