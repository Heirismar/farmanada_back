let base=require('../base_datos');

//MEDICAMENTO_MONODROGA
base.app.get("/medicamento_presentacion", (req, res) => {
    const sql =" SELECT medicamento_presentacion.id as id,medicamento.nombre as medicamento, presentacion.cantidad as cantidad,presentacion.nombre as presentacion, presentacion.contenido as contenido,presentacion.unidad_medida as unidad_medida, medicamento_presentacion.imagen as imagen FROM ((medicamento_presentacion INNER JOIN medicamento ON medicamento_presentacion.id_Medicamento=medicamento.id) INNER JOIN presentacion ON medicamento_presentacion.id_Presentacion=presentacion.id) ORDER BY id";
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.post("/medicamento_presentacion", (req, res) => {
    const sql =`insert into medicamento_presentacion (id_Medicamento, id_Presentacion, imagen) values ("${req.body.presentacion_medicamento}","${req.body.presentacion_presentacion}","${req.body.presentacion_imagen}")`;
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.put("/medicamento_presentacion", (req, res) => {
    const sql = `update medicamento_presentacion set ${req.body.propiedad_medicamento_presentacion} = ? where id = ?`;
    base.con.query(sql, [req.body.nuevo_valor_medicamento_presentacion, req.body.id_update_medicamento_presentacion], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.delete("/medicamento_presentacion", (req, res) => {
   const sql =`delete from medicamento_presentacion where id = ?`;
    base.con.query(sql,[req.body.id_delete_medicamento_presentacion], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
    console.log(req.body);
});
console.log(module);