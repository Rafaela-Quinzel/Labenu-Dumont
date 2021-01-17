import express, { Request, Response, Router } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { v4 as uuidv4 } from 'uuid'
import { createTask } from '../queries/queries'
import { Task } from '../types/task'


dotenv.config();

const router: Router = express.Router()
router.use(express.json())
router.use(cors())

router.post('/task', async (req: Request, res: Response) => {

   try {

     if (!req.body.title || !req.body.description || !req.body.limit_date || !req.body.creator_user_id || !req.body.status) {
       
      throw new Error("Título, descrição, data limite, status ou id do criador não informados!")

     }

     const {title, description, limit_date, creator_user_id, status} = req.body

     const id = uuidv4()
   
     const newTask: Task = {title: title, description: description, limit_date: limit_date, creator_user_id: creator_user_id, status: status}
     const result = await createTask(newTask)
 
     res.status(200).send("Success" + result)

   } catch (error) {

     res.status(400).send(error.message)
   }
 })

 export default router;

