/**************************** IMPORTS ******************************/

import express, { Express, Request, Response } from "express"
import cors from "cors"
import knex from "knex"
import dotenv from "dotenv"
import * as jwt from "jsonwebtoken"
import * as bcrypt from "bcryptjs"

import Knex from "knex"

/**************************** CONFIG ******************************/


const app: Express = express()
app.use(express.json())
app.use(cors())



/**************************** ENDPOINTS ******************************/

// app.post('/users/signup', )
// app.post('/users/login', ) 
//app.post('/posts/create',) 
//app.get('/posts/:id', ) 

/**************************** SERVER INIT ******************************/

app.listen(3003, () => {
   console.log("Server running on port 3003")
})