import * as datos from '../base_datos.js';
let base=datos;

//SUCURSAL

base.app.get("/sucursal", (req, res) => {
    const sql =" select * from sucursal";
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.post("/sucursal", (req, res) => {
   const sql =`insert into sucursal (nombre,direccion, telefono, email) values ("${req.body.name}", "${req.body.direccion}","${req.body.tlf}","${req.body.email}")`;
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
    console.log(req.body);
});

base.app.put("/sucursal", (req, res) => {
    const sql = `update sucursal set ${req.body.propiedad} = ? where id = ?`;
    base.con.query(sql, [req.body.nuevo_valor, req.body.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.delete("/sucursal", (req, res) => {
   const sql =`delete from sucursal where (id) = ("${req.body.id}")`;
   base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
    console.log(req.body);
});

export default base;
