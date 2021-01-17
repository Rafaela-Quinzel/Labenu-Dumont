import express, { Express, Request, Response, Router } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import dotenv from 'dotenv'
import { v4 as uuidv4 } from 'uuid'
import { connection } from '../connections/dataBaseConnection'
import { connectToServer } from '../connections/severConnection'
import { createTask } from '../queries/queries'
import { Task } from '../types/task'


dotenv.config();

const router: Router = express.Router()
router.use(express.json())
router.use(cors())



const getAllUsers = async(): Promise<any> => {

   const result = await connection.raw(`
       SELECT * FROM Users;
   `)

    return result
 }
 
router.get("/user/all", async (req: Request, res: Response) => {
    try {

       const result = await getAllUsers()

       res.status(200).send(result);

    } catch (error) {

      res.status(400).send({
        message: error.message
      })
    }
})

 export default router