import express, { Router, Request, Response } from 'express'
import cors from 'cors'
import { connection } from '../connection/dataBaseConnection'

const router: Router = express()

router.use(express.json());
router.use(cors())


export default async function selectAllUsers():Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `)
 
    return result[0]
 }
