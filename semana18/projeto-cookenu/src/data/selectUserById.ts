import { connection } from '../index'


export default async function selectUserById(id: string): Promise<any> {

    const result = await connection.raw(`
        SELECT * 
        FROM Users_Cookenu
        WHERE id = "${id}";
    `)

    return result[0][0]

} 