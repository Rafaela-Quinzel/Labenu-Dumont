import express, { Request, Response, Router } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { v4 as uuidv4 } from 'uuid'
import { createUser } from '../queries/queries'
import { User } from '../types/users'


dotenv.config()

const router: Router = express.Router()
router.use(express.json())
router.use(cors())

router.post('/user', async (req: Request, res: Response) => {

  try {

    const {name, nickname, email} = req.body

    const id = uuidv4()

    if (!name || !nickname || !email) {

      throw new Error("Nome, Nickname ou email não informados!")

    }

     const newUser: User = {name: name, nickname: nickname, email: email}

     const result = await createUser(newUser)
 
     res.status(200).send("Success" + result)

   } catch (error) {

     res.status(400).send(error.message)
     
   }
 })

 export default router;



