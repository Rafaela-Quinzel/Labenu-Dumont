import { connection } from '../index'


export default async function selectUserById(id: string) {

  
    const result = await connection
        .select("*")
        .from("Users_aula50")
        .where({ id })

        return result[0]

} 