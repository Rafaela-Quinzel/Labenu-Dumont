import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import knex from "knex";
import Knex from "knex"; // tipo
import dotenv from "dotenv";


dotenv.config();
const app: Express = express();

app.use(express.json());
app.use(cors())



// conexão com o banco utilizando knex e dotenv:
const connection: Knex = knex({
    client: "mysql",
    connection: {
       host: process.env.DB_HOST,
       port: 3306,
       user: process.env.DB_USER,
       password: process.env.DB_PASSWORD,
       database: process.env.DB_NAME
    }
 })



// EXERCÍCIO 05
const addNewMovie = async (
    id: string,
    title: string,
    synopsis: string,
    release_date: Date,
    rating: number,
    playing_limit_date: Date
  ): Promise<any> => {
    try {
      await connection
        .insert({
          id: id, 
          title: title, 
          synopsis: synopsis, 
          release_date: release_date, 
          rating: rating, 
          playing_limit_date: playing_limit_date
        })
        .into("Movies")
    } catch (error) {
      throw new Error(error)
    }
  }
  
app.post('/movie/new', async (req: Request, res: Response) => {
    try {
      const {id, title, synopsis, release_date, rating, playing_limit_date} = req.body
      addNewMovie(id, title, synopsis, release_date, Number(rating), playing_limit_date)
  
      res.status(200).send("Filme Cadastrado!")
    } catch (error) {
      res.status(400).send(error.message)
    }
})


// EXERCÍCIO 06
const getAllMovies = async (): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Movies LIMIT 15; 
    `)
  
    return result[0]
}
  
app.get('/movies/all', async (req: Request, res: Response) => {
    try {
      const result = await getAllMovies()
  
      res.status(200).send(result)
    } catch (error) {
      res.status(400).send(error.message)
    }
  })










 const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
 });