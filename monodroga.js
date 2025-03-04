let base=require('./base_datos');

base.app.get("/monodroga", (req, res) => {
    const sql ="SELECT id, nombre FROM monodroga";
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.post("/monodroga", (req, res) => {
   const sql =`insert into monodroga (nombre) values ("${req.body.name}")`;
    base.con.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
    console.log(req.body);
});

base.app.put("/monodroga", (req, res) => {
    const sql = `update monodroga set nombre = ? where id = ?`;
    base.con.query(sql, [req.body.nuevo_valor, req.body.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

base.app.delete("/monodroga", (req, res) => {
    const sql =`delete from monodroga where (id) = ("${req.body.id_delete}")`;
     base.con.query(sql, (err, result) => {
         if (err) return res.status(500).json({ error: err.message });
         res.json(result);
     });
     console.log(req.body);
 });

 console.log(module);