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


// EXERCÍCIO 03 
// a) 
async function getActorById(id: string): Promise<any> {
    const result = await connection.raw(`
       SELECT * FROM Actor WHERE id = '${id}'
    `)

    return result[0]
}
getActorById("")


app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id
      const actor = await getActorById(id)
  
      res.status(200).send(actor)
    } catch (error) {
      res.status(400).send({
        message: error.message,
      });
    }
})



// EXERCÍCIO 03 
// b) 
async function countActorByGender(gender: string): Promise<any> {
    const result = await connection.raw(`
       SELECT COUNT(*) as count FROM Actor WHERE gender = '${gender}'
    `)
    console.log(result[0][0].count)
    return result[0][0].count
}
countActorByGender("female")


app.get('/actor', async (req:Request , res:Response) => {
    try {
       const gender = req.query.gender;
       const count = await countActorByGender(gender as string);
       res.status(200).send({
          quantity: count,
        })
    } catch (error) {
       res.status(400).send({
         message: error.message,
       });
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