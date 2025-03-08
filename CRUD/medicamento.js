import * as datos from '../base_datos.js';
let base=datos;

//MEDICAMENTO
base.app.get("/medicamento", (req, res) => {
    const sql =" select * from medicamento";
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.post("/medicamento", (req, res) => {
   const sql =`insert into medicamento (nombre, principalComponente) values ("${req.body.nombre_medicamento}","${req.body.accion}")`;
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
    console.log(req.body);
});

base.app.put("/medicamento", (req, res) => {
    const sql = `update medicamento set ${req.body.propiedad} = ? where id = ?`;
    base.con.query(sql, [req.body.nuevo_valor, req.body.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.delete("/medicamento", (req, res) => {
   const sql =`delete from medicamento where (id) = ("${req.body.id}")`;
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
    console.log(req.body);
});

export default base;
