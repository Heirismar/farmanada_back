import * as datos from '../base_datos.js';
let base=datos;

//ACCION TERAPEUTICA
base.app.get("/accion_terapeutica", (req, res) => {
    const sql =" select * from accion_terapeutica";
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.post("/accion_terapeutica", (req, res) => {
   const sql =`insert into accion_terapeutica (accion_terap) values ("${req.body.accion_terap}")`;
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
    console.log(req.body);
});

base.app.put("/accion_terapeutica", (req, res) => {
    const sql = `update accion_terapeutica set accion_terap = ? where id = ?`;
    base.con.query(sql, [req.body.accion_terap_nuevo_valor, req.body.id_update_accion], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.delete("/accion_terapeutica", (req, res) => {
   const sql =`delete from accion_terapeutica where (id) = ("${req.body.id_delete_accion}")`;
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
    console.log(req.body);
});

export default base;
