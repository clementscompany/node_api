import conn from "../database/conn.js";
import app from "./app.js";
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;


conn.connect((error)=>{
    if (error) {
        console.log("Erro na conexao:" + error);
    }  
    app.listen(port, ()=>{
        console.log({
            servidor:port,
            id:conn.threadId
        });
    })
})



