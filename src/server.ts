import { createServer } from "node:http";
import app from "./app";
import dotenv from "dotenv"

dotenv.config()
const port = process.env.port || 5000
const server=createServer(app)

server.listen(port,()=>{
    console.log("Server Is running 5000");
})
