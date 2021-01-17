import express, { Express, Request, Response, Router } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import dotenv from 'dotenv'
import { connection } from '../connections/dataBaseConnection'
import { connectToServer } from '../connections/severConnection'


dotenv.config();
const router: Express = express();

router.use(express.json());
router.use(cors())






connectToServer()

 export default router;

