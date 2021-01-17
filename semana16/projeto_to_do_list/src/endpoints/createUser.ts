import express, { Request, Response, Router } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { v4 as uuidv4 } from 'uuid'
import { connection } from '../connections/dataBaseConnection'
import { connectToServer } from '../connections/severConnection'
import { createUser } from '../functions/functionsRequests'
import { User } from '../types/users'


dotenv.config();

const router: Router = express.Router()
router.use(express.json())
router.use(cors())


 connectToServer()

 export default router;



