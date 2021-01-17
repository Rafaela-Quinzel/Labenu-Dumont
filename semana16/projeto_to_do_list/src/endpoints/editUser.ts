import express, { Router, Request, Response } from 'express'
import cors from 'cors'
import { editUser } from '../queries/queries'


const router: Router = express.Router()
router.use(express.json())
router.use(cors())

router.put('/user/edit/:id', (req: Request, res: Response) => {

    let errorCode = 400

    try {

        const id: number = Number(req.params.id)
        const { name, nickname } = req.body


        if (!name || !nickname) {
            errorCode = 422

            throw new Error("Por favor, preencha os campos corretamente.")

        } else {
           
            editUser(id, name, nickname)

            res.status(201).send("Usuário editado!")
        }


    } catch (error) {
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
})

export default router 