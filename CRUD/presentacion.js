let base=require('../base_datos');
//CARGO
base.app.get("/presentacion", (req, res) => {
    const sql =" select * from presentacion";
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.post("/presentacion", (req, res) => {
   const sql =`insert into presentacion (cantidad,nombre,contenido, unidad_medida) values ("${req.body.presentacion_cantidad}","${req.body.presentacion_nombre}","${req.body.presentacion_contenido}","${req.body.presentacion_unidad_medida}")`;
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
    console.log(req.body);
});

base.app.put("/presentacion", (req, res) => {
    const sql =`update presentacion set ${req.body.propiedad_presentacion} = ? where id = ?`;
    base.con.query(sql, [req.body.presentacion_nuevo_valor, req.body.id_update_presentacion], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.delete("/presentacion", (req, res) => {
   const sql =`delete from presentacion where (id) = ("${req.body.id_delete_presentacion}")`;
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
    console.log(req.body);
});

console.log(module);