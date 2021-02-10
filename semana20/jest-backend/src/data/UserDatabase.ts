import BaseDataBase from "../data/BaseDataBase"
import { User } from "../model/User"

export class UserDatabase extends BaseDataBase {

    protected tableName: string = "Users_Cookenu"

    private toModel(dbModel?: any): User | undefined {
        return (
            dbModel &&
            new User(
                dbModel.id,
                dbModel.name,
                dbModel.email,
                dbModel.password,
                dbModel.role
            )
        )
    }

    public async getUserById(id: string): Promise<User | undefined> {

        try {

            const result = await UserDatabase.connection.raw(`
               SELECT * from ${this.tableName} WHERE id = '${id}'
            `)

            return this.toModel(result[0][0])

        } catch (error) {

            throw new Error(error.sqlMessage || error.message)
        }
    }
}