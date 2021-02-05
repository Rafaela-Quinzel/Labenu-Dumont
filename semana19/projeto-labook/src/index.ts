import express, { Express } from "express"
import cors from "cors"
import { userRouter } from "./controller/routes/userRouter"
import { postRouter } from "./controller/routes/postRouter"
import { connectToServer } from "./data/connectionServer"



const app: Express = express()
app.use(express.json())
app.use(cors())

app.use('/users', userRouter)
app.use('/posts', postRouter) 


// connectToServer()

app.listen(3003, () => {
    console.log('Servidor rodando na porta 3003')
 })