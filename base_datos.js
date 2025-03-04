const express = require("express");
let mysql=require('mysql2');
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let con=mysql.createConnection({
    host:"localhost",
    database:"farmanada",
    user:"root",
    password:""
});

con.connect((err)=>{
    if(err) throw err;
    console.log("conexion exitosa");
});


// const sql="select * from monodroga";

// con.query(sql,(err,result)=>{
//     if(err) throw err;
//     console.log(result);
// });






//Servidor en el puerto 3000
app.listen(7000, () => console.log("Servidor en http://localhost:7000"));
module.exports={app,con};
console.log(module);