import express, { Router, Request, Response } from 'express'
import cors from 'cors'
import { createUser, getUserById, editUser, createTask, getTaskById} from '../queries/queries'
import dotenv from 'dotenv'
import { v4 as uuidv4 } from 'uuid'
import { Status, User, Task  } from '../types/types'


const router: Router = express.Router()
router.use(express.json())
router.use(cors())

dotenv.config()


router.post('/user/createUser', async (req: Request, res: Response) => {

    try {
  
      const {name, nickname, email} = req.body
  
      const id = uuidv4()
  
      if (!name || !nickname || !email) {
  
        throw new Error("Nome, Nickname ou email não informados!")
  
      }
  
       const newUser: User = {id, name: name, nickname: nickname, email: email}
  
       const result = await createUser(newUser)
   
       res.status(200).send("O usuário criado com sucesso!" + result)
  
     } catch (error) {
  
       res.status(400).send(error.message)
       
     }
   })


router.post('/task/createTask', async (req: Request, res: Response) => {

    try {
 
      if (!req.body.title || !req.body.description || !req.body.limit_date || !req.body.creator_user_id || !req.body.status) {
        
       throw new Error("Título, descrição, data limite, status ou id do criador não informados!")
 
      }
 
      const {title, description, limit_date, creator_user_id, status} = req.body
 
      const id = uuidv4()
    
      const newTask: Task = {id, title: title, description: description, limit_date: limit_date, creator_user_id: creator_user_id, status: status}
      const result = await createTask(newTask)
  
      res.status(200).send("Success" + result)
 
    } catch (error) {
 
      res.status(400).send(error.message)
    }
})


router.put('/user/edit/:id', async (req: Request, res: Response) => {

    let errorCode = 400

    try {

        const id: string = req.params.id
        const { name, nickname } = req.body


        if (!name || !nickname) {
            errorCode = 422

            throw new Error("Por favor, preencha os campos corretamente.")

        } else {
           
            await editUser(id, name, nickname)

            res.status(201).send("Usuário editado com sucesso!")
        }


    } catch (error) {
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
})


router.get('/user/:id', async (req: Request, res: Response) => {

    let errorCode: number = 400

   try {

      const id = req.params.id

      if(!req.params.id) {

         errorCode = 422

         throw new Error("Preencha o ID e tente novamente.")
      }

      const result = await getUserById(id)

      res.status(200).send(result)

   } catch (error) {

     res.status(400).send({message: error.message})
   }
})


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



  
export default router;
  
  
  
  