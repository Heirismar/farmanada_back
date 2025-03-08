import * as datos from '../base_datos.js';
let base=datos;

//LABORATORIO

base.app.get("/laboratorio", (req, res) => {
    const sql =" select * from laboratorio";
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.post("/laboratorio", (req, res) => {
   const sql =`insert into laboratorio (nombre,telefono,email, direccion) values ("${req.body.name_laboratorio}", "${req.body.tlf_laboratorio}","${req.body.email_laboratorio}","${req.body.direccion_laboratorio}")`;
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
    console.log(req.body);
});

base.app.put("/laboratorio", (req, res) => {
    const sql = `update laboratorio set ${req.body.propiedad_laboratorio} = ? where id = ?`;
    base.con.query(sql, [req.body.laboratorio_nuevo_valor, req.body.id_update_laboratorio], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.delete("/laboratorio", (req, res) => {
   const sql =`delete from laboratorio where (id) = ("${req.body.id_delete_laboratorio}")`;
   base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
    console.log(req.body);
});
export default base;

