import express, { Router, Request, Response } from 'express'
import cors from 'cors'
import { getTaskById } from '../queries/queries'


const router: Router = express.Router()
router.use(express.json())
router.use(cors())


router.get('/task/:id', async (req: Request, res: Response) => {

   let errorCode = 400

   try {

     const id = req.params.id 

     const result = await getTaskById(id)

     if (!result) {

       errorCode = 404

       throw new Error("Tarefa não encontrada!")

     } else {

       res.status(200).send(result)
     }

   } catch (error) {

     res.status(errorCode).send(error.message || error.sqlMessage)
   }
})

export default router 