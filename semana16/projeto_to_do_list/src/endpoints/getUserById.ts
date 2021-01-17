import express, { Router, Request, Response } from 'express'
import cors from 'cors'
import { getUserById } from '../queries/queries'


const router: Router = express.Router()
router.use(express.json())
router.use(cors())

router.get('/user/:id', (req: Request, res: Response) => {

  let errorCode = 400

  try {

    const id = req.params.id

    const result = getUserById(id)

    if (!result) {

      errorCode = 404

      throw new Error("Usuário não encontrado!")

    } else {

      res.status(200).send(result)

    }

  } catch (error) {

    res.status(errorCode).send(error.message || error.sqlMessage)
  }

})

export default router