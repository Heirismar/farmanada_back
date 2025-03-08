import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mysql from "mysql2";

export const app = express();
app.use(cors());
app.use(bodyParser.json());

export let con=mysql.createConnection({
    host:"localhost",
    database:"farmanada",
    user:"root",
    password:""
});

con.connect((err)=>{
    if(err) throw err;
    console.log("conexion exitosa");
});


//Servidor en el puerto 7000
app.listen(7000, () => console.log("Servidor en http://localhost:7000"));

