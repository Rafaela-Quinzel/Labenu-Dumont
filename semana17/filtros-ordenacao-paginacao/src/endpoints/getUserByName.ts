import express, { Router, Request, Response } from 'express'
import cors from 'cors'
import filterUserByName from '../data/filterUserByName'
import { user } from '../types/types'



const router: Router = express()

router.use(express.json());
router.use(cors())


export const getUserByName = async (req:Request, res:Response) => {

   let errorCode = 400

   try {

      const name: string = req.params.name as string

      if(!name) {

         errorCode = 406

         throw new Error("Por favor, informe um nome!")

      } else {
           const users: user[] = await filterUserByName(name)

           if(!users.length) {

             errorCode = 404

             throw new Error("Não encontramos nunhum usuário com o nome informado!");
           }

      res.status(200).send(users)

      }
   } catch (error) {
       
      res.status(errorCode).send(error.message || error.sqlMessage)

   }
} 

 export default router