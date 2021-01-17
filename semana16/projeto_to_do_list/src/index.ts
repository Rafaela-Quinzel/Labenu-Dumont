import express, { Express, Request, Response } from 'express'
import createUser from './endpoints/createUser'
import createTask from './endpoints/createTask'
// import getAllUsers from './endpoints/getAllUsers'
import editUser from './endpoints/editUser'
import getTaskById from './endpoints/getTaskById'
import getUserById from './endpoints/getUserById'
import { connectToServer } from './connections/severConnection'
import { connection } from './connections/dataBaseConnection'
import { AddressInfo } from 'net'
import cors from 'cors'
// import teste from './endpoints/teste'
import endpoints from './endpoints/endpoints'



const app: Express = express();
app.use(express.json());
app.use(cors())

// app.use("/", teste)
app.use("/", endpoints)
// const getAllUsers = async(): Promise<any> => {
//     const result = await connection.raw(`
//        SELECT * FROM Users;
//     `)
//     return result[0]
//  }
 
//  app.get("/user/all", async (req: Request, res: Response) => {
//     try {
//        const result = await getAllUsers()
//        res.status(200).send(result);
//     } catch (err) {
//       res.status(400).send({
//         message: err.message
//       })
//     }
//  })

// app.use('/user',createUser)

// app.use('user/edit/:id',editUser)

// app.use('/task',createTask)

// app.use('/task/:id',getTaskById)

// app.use('user/:id',getUserById)

// app.use('/user/all',getAllUsers)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
 });



