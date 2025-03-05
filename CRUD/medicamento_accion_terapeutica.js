let base=require('../base_datos');

//MEDICAMENTO_MONODROGA
base.app.get("/medicamento_accionterapeutica", (req, res) => {
    const sql =" SELECT medicamento_accionterapeutica.id as id, medicamento.nombre as medicamento, accion_terapeutica.accion_terap as accion_terapeutica FROM ((medicamento_accionterapeutica INNER JOIN medicamento ON medicamento_accionterapeutica.id_Medicamento=medicamento.id) INNER JOIN accion_terapeutica ON medicamento_accionterapeutica.id_AccionTerap=accion_terapeutica.id) ORDER BY id";
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.post("/medicamento_accionterapeutica", (req, res) => {
    const sql =`insert into medicamento_accionterapeutica (id_AccionTerap,id_Medicamento) values ("${req.body.accion_terapeutica_id_accion_t}","${req.body.acciom_terapeutica_medicamento}")`;
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.put("/medicamento_accionterapeutica", (req, res) => {
    const sql = `update medicamento_accionterapeutica set ${req.body.propiedad_medicamento_accionterapeutica} = ? where id = ?`;
    base.con.query(sql, [req.body.nuevo_valor_medicamento_accionterapeutica, req.body.id_update_medicamento_accionterapeutica], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.delete("/medicamento_accionterapeutica", (req, res) => {
   const sql =`delete from medicamento_accionterapeutica where id = ?`;
    base.con.query(sql,[req.body.id_delete_medicamento_accionterapeutica], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
    console.log(req.body);
});

console.log(module);