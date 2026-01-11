import express, { Request, Response } from "express"
import cors from"cors"
const app=express()


// middlewares
app.use(cors());
app.use(express.json());


 app.get("/",(req:Request,res:Response)=>{
    res.status(200).send({message:" Medigo Server Is running"})
 })

export default app