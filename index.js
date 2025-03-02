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

//MONODROGA
app.get("/monodroga", (req, res) => {
    const sql ="SELECT id, nombre FROM monodroga";
    con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

app.post("/monodroga", (req, res) => {
   const sql =`insert into monodroga (nombre) values ("${req.body.name}")`;
    con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
    console.log(req.body);
});

app.put("/monodroga", (req, res) => {
    const sql = `update monodroga set nombre = ? where id = ?`;
    con.query(sql, [req.body.nuevo_valor, req.body.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

app.delete("/monodroga", (req, res) => {
    const sql =`delete from monodroga where (id) = ("${req.body.id_delete}")`;
     con.query(sql, (err, result) => {
         if (err) return res.status(500).json({ error: err.message });
         res.json(result);
     });
     console.log(req.body);
 });

//MEDICAMENTO
app.get("/medicamento", (req, res) => {
    const sql =" select * from medicamento";
    con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

app.post("/medicamento", (req, res) => {
   const sql =`insert into medicamento (nombre, principalComponente) values ("${req.body.nombre_medicamento}","${req.body.accion}")`;
    con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
    console.log(req.body);
});

app.put("/medicamento", (req, res) => {
    const sql = `update medicamento set ${req.body.propiedad} = ? where id = ?`;
    con.query(sql, [req.body.nuevo_valor, req.body.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

app.delete("/medicamento", (req, res) => {
   const sql =`delete from medicamento where (id) = ("${req.body.id}")`;
    con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
    console.log(req.body);
});

//CARGO
app.get("/cargo", (req, res) => {
    const sql =" select * from cargo";
    con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

app.post("/cargo", (req, res) => {
   const sql =`insert into cargo (titulo) values ("${req.body.name}")`;
    con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
    console.log(req.body);
});

app.put("/cargo", (req, res) => {
    const sql = `update cargo set titulo = ? where id = ?`;
    con.query(sql, [req.body.nuevo_valor, req.body.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

app.delete("/cargo", (req, res) => {
   const sql =`delete from cargo where (id) = ("${req.body.id}")`;
    con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
    console.log(req.body);
});

//SUCURSAL
app.get("/sucursal", (req, res) => {
    const sql =" select * from sucursal";
    con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

app.post("/sucursal", (req, res) => {
   const sql =`insert into sucursal (nombre,direccion, telefono, email) values ("${req.body.name}", "${req.body.direccion}","${req.body.tlf}","${req.body.email}")`;
    con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
    console.log(req.body);
});

app.put("/sucursal", (req, res) => {
    const sql = `update sucursal set ${req.body.propiedad} = ? where id = ?`;
    con.query(sql, [req.body.nuevo_valor, req.body.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

app.delete("/sucursal", (req, res) => {
   const sql =`delete from sucursal where (id) = ("${req.body.id}")`;
    con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
    console.log(req.body);
});

//MEDICAMENTO_MONODROGA
app.get("/medicamento_monodroga", (req, res) => {
    const sql =" SELECT medicamento_monodroga.id as id, medicamento.nombre as medicamento, monodroga.nombre as monodroga FROM ((medicamento_monodroga INNER JOIN medicamento ON medicamento_monodroga.id_Medicamento=medicamento.id) INNER JOIN monodroga ON medicamento_monodroga.id_Monodroga=monodroga.id) ORDER BY id";
    con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

app.post("/medicamento_monodroga", (req, res) => {
    const sql =`insert into medicamento_monodroga (id_Monodroga,id_Medicamento) values ("${req.body.monodroga}","${req.body.medicamento}")`;
    con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

//Servidor en el puerto 3000
app.listen(7000, () => console.log("Servidor en http://localhost:7000"));

