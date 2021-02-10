import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { UserDatabase } from "../data/UserDatabase"
import { HashGenerator } from "../services/hashGenerator"
import { IdGenerator } from "../services/idGenerator"
import { TokenGenerator } from "../services/tokenGenerator"

const userBusiness =
    new UserBusiness(new IdGenerator(),
        new HashGenerator(),
        new UserDatabase(),
        new TokenGenerator()

    )

export class UserController {

    public async getUserById(req: Request, res: Response) {

        try {

            const { id } = req.params

            const result = await userBusiness.getUserById(id)

            res.status(200).send(result)

        } catch (error) {

            const { statusCode, message } = error

            res.status(statusCode || 400).send({ message })
        }
    }
}



