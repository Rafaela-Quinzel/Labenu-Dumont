import { hash } from "bcryptjs"
import { insertUser, selectUserByLogin } from "../data/userDatabase"
import { User } from "./entities/user"
import { generateToken } from "./services/authenticator"
import { generateId } from "./services/idGenerator"



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

    const id: string = generateId()

    const cypherPassword = await hash(password)

    const newUser: User = {
        id,
        name: input.name,
        email: input.email,
        password: cypherPassword
    }

    await insertUser(newUser)

    const token = generateToken({ id })

    return token
} 


export const businessLogin = async (input: any) => {


    if (!input.email || input.email.indexOf("@") === -1) {

        throw new Error("Invalid email format!")
    }

    const user = await selectUserByLogin(input.email)

    if(!user) {

        throw new Error("User not found!")
    }


    if (!input.password || input.password.length < 6) {

        throw new Error("The password must contain more than six digits.")
    }


    const passwordIsCorrect: boolean = await compare(
        input.password,
        user.password
    )

    if (!passwordIsCorrect) {

        throw new Error("Incorrect password!")
    }

    const token = generateToken({
        id: user.id
    })


    return token

} 

