import express, { Router, Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { v4 as uuidv4 } from 'uuid'
import { User, Task  } from '../types/types'
import { createUser, getUserById, editUser, createTask, getTaskById, 
    getAllUsers, getTaksCreatedUserId, searchUserByNickname, addResponsibleTask } from '../queries/queries'



const router: Router = express.Router()
router.use(express.json())
router.use(cors())

dotenv.config()

const { formatStringDate} = require('../utils/utils')


router.post('/user/createUser', async (req: Request, res: Response) => {

    try {
  
      const {name, nickname, email} = req.body
  
      const id = uuidv4()
  
      if (!name || !nickname || !email) {
  
        throw new Error("Nome, Nickname ou email não informados!")
  
      }
  
       const newUser: User = {id, name: name, nickname: nickname, email: email}
  
       await createUser(newUser)
   
       res.status(200).send("O usuário criado com sucesso!")
  
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
    
      const newTask: Task = {id, title: title, description: description, limit_date: await formatStringDate(limit_date), creator_user_id: creator_user_id, status: status}
      await createTask(newTask)
  
      res.status(200).send("Tarefa criada com sucesso!")
 
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


router.get("/users/all", async (req: Request, res: Response) => {

    let errorCode = 400

    try {
       
       const result = await getAllUsers()

       res.status(200).send({users: result})

    } catch (error) {

        res.status(errorCode).send(error.message || error.sqlMessage)
    }
})


router.get("/tasks", async (req: Request, res: Response) => {

    let errorCode = 400

    try {
       
        let errorCode: number = 400

        const user_id : string = req.query.creatorUserId as string

        if(!req.query.creatorUserId) {

            errorCode = 422

              throw new Error("Preencha o ID e tente novamente.")
        }
        
        const tasks = await getTaksCreatedUserId(user_id)

        if (tasks===undefined) {

            errorCode = 400

            throw new Error("ID não encontrado. Informe um ID válido.")

        }
        
        res.status(200).send({tasks})

    } catch (error) {

        res.status(errorCode).send(error.message || error.sqlMessage)
    }
})


router.get("/user", async (req: Request, res: Response) => {

    let errorCode: number = 400

    try {
        const result = await searchUserByNickname(req.query.nickname as string)

        if (!result) {
            errorCode = 422
            throw new Error("Query não enviada.")
        }
        res.status(200).send({users: result})

    } catch (error) {

        res.status(400).send(error.sqlMessage || error.message)
    }
})


router.post("/task/responsible", async (req: Request, res: Response) => {

    let errorCode: number = 400

    try {
        
        const result = {
            task_id: req.body.task_id,
            user_id: req.body.user_id
        }

       
       const keys = Object.keys(req.body)

       for (const key of keys) {

         if (req.body[key] == "")
         
           return res.status(400).send({ message: "Por gentileza preencha todos os campos corretamente!"})
       }

        await addResponsibleTask(result)

        res.status(200).send({ message:`A tarefa ${result.task_id} foi atribuída ao usuário ${result.user_id} com sucesso.`})

    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})




  
export default router
  
  
  
  