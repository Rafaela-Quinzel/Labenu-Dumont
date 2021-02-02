import express, { Express } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import { createUser, editUser, getUserById } from './controller/userController'
import { addTaskResponsible, createTask, getAllTasksUser, getTaskById } from './controller/taskController'



const app: Express = express()
app.use(express.json())
app.use(cors())


app.post("/user/createUser", createUser)
app.post("/user/edit/:id", editUser)
app.get("/user/:id", getUserById)


app.post("/task/createTask", createTask)
app.post("/task/responsible", addTaskResponsible)
app.get("/task/:id", getTaskById)
app.get("/tasks", getAllTasksUser)    






const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo
       console.log(`Server is running in http://localhost:${address.port}`)
    } else {
       console.error(`Failure upon starting server.`)
    }
 })

 



