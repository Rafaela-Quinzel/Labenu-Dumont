import { hash } from '../business/services/hashManager'
import { generate } from '../business/services/idGenerator'
import { generateToken } from '../business/services/authenticator'
import { User, USER_ROLES } from '../business/entities/user'
import  { insertUser }  from '../data/userDatabase'


export const businessSignup = async (input: any) => {


    if (!input.name) {

        throw new Error("Please fill in a name.")
    }

    if (!input.email || input.email.indexOf("@") === -1) {

        throw new Error("Invalid email format!")
    }


    if (!input.password || input.password.length < 6) {

        throw new Error("The password must contain more than six digits.")

    }

    if (input.role !== USER_ROLES.ADMIN && input.role !== USER_ROLES.NORMAL) {

        throw new Error(`"role" must be "NORMAL" or "ADMIN"`)
    }


    const id: string = generate()

    const cypherPassword: string = await hash(input.password)

    const newUser: User = {
        id,
        name: input.name,
        email: input.email,
        password: cypherPassword,
        role: input.role
    }

    await insertUser(newUser)

    const token = generateToken({
        id,
        role: input.role
    })

    return token
}