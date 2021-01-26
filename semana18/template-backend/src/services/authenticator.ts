import * as jwt from 'jsonwebtoken'



export function generateToken(id: string): string {


    const token: string = jwt.sign({id},
        process.env.JWT_KEY as string,
        { expiresIn: process.env.JWT_EXPIRE_TIME as string || "1d" })


    return token

}

export function getTokenData(token: string): AuthenticationData {
    const payLoad = jwt.verify(token, process.env.JWT_KEY as string)

    return payLoad as AuthenticationData
}


export type AuthenticationData = {
    id: string
} 