import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import knex from 'knex'
import Knex from 'knex'
import dotenv from 'dotenv'
import { connection } from './connections/dataBaseConnection'
import { connectToServer } from './connections/severConnection'
import createUser from './endpoints/createUser'
import createTask from './endpoints/createTask'



const app: Express = express();


app.use('/user',createUser)

app.use('/task', createTask)



