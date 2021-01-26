import { connection } from '../index'


export default async function selectUserByLogin (email: string): Promise<any>  {
    
    const result = await connection
      .select("*")
      .from("Users_aula50")
      .where({ email })

    return result[0]

} 