let base=require('../base_datos');

//MEDICAMENTO_MONODROGA
base.app.get("/medicamento_laboratorio", (req, res) => {
    const sql =" SELECT medicamento_laboratorio.id as id, medicamento.nombre as medicamento, presentacion.cantidad as cantidad, presentacion.nombre as presentacion, presentacion.contenido as contenido, presentacion.unidad_medida as unidad_medida, laboratorio.nombre as laboratorio, laboratorio.direccion as direccion_laboratorio FROM ((((medicamento_laboratorio INNER JOIN medicamento_presentacion ON medicamento_laboratorio.idMedicamento_presentacion=medicamento_presentacion.id ) INNER JOIN medicamento ON medicamento_presentacion.id_Medicamento=medicamento.id) INNER JOIN presentacion ON medicamento_presentacion.id_Presentacion=presentacion.id) INNER JOIN laboratorio ON medicamento_laboratorio.id_Laboratorio=laboratorio.id) ORDER BY id";
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.post("/medicamento_laboratorio", (req, res) => {
    const sql =`insert into medicamento_laboratorio (idMedicamento_presentacion,id_Laboratorio	) values ("${req.body.laboratorio_medicamento_presentacion}","${req.body.laboratorio_laboratorio}")`;
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
}); 

base.app.put("/medicamento_laboratorio", (req, res) => {
    const sql = `update medicamento_laboratorio set ${req.body.propiedad_medicamento_laboratorio} = ? where id = ?`;
    base.con.query(sql, [req.body.nuevo_valor_medicamento_laboratorio, req.body.id_update_medicamento_laboratorio], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.delete("/medicamento_laboratorio", (req, res) => {
   const sql =`delete from medicamento_laboratorio where id = ?`;
    base.con.query(sql,[req.body.id_delete_medicamento_laboratorio], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
    console.log(req.body);
});
console.log(module);