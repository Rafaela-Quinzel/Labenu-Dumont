import { connection } from '../connections/dataBaseConnection'
import { User } from '../types/users'
import { Task } from '../types/task'



export const createTask = async(task: Task): Promise<void> => {

    try {

        await connection.insert({
            taskId: task.taskId,
            title: task.title,
            description: task.description,
            limitDate: task.limitDate,
            status: task.status,
            creatorUserId: task.creatorUserId,
            creatorUserNickname: task.creatorUserNickname
        })

    } catch (error) {
        console.log(error.sqlMessage || error.message)
    }
}


export const createUser = async(user: User): Promise<void> => {

    try {

        await connection.insert({
           id: user.id,
           name: user.name,
           nickname: user.nickname,
           email: user.nickname
        })

    } catch (error) {
        console.log(error.sqlMessage || error.message)
    }
}



export const editUser = async(user: User): Promise<void> => {

    try {

        await connection.insert({
           name: user.name,
           nickname: user.nickname
        })

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


