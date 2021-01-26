import * as jwt from 'jsonwebtoken'
import { AuthenticationData } from '../types/authenticationData'
import { USER_ROLES } from '../types/user'



export function generateToken(input: AuthenticationData): string {


    const token: string = jwt.sign({ id: input, role: input.role },
        process.env.JWT_KEY as string,
        { expiresIn: process.env.JWT_EXPIRE_TIME as string || "1d" })


    return token

}

export function getTokenData(token: string): AuthenticationData {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as AuthenticationData

    return {
        id: payload.id,
        role: payload.role
     }
}


