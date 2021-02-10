import { UserDatabase } from "../data/UserDatabase"
import { CustomError } from "../erros/CustomError"
import { TokenGenerator } from "../services/tokenGenerator"
import { HashGenerator } from "../services/hashGenerator"
import { IdGenerator } from "../services/idGenerator"


export class UserBusiness {

    constructor(
        private idGenerator: IdGenerator,
        private hashGenerator: HashGenerator,
        private userDatabase: UserDatabase,
        private tokenGenerator: TokenGenerator
    ) { }

    public async getUserById(id: string) {
        try {

            const user = await this.userDatabase.getUserById(id)

            if (!user) {
                throw new Error("User not found")
            }

            return {
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                role: user.getRole()
            }

        } catch (error) {
            
            throw new CustomError(error.statusCode, error.message)
        }
    }
}
